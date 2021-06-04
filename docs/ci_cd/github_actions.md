# GitHub Actions

GitHub Actions helps to automate software development workflows with GitHub. You can deploy workflows in the same place where you store code and collaborate on pull requests and problems.

In GitHub Actions, a workflow is an automated process that you configure in the GitHub repository. You can create, test, build, launch or deploy any project on GitHub with a workflow.

Each workflow consists of individual actions that are performed after a specific event occurs (such as a pull request). Individual actions are packaged scripts that automate software development tasks.

## GitHub Actions Components

- **Workflow**: This is where we will describe the entire automation process so that we can compile, test and deploy our system.
- **Actions**: These are tasks that we will use within the workflow. Here we are going to define what our workflow is really going to do.
- **Runners**: It is the machine responsible for executing the workflow and actions and providing us with feedback on our process. The Runner can be GitHub-hosted, provided by the team itself or self-hosted runner, where you are responsible for managing the server and the services installed on it.

## See more

- [Applications healthcheck](./healthcheck.md)
- [Applications monitoring](../monitoring/readme.md)
