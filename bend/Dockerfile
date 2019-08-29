FROM node:alpine

WORKDIR /home/app

COPY package.json ./
COPY simple_express.js ./
RUN npm install

EXPOSE 9000

CMD [ "node", "simple_express.js" ]

