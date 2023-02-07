FROM node:16-alpine

WORKDIR /BUSKER_client
COPY package.json /BUSKER_client/
COPY yarn.lock /BUSKER_client/
RUN yarn install

COPY . .
RUN yarn build
CMD yarn start