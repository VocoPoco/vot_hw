FROM node:14

WORKDIR /app

COPY package*.json ./
RUN npm install

COPY . .

CMD ["ts-node", "src/server.ts"]