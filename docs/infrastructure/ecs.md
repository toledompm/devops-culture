# Elastic Container Service (ECS)

Amazon Elastic Container Service (Amazon ECS) is a highly scalable, fast, managed [container orchestration](https://www.redhat.com/en/topics/containers/what-is-container-orchestration) service that makes it easy to run, stop, and manage containers. Allow to host containers on a serverless infrastructure that is managed by Amazon ECS by launching your services or tasks on AWS Fargate or host containers on instances in AWS Elatic Computing (EC2).

## Amazon ECS clusters

An Amazon ECS cluster is a logical grouping of **tasks** or **services**, as well as a logical grouping of capacity providers. Multiple clusters can be created to keep resources separate.

## Amazon ECS tasks

A task definition is required to run **Docker containers** in Amazon ECS. Allows to set the image to run, how much CPU and memory use in each task, choose which infrastructure will run (Amazon Fargate or Amazon EC2), network, IAM roles, volumes, logging configurations and even the desired entrypoint.

## Amazon ECS services

An Amazon ECS services is able to run and maintain a specified number of instances of a **task definition** simultaneously in an Amazon ECS cluster. If any tasks fail or stop for any reason, the Amazon ECS service scheduler launches another instance of the task definition to **replace** it in order to maintain the desired number of tasks in the service.

---

# Deploy a image on Amazon ECS using EC2

## Step 1: Create a task definition

A task definition is like a blueprint for your application. Each time you launch a task in Amazon ECS, you specify a task definition. The service then knows which Docker image to use for containers, how many containers to use in the task, and the resource allocation for each container.

- Select the **Region** you want to use.

- In the navigation pane, choose **Task Definitions**, **Create new Task Definition**.

- Configure your container definition with a given image, giving a name to contaner and edit the resources used by the container (CPU units, memory limits, volumes, environments and ports);
mourabrasil

- Choose create.

## Step 2: Create the Cluster

- Instance configuration
  - For **EC2 instance type**, choose either the **t2.micro** or **t3.micro**
  - For **EC2 Ami Id**, use the default value which is the Amazon Linux 2 Amazon ECS-optimized AMI.

- Networking
  - For **VPC** choose either **Create a new VPC** to have Amazon ECS create a new VPC for the cluster to use, or choose an existing VPC to use.

- Container instance IAM role
  - Choose **Create new role** to have Amazon ECS create a new IAM role for your container instances, or choose an existing Amazon ECS container instance (**ecsInstanceRole**) role that you have already created.

## Step 3: Create a Service

Select to configure the Amazon ECS service that is created from your task definition. A service launches and maintains a specified number of copies of the task definition in your cluster.

- In the **Service name field**, select a name for your service;

- Select your **task definition** and your **revision**, enter the number of tasks to launch with your specified task definition;

- In the **Security group field**, specify a range of IPv4 addresses to allow inbound traffic from, in CIDR block notation. For example, 203.0.113.0/24;

- In Task Placement select **AZ Balanced template**.
 
## See more

[Infrastructure as Code](./iac.md)

## References

- [Getting started with Amazon ECS using EC2](https://docs.aws.amazon.com/AmazonECS/latest/developerguide/getting-started-ecs-ec2.html)
- [What is container orchestration?](https://www.redhat.com/en/topics/containers/what-is-container-orchestration)
- [Amazon ECS-optimized AMIs](https://docs.aws.amazon.com/AmazonECS/latest/developerguide/ecs-optimized_AMI.html)
- [Amazon EC2 Pricing](https://aws.amazon.com/pt/ec2/pricing/)
