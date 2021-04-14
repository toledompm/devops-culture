# Docker

Docker is an open platform for containerization that allows developers to create and utilize linux containers in order to run applications separated from the local infrastructure. Docker platform aims to allow the creation, testing and implementing of applications in a isolated environment called container. This way the developer can package the software in a standardized way.

With Docker, it is possible to use the containers as modular virtual machines in which every container will run a singular application, so it became lightweight.

This provides the ability to package the application and run it in a loosely isolated environment called container. It also ensures that the application is running equally in any machine that utilizes the container image, since every container contains everything needed to run the application.

## Docker advantages

- **Rapid application deployment** – containers include the minimal runtime requirements of the application, reducing their size and allowing them to be deployed quickly.
- **Portability across machines** – an application and all its dependencies can be bundled into a single container that is independent from the host version of Linux kernel, platform distribution, or deployment model. This container can be transfered to another machine that runs **Docker**, and executed there without compatibility issues.
- **Version control and component reuse** – It can track successive versions of a container, inspect differences, or roll-back to previous versions. Containers reuse components from the preceding layers, which makes them noticeably lightweight.
- **Sharing** – It can use a remote repository to share container with others developers. Red Hat provides a registry for this purpose, and it is also possible to configure private repository.
- **Lightweight footprint and minimal overhead** – Docker images are typically very small, which facilitates rapid delivery and reduces the time to deploy new application containers.
- **Simplified maintenance** – Docker reduces effort and risk of problems with application dependencies.

## Docker Usage

Containers are great for continuous integrations and continuous delivery (CI/CD) workflows since it simplify the development lifecycle as every team member can use a local container image of the application in development to work and once the work is finished, it can be deploy to a test environment in order to execute automated tests. If any bug is found it can be fixed and redeploy for validation. Finally when testing is completed the deploys is as simple as push the actual container image to production environment.

Docker’s container-based platform allows for highly portable workloads. Docker containers can run on a developer’s local laptop, on physical or virtual machines in a data center, on cloud providers, or in a mixture of environments.

Docker’s portability and lightweight nature also make it easy to dynamically manage workloads, scaling up or tearing down applications and services as business needs dictate, in near real time.

## See more

- [Using docker images](./docker_images.md)

## References

- https://docs.docker.com/get-started/overview/
- https://www.redhat.com/pt-br/topics/containers/what-is-docker
- https://access.redhat.com/documentation/en-us/red_hat_enterprise_linux/7/html/7.0_release_notes/sect-red_hat_enterprise_linux-7.0_release_notes-linux_containers_with_docker_format-advantages_of_using_docker
