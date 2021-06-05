# Test Coverage

Test coverage are one of the most fundamentals metrics used to analyse, meansure and track the effectiveness of the product, being able to prevent and prevent many of the future problems in the application.

- [Test Coverage](#test-coverage)
  - [What is Test Coverage](#what-is-test-coverage)
  - [Benefits of Test Coverage](#benefits-of-test-coverage)
  - [How to perform a test coverage](#how-to-perform-a-test-coverage)
    - [Branch coverage](#branch-coverage)
    - [Statement coverage](#statement-coverage)
    - [Function coverage](#function-coverage)
    - [Call coverage](#call-coverage)
  - [See More](#see-more)

## What is Test Coverage

It is an important indicator of software quality and is an essential tool for easy code maintenance, and is also called in code coverage in certain cases. It can help monitoring the quality of testing and assist in directing the test generators to create future test cases that cover areas that have not been tested.

## Benefits of Test Coverage

- Requirements traceability
- Easily test maintenance
- Better ROI
- Software Quality meansurement
- Bugs prevention

## How to perform a test coverage

There are different ways you can run test coverage. You can focus on the following subtypes.

### Branch coverage

Referred to as decision coverage, which aims to ensure that each one of the possible branch from each decision point is executed at least once and thereby ensuring that all reachable code is executed.

Branch Formula:
`Branch Testing = (Number of decisions outcomes tested / Total number of decision Outcomes) * 100%`

### Statement coverage

Is a White Box testing technique, which includes the execution of all statements at least once in code. This includes corner or boundary cases, these codes are the smallest units to be execu table only once.

Statement formula:
`Statement Testing = (Number of of statements Executed / Total number of statements in the source code * 100)`

### Function coverage

It refers to a number of functions that are susceptible to be tested, for say exported functions/APIs.

### Call coverage

The difference from [Function coverage](#function-coverage), is that Call coverage calculate the percentage of executed software function calls. It is a structural coverage metric that helps to judge the degree of testing at the architectual level.

## See More

- [Software Testing](./readme.md)
