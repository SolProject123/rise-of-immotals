FROM node:20-alpine
WORKDIR /usr/app
COPY ./ /usr/app
RUN apk update && apk upgrade && \
    apk add --no-cache bash git openssh
RUN npm install -f
RUN npm install pm2 -g -f
# RUN npm run build
EXPOSE 2567
CMD npm start
# CMD pm2-runtime start ./build/index.js -i -1arena.env