# todo-app
Basic node.js api used as a base to implement basic DevOps procedures


## DevOps concepts:
### CI:
- Tool: GitHub Actions
- Test step
- Build step (docker)
- Read secrets from S3 (emulating Secrets Manager)
- Push step (AWS ECR)


### CD:
- Tool: GitHub Actions
- Blue-Green deploy
- EC2 Instance 


### Infrastructure:
- Tool: Terraform
- Resources: ECR, RDS, S3, EC2, VPC + Subnets (public and private)
