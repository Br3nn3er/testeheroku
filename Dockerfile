FROM node:18.6.0-alpine3.15
RUN mkdir -p /app/src
WORKDIR /app
COPY package.json /app/package.json
COPY .env /app/.env
COPY tsconfig.json /app/tsconfig.json 
RUN yarn install
COPY . .
EXPOSE 3333
CMD ["yarn", "dev"]