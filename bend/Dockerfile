FROM node

WORKDIR /home/app

COPY .babelrc ./
COPY .env ./
COPY package.json ./
COPY simple_express.js ./
COPY Player.js ./
COPY wait-for-it.sh ./
RUN npm install

# COPY * ./

EXPOSE 9000

CMD [ "npm", "start" ]

