# todo-app
Basic node.js api used as a base to implement basic DevOps procedures

## Workflows:
### Merges to main:
  - Triggers CI steps
  - Unit/Integration tests
  - Audit dependencies
  - Manually aproved CD (with manual approval)
  - Build & push Docker image

### CD application:
  - Retrieve secrets
  - Replace container
  - Run DB migrations

### CD infrastructure:
  - provision: EC2, S3, RDS, Cloudwatch & Logs

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
