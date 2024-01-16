# Docker Commands

## Basic Commands

- **`docker images`** : Lists Docker images on the host machine.
- **`docker ps -a`** : Lists running containers on the host machine.
- **`docker stop <container_name-or-id>`** : Stop a running container.
- **`docker start <container_name-or-id>`** : Start a stopped container.
- **`docker rm <container_name-or-id>`** : Remove a stopped container.
- **`docker rmi <image_name-or-id>`** : Remove an image from the host machine.
- **`docker pull <image_name>`** : Downloads an image from the configured registry.
- **`docker push <image_name>`** : Uploads an image to the configured registry.

## Build and Run

- **`docker build -t <tag> -f <path_to_Dockerfile> <root_directory>`** : Builds an image from a Dockerfile with specified tag, Dockerfile path, and build context.
- **`docker run -d`** : Run a container in the background and print container ID.
- **`docker run -p <host_port>:<container_port> -n <name> <image>`** : Perform port mapping and assign a name to the container.
- **`docker exec -it <container_name-or-id> <command>`** : Run a command in a running container interactively.
- **`docker create <image>`** : Create a new container from an image. (Returns container ID)

## Docker Compose

- **`docker-compose up`** : Builds, (re)creates, starts, and attaches to containers for a service defined in a Docker Compose file.
- **`docker-compose down`** : Stops and removes containers, networks, volumes, and images created by `docker-compose up`.
- **`docker-compose ps`** : List containers related to your docker-compose project.

## Registry and Authentication

- **`docker login`** : Log in to a Docker registry.
- **`docker logout`** : Log out from a Docker registry.

## System Information and Cleanup

- **`docker info`** : Display system-wide information about Docker.
- **`docker version`** : Show the Docker version information.
- **`docker system prune`** : Remove all unused containers, networks, images (both dangling and unreferenced), and optionally, volumes.

## Advanced Commands

- **`docker events`** : Get real-time events from the server.
- **`docker inspect <container_name-or-id>`** : Display detailed information about a container, image, or network.
- **`docker logs <container_name-or-id>`** : Fetch the logs of a container.
- **`docker cp <local_path> <container_name-or-id>:<container_path>`** : Copy files or folders between a container and the local filesystem.