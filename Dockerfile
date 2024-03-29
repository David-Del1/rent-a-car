FROM node:14 as production

ARG NODE_ENV=production
ENV NODE_ENV=${NODE_ENV}

WORKDIR /usr/src/app

COPY package.json .
COPY package-lock.json .

RUN npm install --production=false

COPY . .

RUN npm build

CMD ["node", "server.js"]