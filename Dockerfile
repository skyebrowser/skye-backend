FROM node

ADD . /app

WORKDIR /app

RUN yarn && yarn build

ENV NODE_ENV=production

CMD ["node", "dist"]
