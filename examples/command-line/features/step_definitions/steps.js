const { exec } = require("child_process")

const { defineParameterType, When, Then } = require("@cucumber/cucumber")
const path = require("path")
const assert = require("assert")
const binDir = path.resolve(__dirname, "../../bin")
console.log(binDir)

defineParameterType({
  name: "command",
  regexp: /`(.+)`/,
  transformer: (cmd) => cmd,
})

When("I run {command}", function (command) {
  console.log(command)
  const world = this
  return new Promise((resolve, reject) => {
    exec(
      command,
      { env: { PATH: `${process.env.PATH}:${binDir}` } },
      (error, stdout, stderr) => {
        world.stdout = stdout.trim()
        world.stderr = stderr.trim()
        if (error) reject(error)
        resolve()
      }
    )
  })
})

Then("the stdout should contain {string}", function (string) {
  assert.equal(this.stdout, string)
})
