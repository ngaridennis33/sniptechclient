FROM node:16

WORKDIR /app

COPY package.json package-lock.json ./
RUN npm install 

COPY next.config.js ./

COPY prisma ./styles
COPY public ./public
COPY src ./src
COPY .env ./
COPY mongo.yaml ./

CMD ["npm", "run", "dev"]