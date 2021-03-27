# Software Testing

Software testing is a method to check whether the actual software matches the expected requirements and to ensure that the software is defect free. It involves the execution of software components using manual or automated tools to ensure the quality and requirements.

## Importance

Software testing is important because if there are any bugs, errors or missing requirements in the software, then it can be identified early and can be solved before delivery the software to the customer.

## Software tests benefits

Properly tested software ensures reliability, security and product quality which further results in time saving, costs effectiveness and customer satisfaction.

## Types of software testing


### Black-box testing

Also known as Behavioral Testing, is a method focused on the input and output of software applications, allowing functionalities of the software to be tested without knowledge of its internal code structure. Its based entirely on the software requirements.

Types of Black-box testing:

- Regression testing: this kind of test is done after any system maintenance to check if any new fixes/upgrades has affected the already existing code

- Functional testing: done by software testers, it's based on the software requirements

- Non-functional testing: not related to testing an specific functionality, this test focuses on non-functional elements such as performance, scalability and usability

Steps to do a black-box test:

- Analyze the system requirements and specifications
- Choose a valid set of inputs, to form the positive test scenario, to check if the functionality its working as expected. There is also a need to form a negative test scenario where is chosen a set of invalid inputs to check if the functionality tested its able to detect them.
- Define expected inputs and outputs for all set of inputs
- Construct test case with the set of inputs
- Execute the test cases
- Compare the expected output with the real ones
- detects any inconsistency with the real outputs or fixes and re-test.


### Functional testing

Function testing validates the software system against the functional requirements/specifications. The purpose of functional tests is to test each function/component/module of the software application, by providing appropriate input and verify that the output is equal to the expected output requirement.

The functional testing test:

- Mainline functions: testing separated functions checking whether the execution returns the expected output
- Error conditions: testing corner cases and their treatments
- Basic usability and accessibility: It involves basic usability testing checking whether the user can freely navigate through the application without any difficulties

Some steps of functional testing are:

- Understand the functional requirements
- Identify test input or test data based on requirements
- Compute the expected outcomes with selected test input values
- Execute test cases
- Compare actual and computed expected results

Some examples of functional testing are:

- User Acceptance Testing
- Unit testing
- Integration testing

### User Acceptance Testing

User Acceptance Testing, a.k.a UAT, is a type of testing performed by the end user or the client to verify/accept the software system before moving the software application to the production environment. UAT is done in the final phase of testing after functional, integration and system testing is done and uncommonly in parallel to catch missing requirements in Beta environment.

The main Purpose of UAT is to validate end to end business flow. It is carried out in a separate testing environment with production-like data setup. It is kind testing where two or more end-users will be involved.

### UAT Roles

- **UAT Tester** should possess good knowledge of the business. He should be independent and think as an unknown user to the system. Tester should be Analytical and Lateral thinker and combine all sort of data to make the UAT successful.
- The **End User, customer or stakeholders** to confirm business objectives

### Unit testing

Is a type of software testing where individual units or components of a software are tested. The purpose is to validate each unit of the software code performs as expected, isolating code sections and verifying their correctness. Unit testing is done during the development/coding phase of an application by the developers or QA engineers, when there are time concern or reluctance of developers to test.

### Unit testing Roles

- This testing methodology is done during the development process by the software developers and sometimes QA staff

### Integration testing

TODO

### Non-function testing or performance testing

TODO

## References

- https://www.guru99.com/software-testing-introduction-importance.html
- https://www.guru99.com/black-box-testing.html
- https://www.guru99.com/functional-testing.html
- https://www.guru99.com/unit-testing-guide.html
- https://www.guru99.com/user-acceptance-testing.html
