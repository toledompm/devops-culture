# Infrastructure as Code

Infrastructure as Code (IaC) is the managing and provisioning of infrastructure through code instead of through manual processes.

With IaC, configuration files are created that contain your infrastructure specifications, which makes it easier to edit and distribute configurations. It also ensures that the provision the same environment every time.

By codifying and documenting the configuration specifications, IaC aids configuration management and helps to avoid undocumented, ad-hoc configuration changes.

Version control is an important part of IaC, and the configuration files should be under source control just like any other software source code file. 

Deploying infrastructure as code also means that it can divide the infrastructure into modular components that can then be combined in different ways through automation.

IaC is an important part of implementing DevOps practices and continuous integration/continuous delivery (CI/CD). IaC takes away the majority of provisioning work from developers, who can execute a script to have their infrastructure ready to go.  

## Benefits

With cloud computing, the number of infrastructure components has grown, more applications are being released to production on a daily basis, and infrastructure needs to be able to be spun up, scaled, and taken down frequently. Without an IaC practice in place, it becomes increasingly difficult to manage the scale of today’s infrastructure.

Some benefits

- Cost reduction
- Increase in speed of deployments
- Reduce errors 
- Improve infrastructure consistency
- Eliminate configuration drift

IaC helps to align development and operations because both (development and operation) teams can use the same description of the application deployment, supporting a DevOps approach.

The same deployment process should be used for every environment, including the production environment. IaC generates the same environment every time it is used.

## Popular choices

Server automation and configuration management tools can often be used to achieve IaC. There are also solutions specifically for IaC. 

These are a few popular choices:

- Chef
- Puppet
- Red Hat Ansible Automation Platform
- Saltstack
- Terraform 
- AWS CloudFormation

## See more

[Terraform tool for Infra as Code](./terraform.md)

## References

- https://www.redhat.com/en/topics/automation/what-is-infrastructure-as-code-iac#:~:text=Infrastructure%20as%20Code%20(IaC)%20is,to%20edit%20and%20distribute%20configurations.
