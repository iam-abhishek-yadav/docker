## `Docker Networking`

Docker networking facilitates communication between containers and the host system. Given that containers operate in isolation from the host system, establishing a means of communication among containers and with the host system is essential.

```
docker network ls
```

```
NETWORK ID          NAME                DRIVER
xxxxxxxxxxxx        none                null
xxxxxxxxxxxx        host                host
xxxxxxxxxxxx        bridge              bridge
```

## `Bridge Networking`

Bridge networking is the default network mode in Docker, establishing a private network between the host and containers, enabling communication among containers and with the host system.

To enhance security and isolate containers from the default bridge network, you have the option to create a custom bridge network:

```bash
docker network create -d bridge my_bridge
```

Upon listing the Docker networks, the newly created network will be visible:

```bash
docker network ls

NETWORK ID          NAME                DRIVER
xxxxxxxxxxxx        bridge              bridge
xxxxxxxxxxxx        my_bridge           bridge
xxxxxxxxxxxx        none                null
xxxxxxxxxxxx        host                host
```

You can attach this new network to containers when running them:

```bash
docker run -d --net=my_bridge --name db <image>
```

This setup allows running multiple containers on a single host platform, where one container is connected to the default network, and the other is linked to the my_bridge network. These containers operate in isolation with their private networks and cannot communicate with each other.

To enable communication between containers, you can attach the first container to the my_bridge network:

```bash
docker network connect my_bridge web
```

## `Host Networking`

Host networking mode in Docker enables containers to share the host system's network stack, providing direct access to the host system's network.

To attach a host network to a Docker container, use the `--network="host"` option when running a `docker run` command. This option grants the container access to the host's network stack and shares the host's network namespace. Consequently, the container utilizes the same IP address and network configuration as the host.

Here's an example of running a Docker container with the host network:

```bash
docker run --network="host" <image_name> <command>
```

It's crucial to consider that utilizing the host network makes the container less isolated from the host system, providing access to all of the host's network resources. This heightened connectivity poses a potential security risk, necessitating careful consideration when opting for the host network.

Moreover, not all Docker image and command combinations seamlessly work with the host network. Therefore, it's imperative to scrutinize the image documentation or initially run the image with the `--network="bridge"` option (the default network mode) to identify any potential compatibility issues.

## `Overlay Networking`

Overlay networking mode facilitates communication between containers across multiple Docker host machines, enabling containers to connect to a single network even when running on different hosts.

## `Macvlan Networking`

Macvlan networking mode allows a container to mimic a physical host on the network, presenting itself as a part of the network rather than as a distinct container.
