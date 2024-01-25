# Use the official Node.js base image
FROM node:latest

# Set the working directory to /app
WORKDIR /app

# Copy package.json and package-lock.json to the working directory
COPY package*.json ./

# Install the dependencies
RUN npm install

# Copy the contents of the local "build" directory to the container at /app
COPY . /app/

# Expose port 3000 for the Node.js application
EXPOSE 3000

# Command to start the Node.js application
CMD ["npm", "start"]
