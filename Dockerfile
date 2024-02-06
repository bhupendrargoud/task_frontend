# Use an official Nginx runtime as a base image
FROM nginx:latest

# Set the working directory inside the container
WORKDIR /etc/nginx/conf.d

# Copy your custom nginx.conf to replace the default configuration
COPY nginx.conf default.conf

# Set the working directory back to the HTML directory
WORKDIR /usr/share/nginx/html

# Copy the contents of the build directory to the container's HTML directory
COPY build/ .

# Expose port 80 to the outside world
EXPOSE 80

# Command to run when the container starts
CMD ["nginx", "-g", "daemon off;"]
