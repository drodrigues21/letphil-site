FROM node:20

RUN mkdir /app

COPY . ./app

WORKDIR /app

RUN npm install

RUN npm run build

CMD npm run preview -- --host --no-open