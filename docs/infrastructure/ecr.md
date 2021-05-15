# Amazon Elastic Container Registry

Amazon Elastic Container Registry (ECR) is a fully managed container registry that makes it easy to store, manage, share, and deploy your container images and artifacts anywhere. Amazon ECR eliminates the need to operate your own container repositories or worry about scaling the underlying infrastructure.

Amazon ECR hosts your images in a highly available and high-performance architecture, allowing you to reliably deploy images for your container applications. You can share container software privately within your organization or publicly worldwide for anyone to discover and download. For example, developers can search the ECR public gallery for an operating system image that is geo-replicated for high availability and faster downloads. Amazon ECR works with [Amazon Elastic Kubernetes Service (EKS)](https://aws.amazon.com/eks/), [Amazon Elastic Container Service (ECS)](https://aws.amazon.com/ecs/), and [AWS Lambda](https://aws.amazon.com/lambda/), simplifying your development to production workflow, and [AWS Fargate](https://aws.amazon.com/fargate/) for one-click deployments. Or you can use ECR with your own containers environment.

Integration with AWS Identity and Access Management (IAM) provides resource-level control of each repository. With ECR, there are no upfront fees or commitments. You pay only for the amount of data you store in your repositories and data transferred to the Internet.

## Benefits

##### Effort reducing with a fully managed registry

Amazon Elastic Container Registry eliminates the need to operate and scale the infrastructure required to power your container registry. There is no software to install and manage or infrastructure to scale. Just push your container images to Amazon ECR and pull the images using any container management tool when you need to deploy.

##### Fast and highly available access

Amazon Elastic Container Registry has a highly scalable, redundant, and durable architecture. Your container images are highly available and accessible, allowing you to reliably deploy new containers for your applications. You can reliably distribute public container images as well as related files such as helm charts and policy configurations for use by any developer. ECR automatically replicates container software to multiple AWS Regions to reduce download times and improve availability.

##### Securely sharing and download of container images

Amazon Elastic Container Registry transfers your container images over HTTPS and automatically encrypts your images at rest. You can configure policies to manage permissions and control access to your images using AWS Identity and Access Management (IAM) users and roles without having to manage credentials directly on your EC2 instances.

### Workflow deployment simplified

Amazon Elastic Container Registry integrates with Amazon EKS, Amazon ECS, AWS Lambda, and the Docker CLI, allowing you to simplify your development and production workflows. You can easily push your container images to Amazon ECR using the Docker CLI from your development machine, and integrated AWS services can pull them directly for production deployments. Publishing container software is as easy as a single command from CI/CD workflows used in the software developer process.

## References

- https://aws.amazon.com/ecr
