Feature: Comment on issues

	Scenario: An issue is opened
		Given the app has been installed on a GitHub repo
		When an issue is opened on the Repo
		Then a comment should be added to the Repo saying:
			"""
			Thanks for opening this issue!
			"""