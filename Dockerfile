FROM node:latest

WORKDIR /usr/app

COPY package.json /usr/app/

RUN npm install

COPY . /usr/app/

EXPOSE 80

CMD [ "npm start" ]