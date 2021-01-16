FROM node

# Create app directory
RUN mkdir -p /usr/app
WORKDIR /usr/app

# Install app dependencies
# A wildcard is used to ensure both package.json AND package-lock.json are copied
# where available (npm@5+)
COPY package*.json ./

RUN npm install
# If you are building your code for production
# RUN npm ci --only=production

# Bundle app source
COPY . .

RUN npm run build
COPY .env ./dist/
COPY .env.development ./dist/
COPY .env.test ./dist/
WORKDIR ./dist/

EXPOSE 4000
CMD node server.js
