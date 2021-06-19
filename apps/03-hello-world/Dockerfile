# Use node version 14 as base iamge
FROM node:14

# Set the current work directory to /usr/src/app
WORKDIR /usr/src/app

# Copy package.json to the current work directory (/usr/src/app)
COPY package*.json ./

# Run npm install to download all the dependency
RUN npm install

# Copy the rest of the files (i.e. app.js) to current work directory
# The first . is the source, which is the directory which this Dockerfile
# is located in.
# The second . is the target directory, we set the current directory
# on line 5 to be /usr/src/app
COPY . .

# Expose port 80, which is the port that this app runs on (check the content of app.js)
EXPOSE 80

# Execute this command when the built image is launched
# There can be multiple RUN commands, but Docker will only use the final CMD defined
# RUN - triggers while we build the Docker image.
# CMD - triggers when we launch the created Docker image.
CMD [ "node", "app.js" ]
