FROM node:12-alpine

WORKDIR /src/app

COPY package*.json ./
RUN npm install --silent

COPY . .
EXPOSE 8080

CMD ["npm", "run", "watch"]
