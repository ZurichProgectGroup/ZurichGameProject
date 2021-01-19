FROM node:12

COPY . .

RUN npm i && npm run build

EXPOSE 80

CMD npm run serve
