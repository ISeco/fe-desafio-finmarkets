FROM node:20.18.3-alpine3.21 as dependences
WORKDIR /app
COPY package.json .
RUN npm install

FROM node:20.18.3-alpine3.21 as build
WORKDIR /app
COPY . .
COPY --from=dependences /app/node_modules ./node_modules
RUN npm run build

FROM node:20.18.3-alpine3.21 as production
WORKDIR /app
COPY package.json .
COPY --from=dependences /app/node_modules ./node_modules
COPY --from=build /app/dist ./dist
EXPOSE 3000
RUN npm install -g serve
CMD ["serve", "-s", "build"]
