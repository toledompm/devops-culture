# AWS Identity Access Management (IAM)

## What is IAM?

Is a permission system that regulates access to AWS resources, helps the administrator define who can access what in an AWS account.

Allows to assign permissions to groups of users or an specific user, permissions can give access of entire AWS Services, like EC2, ECS, RDS, etc,. Or even to one specific service.

Provides an mecanism to monitor and audit by specific resource, by enabling AWS CloudTrail.

Can integrate with other Identity Tech like Microsoft ActiveDirectory, Google IAM, LDAP, etc.

## How IAM Works

4 key concepts: Users, Groups, Roles, and Policies/Permissions.

- Users: Specific Individuals, can receive personal logins to connect to AWS Console or AWS CLI with generated secrets keys.

- Groups: Collections of users, each group can have different permissions according to his own users.

- Roles: Collections of policies, for example, a role can have policies to read and write database, normally are assumed to groups, not users.

- Policies: Low level permission to access AWS resources, a permission can allow or deny, ex:

```json
{
  "Version": "2012-10-17",
  "Statement": [
    {
      "Sid": "ReadAndWriteDatabase",
      "Effect": "Allow",
      "Action": [
        "dynamodb:Scan",
        "dynamodb:Query"
      ],
      "Resource": [
        "arn:aws:dynamodb:us-east-1::table/Transactions"
      ]
    }
  ]
}
```

## Best Pratices

### Use Least Priviliege Model

This means to give the users the minimun permissions to execute a task, avoiding unecessary disasters.

### Validate your policies

Is recommended the review and validation of all existing policies. IAM Access Analyzer provides over 100 policy checks and actionable recommendations to help secure and functional policies.

### Do not share access keys

Do not embed access keys within unencrypted code or share these security credentials between users in your AWS account.

## See more

[Amazon Web Services](./aws.md)

[AWS Elastic Container Service](./ecs.md)

[Infrastructute](./readme.md)

## References

- [What is user management?](https://jumpcloud.com/blog/what-is-user-management)

- [What is IAM?](https://docs.aws.amazon.com/IAM/latest/UserGuide/introduction.html)

- [Managing access keys for IAM users](https://docs.aws.amazon.com/IAM/latest/UserGuide/id_credentials_access-keys.html)
