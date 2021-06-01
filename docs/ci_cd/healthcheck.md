# Healthchecks
One important step in continuous delivery, is guaranteeing a healthy start for the newly deployed revision. If breaking changes manage to sneak through tests and homologation, it shouldn't be left for developers, or even worse, customers to notice something wrong. That's where healthchecks come in. It's possible to define a set of instructions to be executed in defined time intervals, to ensure our application is up and running. Here are some things to test during healthchecks:
- Overall availability
- Latency
- Error rates

Certain routines can be executed in case of healthcheck failures, such as alarms, or in some cases even rollbacks to a previous, healthy revision.

## Healthchecks in ECS
We can set healthcheck parameters directly in our `task-definition.json`, here's a snippet from our example repository:
``` json
...
      "healthCheck": {
        "command": ["CMD-SHELL", "curl -f http://localhost:APP_PORT || exit 1"],
        "interval": 30,
        "retries": 3,
        "timeout": 5
      }
...
```
[devops-app/task-definition.json](https://github.com/toledompm/devops-app/blob/main/task-definition.json#L40-L45)

For a more in depth look, there is the official AWS documentation in the references section.

## References
- [ECS TaskDefinition::HealthCheck](https://docs.aws.amazon.com/AmazonECS/latest/APIReference/API_HealthCheck.html)
- [The importance of Healthchecks](https://victorops.com/blog/regular-application-health-checks-and-monitoring#:~:text=Application%20health%20checks%20are%20when,the%20way%20it's%20expected%20to.)
