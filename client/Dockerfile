FROM node:latest

RUN mkdir -p /usr/src/client

WORKDIR /usr/src/client

COPY package*.json /usr/src/client/

RUN npm install

COPY . /usr/src/client/

EXPOSE 3000

CMD ["npm", "start"]