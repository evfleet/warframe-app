FROM node:10.15.0

WORKDIR /usr/api

RUN yarn global add nodemon

COPY yarn.lock .
COPY ./packages/api/package.json .
COPY ./packages/api/ormconfig.json .

RUN yarn install --prod

COPY ./packages/api/lib ./lib

CMD node lib/index.js



