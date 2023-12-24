FROM node:16-alpine
WORKDIR /usr/src/app/task-ui

COPY package*.json ./

RUN npm install

RUN chown node:node ./node_modules

CMD ["npm", "start"]
