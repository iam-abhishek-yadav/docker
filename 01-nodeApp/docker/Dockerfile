# Use the official Node.js image as the base image
FROM node:14-alpine

# Set the working directory in the container
WORKDIR /app

# Copy all files to the container
COPY app/ .

# Install dependencies
RUN npm install

# Expose the port that the app will run on
EXPOSE 3000

# Command to run the application
CMD ["node", "server.js"]
