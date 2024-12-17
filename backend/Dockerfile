FROM node:22

COPY package*.json ./

RUN npm ci

COPY . .

CMD npm run start
