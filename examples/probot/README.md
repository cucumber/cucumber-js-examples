# cucumber-probot-example

> A GitHub App built with [Probot](https://github.com/probot/probot) that An example of using Cucumber to test-drive a probot app

## Setup

```sh
# Install dependencies
npm install

# Run the bot
npm start
```

## Docker

```sh
# 1. Build container
docker build -t cucumber-probot-example .

# 2. Start container
docker run -e APP_ID=<app-id> -e PRIVATE_KEY=<pem-value> cucumber-probot-example
```

## Contributing

If you have suggestions for how cucumber-probot-example could be improved, or want to report a bug, open an issue! We'd love all and any contributions.

For more, check out the [Contributing Guide](CONTRIBUTING.md).

## License

[ISC](LICENSE) © 2022 Matt Wynne <matt@cucumber.io>
