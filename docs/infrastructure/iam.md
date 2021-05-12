# AWS Identity Access Management (IAM)

## What is IAM?

Is a permission system that regulates acces to AWS resources, helps the administrator define who can access what in an AWS account.

Allows to assign permissions to groups of users or an specific user, permissions can give access of entire AWS Services, like EC2, ECS, RDS, etc,. Or even to one specific service.

Provides an mecanism to monitor and audit by specific resource, by enabling AWS CloudTrail.

Can integrate with other Identity Tech like Microsoft ActiveDirectory, Google IAM, LDAP, etc.

## How IAM Works

4 key concepts: Users, Groups, Roles, and Policies/Permissions.

- Users: Specific Individuals, can receive personal logins to connect to AWS Console or AWS CLI with generated secrets keys.

- Groups: Collections of users, each group can have different permissions according to his own users.

- Roles: Collections of policies, for example, a role can have policies to read and write database, normally are assumed to groups, not users.

- Policies: Low level permission to access AWS resources, a permission can allow or deny, ex:

## See more

