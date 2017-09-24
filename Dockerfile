FROM node:boron

WORKDIR /usr/src/app

COPY package.json .

RUN npm install

COPY . .

EXPOSE 3074

CMD [ "node", "./dist/server.js" ]
