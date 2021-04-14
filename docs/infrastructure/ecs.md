# Elastic Container Service (ECS)

Amazon Elastic Container Service (Amazon ECS) is a highly scalable, fast, managed [container orchestration](https://www.redhat.com/en/topics/containers/what-is-container-orchestration) service that makes it easy to run, stop, and manage containers. Allow to host containers on a serverless infrastructure that is managed by Amazon ECS by launching your services or tasks on AWS Fargate or host containers on instances in AWS Elatic Computing (EC2).

## Amazon ECS clusters

An Amazon ECS cluster is a logical grouping of tasks or services. A cluster is also a logical grouping of capacity providers. And also allows to create multiple clusters to keep resources separate.

## Amazon ECS tasks

A task definition is required to run Docker containers in Amazon ECS. Allows to set the image to run, how much CPU and memory use in each task, choose which infrastructure will run (Amazon Fargate or Amazon EC2), network, IAM roles, volumes, logging configurations and even the desired entrypoint.

## Amazon ECS services

An Amazon ECS services is able to run and maintain a specified number of instances of a task definition simultaneously in an Amazon ECS cluster. If any tasks fail or stop for any reason, the Amazon ECS service scheduler launches another instance of the task definition to replace it in order to maintain the desired number of tasks in the service.

## Topics

- [Getting started with Amazon ECS using EC2](https://docs.aws.amazon.com/AmazonECS/latest/developerguide/getting-started-ecs-ec2.html)
- [What is container orchestration?](https://www.redhat.com/en/topics/containers/what-is-container-orchestration)
