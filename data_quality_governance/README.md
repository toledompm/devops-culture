# Data Quality Governance

Data quality governance is a discipline that aims to manage and watch over our company data, so that data can be transformed into business value and support strategic decisions. For this, data quality governance uses methodologies, processes, professionals and tools.

## Why?

Our amount of data grows exponentially and that is why we prioritize data security, productivity in generating business information and maintaining data and our organizational culture with good practices.

## Benefits

Our benefits are a better decision-making, this applies to both bussiness process and for development facilities, being sure that decision will be based on the right data. We also have better data quality to developers spend less time looking up the names of tables, views, and columns.

---

## Database Catalog Conventions

We have our conventions that we use when saving our data.

### Table conventions

For our Tables, we have some rules and pratices that must be cared for. Our main goal is the fast readability.

- The formats names for our tables, columns, keys, etc., is in `snake_case`, and in lower case.

- Columns Names we avoid abreviations, just keep your function, if a column is for a description, just called `"description"`.

- Every table should have its own row identifier.

- Prefix should make sense and be easy to understand.

### Date and Time conventions

To save dates, the standard format is `YYYY-MM-DD`.

And to save time, the format is `HH:MM:SS:ZZZ`.

---

## Metadata for data sets

### Items to be catalog

- Data author

- What data this set contains

- Descriptions of fields

- When/Where the data was created

- Why this data was created and how

---

## Documentation

Within data management best practices, we can’t overlook documentation. It’s often smart to produce multiple levels of documentation that will provide full context to why the data exists and how it can be utilized.

### Documentation levels

- Project-level, we must keep the project level documentation updated with the valuable concepts in .md files to our projects, helping newcomers in a easy way to understand.

- File-level, help document our most complex codes and have a business rule to make it easy to maintain and implement new features.

- Software used, include the version of the software, if future users are using a different version, they can work through the differences and software issues that might occur, its also a good practice keep the software, version and the options to be installed always an standard.

- Context, it is essential to give any context to the project, why it was created, if hypotheses were trying to be proved or disproved, etc.

---

## Data quality trust in security and privacy

We have a culture who priorize the security of our data with strong privacy standards to build a relationship with clients.
