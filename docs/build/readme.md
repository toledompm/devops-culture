# Software portability

Software portability is the process in which a software is developed and deployed in a way that the same software runs equally in different environments. It refers to a software or application that can be recompiled for a different platform of to a software that is available for two or more different platforms.

The Pre-requirement for portability is the generalized abstraction between the application logic and system interfaces. When software with the same functionality is produced for several computing platforms, portability is the key issue for development cost reduction.

## Importance

For Dev-ops teams, portability comes with stability. With it, you won't have different behaviors on different platforms, you won't waste time addressing environment related configs. It eliminates any possible scenario were you would have to tuning your environment every single staging.

For Dev teams, portable software can be easily used on other platforms. This means that if your dev team moves to different environment, you won't waste time and resources on re-development.

## Application building

Packaging source-code into an executable or binary is a big part of software portability. It allows for easy redistribution, as whoever gets a hold of the application, is not required to build it, or be responsible for finding and downloading dependencies.

The actual steps for building an application varies wildly depending on platform, architecture, development tools etc. But the principles and benefits hold through.

## Software portability implementation

Portability has 3 dimensions:

- Vertical (Development lifecycle): It refers to the software consistency through the whole development lifecycle;
- Horizontal (Platform/provider migration): Horizontal stands for platform/dependency flexibility;
- Deep (Replication): Deep means how scalable and replicable your code/architecture/software is;

### Strategies for Portability

- Transferring installed program files to another computer of basically the same architecture.
- Reinstalling a program from distribution files on another computer of basically the same architecture.
- Building executable programs for different platforms from source code (this is usually called “porting”);

## References

- https://developerexperience.io/practices/software-portability
- https://en.wikipedia.org/wiki/Software_portability
- https://www.pcmag.com/encyclopedia/term/software-portability

## See more

- [Software Coverage](../tests/test_coverage.md)
- [Portability with Docker](./docker.md)
- [Docker images](./docker_images.md)
- [Application build and compiling](./compiling.md)
