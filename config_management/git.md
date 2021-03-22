### Code Versioning
Version control is simply the control of changes to project files, in order to maintain a history of everything that has been created and changed since the code was created.

### Why?
Version control can avoid several problems, for example, files or documents are altered by two people in parallel and one overwrites the previous change, it also prevents the loss of functional files that have been altered and presented problems etc.

### Benefits
Having an efficient version control still helps to maintain the quality of the product, helping to keep all developer with the same version of the product, or if different versions of the same product are needed if any of the developer has special needs.
For project management, in addition to allowing several people to work in parallel on a project, **it also allows working with different versions of a project**, for example, part of the team finalizing version 1.0 while another part is already working on version 2.0.

### What is it for?
* History control
* Team work
* Version marking
* Recover of versions
* Project branching

---

### GITHUB
GitHub is a tool that opens development version control software through the Git system.
Through this system, two or more people can edit existing files or create without risking that their changes will be erased by the modifications of other team members. This is useful for the most different types of projects.

### Commits
Commits are points within a project's editing history and are made up of a set of file changes. They include a description that details exactly what has been changed in the code and a point to restore a particular version of the project.

### Branches
Branches are for programmers to be able to work on larger functionalities, which demand more development time, without affecting the current version of the application. GitHub creates a copy of the directory which can then be developed in isolation, without affecting the central repository or other branches.
When work is completed on a branch, it can be joined to other branches through the process known as merge.

### Pull Request
Pull Request, the person responsible for managing the project will receive a request to analyze the request and decide whether or not to accept a certain contribution. This serves both to merge branches with the central repository and to allow someone to copy the files to their personal computer.
The method is also useful for initiating code reviews and general discussions about certain changes before implementing them in the central repository.

---

## Commit Process
When added, edited or deleted a file, commits are added to the branch. This process of adding commits keeps track of the progress while working on a branch.

Commit messages are important, especially since Git tracks changes and displays them as commits as soon as they are sent to the server. By writing clear confirmation messages, this can be easier for others to follow and provide feedback.

Commit messages must start with a verb saying what action that commit will implement on the project.

Ex: “Add payment button on the Home Page”

To add the commit it is necessary to follow the steps:

~~~
git add <file>
git status
git commit -m “commit message”
git push
~~~

---

## Pull Request Process
When we upload our updates to the repository, a button like this will appear on our branch on GitHub:

![PR Button](https://i.stack.imgur.com/7yscx.png)

GitHub itself automatically analyzes the branch's commit with the most recent commit from the master, to check for conflicts (different information on the same line of code).

After that add two people to review the code and then just complete the pull request.

---

## Code Review Process
Code review is a code review practice that is widely used and important that can bring many benefits to the product and the team developing it.
Those chosen to review the code, follow the steps:
* Understand the purpose of the PR and see if the changes meet its objective;
* Be objective when commenting a part of the code;
* When suggesting an alternative to improve the problem, present references so that it is understood by everyone;
* Avoid discussions;
* Suggest techniques to improve.

---

## Merge Process
The merge process is the moment when the changes actually entered the project, after the code review is done, the merge option will appear and they will be added to the main branch.

![Merge Button](https://res.cloudinary.com/hy4kyit2a/f_auto,fl_lossy,q_70/learn/modules/git-and-git-hub-basics/work-with-teams-in-git-hub/images/ee1ac13899b9fda14ac445b737044893_5-noconflicts.png)
