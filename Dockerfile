FROM node:16

# Setting working directory. All the path will be relative to WORKDIR
WORKDIR /usr/src/app

# Set NODE_ENV to the value from host
ENV NODE_ENV=production
ENV PORT 8080
ENV HOST 0.0.0.0

# Installing dependencies
COPY package*.json ./

RUN NODE_ENV=development yarn install

# Copying source files
COPY . .

# Building app
RUN yarn build

# Running the app
CMD [ "yarn", "preview" ]