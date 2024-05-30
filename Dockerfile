FROM node:20-alpine

RUN npm install -g npm@10.2.5

WORKDIR /usr/app

COPY package.json ./

RUN npm install --legacy-peer-deps

COPY . .

EXPOSE 3000

CMD ["npm", "run", "dev"]