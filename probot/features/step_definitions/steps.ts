import { Before, Given, When, Then } from "@cucumber/cucumber"
import path from "path"
import fs from "fs"
import { Probot, ProbotOctokit } from "probot"
import payload from "../../test/fixtures/issues.opened.json"
import myProbotApp from "../../src"
import nock from "nock"
import { assertThat, equalTo } from "hamjest"

const privateKey = fs.readFileSync(
  path.join(__dirname, "../../test/fixtures/mock-cert.pem"),
  "utf-8"
)

Before(function () {
  this.probot = new Probot({
    appId: 123,
    privateKey,
    // disable request throttling and retries for testing
    Octokit: ProbotOctokit.defaults({
      retry: { enabled: false },
      throttle: { enabled: false },
    }),
  })
  // Load our app into probot
  this.probot.load(myProbotApp)
})

Given("the app has been installed on a GitHub repo", function () {
  nock("https://api.github.com")
    // return a test token
    .post("/app/installations/2/access_tokens")
    .reply(200, {
      token: "test",
      permissions: {
        issues: "write",
      },
    })
    .post(
      "/repos/hiimbex/testing-things/issues/1/comments",
      (responseBody: any) => (this.issueComment = responseBody.body)
    )
    .reply(200)
})

When("an issue is opened on the Repo", async function () {
  await this.probot.receive({ name: "issues", payload })
})

Then(
  "a comment should be added to the Repo saying:",
  function (expectedComment) {
    assertThat(this.issueComment, equalTo(expectedComment))
  }
)
