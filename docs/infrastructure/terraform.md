# Terraform

Terraform is an open-source infrastructure as code software tool that provides a consistent CLI workflow to manage hundreds of cloud services. Terraform codifies cloud APIs into declarative configuration files.

Configuration files describe to Terraform the components needed to run a single application or the entire datacenter. Terraform generates an execution plan describing what it will do to reach the desired state, and then executes it to build the described infrastructure. As the configuration changes, Terraform is able to determine what changed and create incremental execution plans which can be applied.

## Concepts

### Execution Plans

Terraform has a "planning" step where it generates an execution plan. The execution plan shows what Terraform will do when you call apply. This lets to avoid any surprises when Terraform manipulates infrastructure.

### Resource Graph

Terraform builds a graph of all resources, and parallelizes the creation and modification of any non-dependent resources. Because of this, Terraform builds infrastructure as efficiently as possible, and operators get insight into dependencies in their infrastructure.

### Providers

The providers component of the architecture are providers for specific technologies. This could be cloud providers like AWS, Azure, GCP, or other infrastructure as a service platform. It is also a provider for more high-level components like Kubernetes or other platform-as-a-service tools, even some software as a self-service tool.

For example - create an AWS infrastructure, then deploy Kubernetes on top of it and then create services/components inside that Kubernetes cluster.

Terraform has over a hundred providers for different technologies, and each provider then gives terraform user access to its resources. So through AWS provider, for example, it given access to hundreds of AWS resources like EC2 instances, the AWS users, etc. With Kubernetes provider, it access to commodities, resources like services and deployments and namespaces, etc.

## Lifecycle

Terraform lifecycle consists of - init, plan, apply, and destroy.

- Terraform init initializes the working directory which consists of all the configuration files
- Terraform plan is used to create an execution plan to reach a desired state of the infrastructure. Changes in the configuration files are done in order to achieve the desired state.
- Terraform apply then makes the changes in the infrastructure as defined in the plan, and the infrastructure comes to the desired state.
- Terraform destroy is used to delete all the old infrastructure resources, which are marked tainted after the apply phase.

## References

- https://www.terraform.io/
- https://geekflare.com/terraform-for-beginners/#:~:text=Terraform%20Core%20concepts&text=Provider%3A%20It%20is%20a%20plugin,and%20access%20its%20related%20resources.&text=Data%20Source%3A%20It%20is%20implemented,be%20used%20by%20other%20configurations.
- https://www.terraform.io/intro/index.html

## See more

- [Infrastructure as Code](./iac.md)
- [AWS ECR for image repository as service](./ecr.md)
