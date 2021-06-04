# Continuous delivery

After performing the automation of the builds and the unit and the integration tests in CI, the continuous delivery automates the release of this validated code in a repository. Therefore, to have an effective continuous delivery process, it is important that CI is already integrated into the development pipeline. The goal of continuous delivery is to ensure a code base that is always ready for deployment in a production environment.

Each step of continuous delivery, from consolidating code changes to delivering production-ready builds, includes automating code launching and testing. At the end of this process, the operations team can quickly and easily deploy an application to production.

## Continuous deployment

The final step in a solid CI / CD pipeline is continuous deployment. It is a complement to continuous delivery, which automates the release of production-ready builds into a code repository. Continuous deployment automates the launch of an application for production. As there is no manual channel in the pipeline stage prior to production, continuous deployment is highly dependent on optimized testing automation.
In practice, continuous deployment means that changing the developer on an application will be enabled after a few minutes after recording (assuming it passes the automated test). This makes it much easier to receive feedback from users and incorporate it. Together, all of these related CI / CD practices decrease the risk of deploying applications, making it easier to launch changes in small parts, rather than all at once. However, there is also a need for many initial investments, as automated tests need to be recorded to accommodate various testing and launch steps in the CI / CD pipeline.

![CD Context](/assets/images/cd_1.png)

## See more

- [Continuous integration - CI](./ci.md)
- [Applications healthcheck](./healthcheck.md)
