# `Container`

A container is a standard unit of software that packages up code and all its dependencies, ensuring the application runs consistently across different computing environments. A Docker container image is a lightweight, standalone, executable package of software, including code, runtime, system tools, libraries, and settings.

To simplify, a container is a bundle of the application, application libraries required to run, and the minimum system dependencies.

# `Containers vs Virtual Machines`

Containers and virtual machines (VMs) both isolate applications and dependencies but differ in key aspects:

1. **`Resource Utilization:`**
   - Containers share the host operating system kernel, making them lighter and faster. VMs, with a full-fledged OS and hypervisor, are more resource-intensive.

2. **`Portability:`**
   - Containers are designed for portability, running on any system with a compatible host OS. VMs are less portable, relying on a compatible hypervisor.

3. **`Security:`**
   - VMs offer higher security with each having its own OS, isolated from others. Containers provide less isolation, sharing the host OS.

4. **`Management:`**
   - Container management is typically easier than VMs due to their lightweight and fast-moving nature.

# `Why are Containers Lightweight?`

Containers are lightweight due to containerization technology. They share the host operating system's kernel and libraries while providing isolation. Docker containers are designed to be minimal, containing only what is necessary for the application to run.

To illustrate, the official Ubuntu base image for a container (~22 MB) is significantly smaller than an official Ubuntu VM image (~2.3 GB).

## Files and Folders in Containers Base Images

- `/bin`: Binary executable files (e.g., ls, cp, ps commands).
- `/sbin`: System binary executable files (e.g., init and shutdown commands).
- `/etc`: Configuration files for various system services.
- `/lib`: Library files used by binary executables.
- `/usr`: User-related files and utilities (applications, libraries, documentation).
- `/var`: Variable data (log files, spool files, temporary files).
- `/root`: Home directory of the root user.

## Files and Folders Containers Use from Host Operating System

- `Host's file system:` Docker containers access it using bind mounts.
- `Networking stack:` Host's networking stack provides connectivity to the container.
- `System calls:` Host's kernel handles system calls from the container for resource access.
- `Namespaces:` Linux namespaces create isolated environments for container processes.
- `Control groups (cgroups):` Docker containers use cgroups to limit and control resource access.

Note: Containers use host resources but remain isolated from the host and other containers.

In summary, container base images are smaller due to their minimalist design, containing only essential components. VMs emulate an entire OS, resulting in a larger size.

# `Docker`

Docker is a containerization platform simplifying the containerizing process. It allows building container images, running them to create containers, and pushing these containers to registries like DockerHub or Quay.io.

In simple terms, containerization is a concept or technology, and Docker is an implementation of containerization.

# `Docker Architecture`

The Docker Daemon is the core of Docker, and if it stops working, Docker becomes "brain dead."

# `Docker Lifecycle`

Referencing the image below:

1. `docker build`: Builds Docker images from Dockerfiles.
2. `docker run`: Runs containers from Docker images.
3. `docker push`: Pushes container images to public/private registries to share them.

# `Docker Terminology`

## `Docker Daemon`

The Docker daemon (`dockerd`) listens for Docker API requests and manages Docker objects such as images, containers, networks, and volumes. It can communicate with other daemons to manage Docker services.

## `Docker Client`

The Docker client (`docker`) is the primary way users interact with Docker. It sends commands to `dockerd`, which carries them out. The Docker client can communicate with more than one daemon.

## `Docker Desktop`

Docker Desktop simplifies the installation process across Mac, Windows, or Linux environments, providing a user-friendly application to build and share containerized applications and microservices. The comprehensive Docker Desktop package includes essential components such as the Docker daemon (dockerd), the Docker client (docker), Docker Compose, Docker Content Trust, Kubernetes, and Credential Helper. For additional details, refer to the official documentation on [Docker Desktop](link-to-docker-desktop-docs).

## `Docker Registries`

Docker registries serve as repositories for storing Docker images. Docker Hub stands out as a public registry accessible to everyone, and Docker is preconfigured to search for images on Docker Hub by default. Users also have the flexibility to establish and operate their private registries. When executing commands like `docker pull` or `docker run`, the necessary images are fetched from the specified registry. Conversely, when utilizing the `docker push` command, the image is uploaded to the designated registry.

## `Docker Objects`

In the realm of Docker, various entities come into play, including images, containers, networks, volumes, and plugins. This section provides a concise overview of these fundamental Docker objects, outlining their roles and interactions within the Docker ecosystem.

## `Dockerfile`

The Dockerfile serves as a pivotal component in Docker image creation. Within this file, users articulate a series of steps essential for constructing a Docker image. These steps encompass instructions for installing dependencies, configuring settings, and defining the environment. A Dockerfile encapsulates the blueprint for generating a reproducible and self-contained image.

## `Images`

Docker images are essentially read-only templates that encapsulate instructions for constructing a Docker container. Typically based on existing images, users customize them to include specific applications and configurations. Whether building unique images or leveraging publicly available ones from registries, Docker images adhere to a layered structure. Each instruction in a Dockerfile contributes to the formation of distinct layers within the image. This layering mechanism ensures efficiency, making Docker images lightweight, compact, and fast, particularly when contrasted with alternative virtualization technologies.

# `INSTALL DOCKER`

For detailed instructions on installing Docker, please refer to the [official Docker documentation](https://docs.docker.com/get-docker/).

## `Installation Demo`

For a quick demonstration, you can create an Ubuntu EC2 Instance on AWS and execute the following commands to install Docker:

```bash
sudo apt update
sudo apt install docker.io -y
```
## `Start Docker and Grant Access`

One common mistake made by many beginners after installing Docker with sudo access is forgetting to start the Docker daemon and grant access to the user intended for interacting with Docker and running Docker commands.

Always ensure the Docker daemon is up and running. Verify your Docker installation with the following command:

```
docker run hello-world
```

If the output says:

```
docker: Got permission denied while trying to connect to the Docker daemon socket at unix:///var/run/docker.sock: Post "http://%2Fvar%2Frun%2Fdocker.sock/v1.24/containers/create": dial unix /var/run/docker.sock: connect: permission denied.
See 'docker run --help'.
```

This can mean two things, 
1. Docker deamon is not running.
2. Your user does not have access to run docker commands.


## `Start Docker daemon`

Use the following command to check if the Docker daemon is started and active:

```
sudo systemctl status docker
```

If the Docker daemon is not running, start it with the following command:

```
sudo systemctl start docker
```


## `Grant Access to your user to run docker commands`

To grant access to your user for running Docker commands, add the user to the Docker Linux group. The Docker group is created by default during Docker installation:

```
sudo usermod -aG docker ubuntu
```

In the above command, replace ubuntu with the appropriate username. Note: You need to logout and login back for the changes to take effect.


## `Docker is Installed, up and running 🥳🥳`

Verify that Docker is up and running by using the following command:

```

docker run hello-world

```

Output should look like:

```bash
....
....
Hello from Docker!
This message shows that your installation appears to be working correctly.
...
...
```
...
