# Environment

An environment is a system in which a computer program or software component is deployed and executed.

### Why?
Dedicated environments for every step of development is a must. It's one of the best ways to optmize resources, prevent bugs and errors from reaching the end user as well as allowing developers and testers to tinker without fear, as some of these environments can be easily reset.

### Benefits
* No lasting consequences
* Cost optmizing
* Security
* Reliability

---

## Development:

The development environment (dev) is the environment in which changes the software is developed, most simply an individual developer's workstation. This differs from the ultimate target environment in various ways – the target may not be a desktop computer (it may be a smartphone, embedded system, headless machine in a data center etc.), and even if otherwise similar, the developer's environment will include development tools like a compiler, integrated development environment, different or additional versions of libraries and support software, etc., which are not present in a user's environment.

## Integration:

The integration environment is comprised by on demand computing, only running (and charging) for the small ammount of time when changes are tested and integrated. It must be able to build and run all tests, while also providing feedback and log traces for debbuging.

## Testing:

The environment where interface testing is performed. A quality control team ensures that the new code will not have any impact on the existing functionality and tests major functionalities of the system after deploying the new code in the test environment.

## Staging:

The primary use of a staging environment is to test all the installation/configuration/migration scripts and procedures before they are applied to a production environment. This ensures all major and minor upgrades to a production environment are completed reliably, without errors, and in a minimum ammount of time. 

## Production/Live:

The production environment is also known as live, particularly for servers, as it is the environment that users directly interact with. It's underlying OS contains just enough to run the application, in order to minimize security threats. It's also one of the only environments that has to always be running, with fallbacks usually in place.

---

### Sources:
* https://medium.com/swlh/environments-in-software-development-cf84adbbf197
* https://deploybot.com/blog/using-multiple-environments-to-improve-your-development-workflow#:~:text=Using%20multiple%20environments%20ensures%20that,and%20made%20available%20to%20users.&text=Here%2C%20developers%20deploy%20their%20code,re%2Ddeploying%20for%20further%20testing.
