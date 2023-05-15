FROM node:16.20.0

# RUN apk update && apk add --no-cache make git

ENV NPM_CONFIG_LOGLEVEL warn

# Create app directory
WORKDIR /src

# Copy project files into the docker image
COPY . .

# Install app dependencies
RUN npm set progress=false && npm install

EXPOSE 8086
CMD [ "yarn", "run", "storybook"]