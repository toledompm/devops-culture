# Docker images

An *image* is a read-only template with instructions for creating a Docker container.  It provides a convenient way to package up applications and preconfigured server environments. Docker images is often based on another image, with additional customization.

A docker image must contain all the essentials configurations and (installations, application code and dependencies) required to run a application.

It can be created by two ways:

- Interactive method: running a container from a existing Docker Image and manually changing that container environment, resulting in a new image.
- Dockerfile Method: constructing a plain-text file, known as Dockerfile, which provides the specifications for creating a Docker image;

## Docker Image overview

### Image Layers

Each of the files that make up a Docker image is known as a layer. These layers form a series of intermediate images, built one on top of each other, where each layer is dependent on the layer immediately below it.

The hierarchy of your layers directly influences your docker image lifecycle management efficiency  of your. Therefore you should organize layers that change the most often as high up the stack as possible because when you make changes to a layer in your image, Docker will not only rebuilds that particular layer but all layers built from it. Therefore a change to a layer at the top of the stack involves the least amount of computational work to rebuild the entire image.

### Container Layer

The container layer is a writable layer that is added every time Docker launches a container from a image. This layer stores all changes to the container throughout its runtime.

As this layer is the only difference between a live operational container and the source Docker image itself, any number of like-for-like containers can potentially share access to the same underlying image while maintaining their own individual state.

### Parent Image

In most cases, the first layer of a Docker image is known as the parent image. It’s the foundation image upon which all other layers are built on, and it provides the basic building blocks for your container environments.

### Base Image

A base image is an empty first layer, which allows you to build your Docker images from scratch. Base images give you full control over the contents of images, but are generally intended for more advanced Docker users.

### Docker Manifest

Docker image also includes an additional file known as a manifest. 

This is essentially a description of the image in **JSON** format and comprises information such as image tags, a digital signature and details on how to configure the container for different types of host platform.

## Container Registries

Container registries are catalogs of storage locations, known as repositories, where you can push and pull container images. 

There are three main types of registry:

- **Docker Hub:** Docker’s own official image resource where you can access more than 100,000 container images. You can also use the service to host and manage your own private images.
- **Third-party registry services:** Fully managed offerings that serve as a central point of access to your own container images, providing a way to store, manage and secure them without the operational headache of running your own on-premises registry. 

- **Self-hosted registries**: A registry model favored by organizations that prefer to host container images on their own on-premises infrastructure— typically because of security, compliance or lower latency requirements.

## Container Repositories

The specific physical locations where your Docker images are actually stored.

Each of those images within a repository is referenced individually by a different tag and represents a different version of fundamentally the same container deployment.

## How to create a Docker image

### Interactive Method

- Install Docker and launch the Docker engine.

- Open up a terminal session.

- Use the following **Docker run** command to start an interactive shell session with a container launched from the image specified by *image_name:tag_name*.

  ```$ docker run -it image_name:tag_name bash```

  ```$ docker run -it ubuntu bash```

If you omit the tag name then Docker automatically pulls the most recent image version, which is identified by the latest tag. 

If Docker cannot find the image locally then it will pull what it needs to build the container from the appropriate repository on Docker Hub.

- Now configure your container environment by, for example, installing all the frameworks, dependencies, libraries, updates and application code you need.

Next you’ll need to know the name or ID of your running container instance.

- Open up another Bash shell and type the following docker ps command to list active container processes.

  ``` $ docker ps```

This will show the following header with the container process information

​	```CONTAINER ID   IMAGE   COMMAND   CREATED      STATUS     PORTS   NAMES```

This name is randomly generated by the Docker daemon. But you can also identify your container using the –name operator in the Docker run command.

- Save your image using the **Docker commit** command, specifying either the ID or name of the container from you which want to create it.

  ```$ docker commit container_name result_image_name```

- Now use the **Docker images** command to see the image you’ve just created.

You should receive a header with the images information as bellow

​	```	REPOSITORY   TAG     IMAGE ID      CREATED       SIZE```

- Finally return to your interactive container shell and type in exit to shut it down.



### Dockerfile method

In short, the Dockerfile method is a three-step process whereby you:

Create the Dockerfile and add the commands you need to assemble the image.

The following table shows you those Dockerfile statements you’re most likely to use:

```
Command   	| Purpose
----------- | ------
FROM		| To specify the parent image.
WORKDIR 	| To set the working directory for any commands that follow in the Dockerfile
RUN 		| To install any applications and packages required for your container
COPY 		| To copy over files or directories from a specific location.
ADD			| As COPY, but also able to handle remote URLs and unpack compressed files.

ENTRYPOINT	| Command that will always be executed when the container starts. If not specified, the default is /bin/sh -c

CMD			| Arguments passed to the entrypoint. If ENTRYPOINT is not set (defaults to /bin/sh -c), the CMD will be the commands the container executes.

EXPOSE		| To define which port through which to access your container application.
LABEL		| To add metadata to the image.
```

Next set up a **.dockerignore** file to list any files that you want to exclude from the final build.

Your .dockerignore file should be located in the root directory, from which you intend to build your image.

- Now use the Docker build command to create your Docker image. Use the -t flag to set an image name and tag

  ```$ docker build -t image_name:tag .```

- You can also use the **Docker images** command to see the image you’ve just created.



## References

https://jfrog.com/knowledge-base/a-beginners-guide-to-understanding-and-building-docker-images/#AnatomyofaDockerImage