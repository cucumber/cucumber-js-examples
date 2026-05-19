# cucumber-probot-example

> An example of using Cucumber to test-drive a GitHub App built with [Probot](https://github.com/probot/probot).

## Setup

```sh
# Install dependencies
npm install

# Run the tests
npm test

# Start the bot
npm start
```

## Docker

```sh
# 1. Build container
docker build -t cucumber-probot-example .

# 2. Start container
docker run -e APP_ID=<app-id> -e PRIVATE_KEY=<pem-value> cucumber-probot-example
```

## License

[ISC](LICENSE) © 2022 Matt Wynne <matt@cucumber.io>
