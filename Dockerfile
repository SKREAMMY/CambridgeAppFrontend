FROM node:latest AS build

WORKDIR /cambridgeappfrontend

COPY package*.json ./

RUN npm install

RUN npm install redux

RUN npm install bootstrap 

COPY . .

RUN npm run build

FROM nginx:alpine

COPY --from=build /app/dist /usr/share/nginx/html

EXPOSE 80

CMD ["nginx", "-g", "daemon off;"]




