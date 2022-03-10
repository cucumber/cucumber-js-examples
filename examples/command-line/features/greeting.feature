Feature: Greeting

	Scenario: Say hello
		When I run `greet hello`
		Then the stdout should contain "hello"
