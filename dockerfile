FROM node:18.14.0 as node

ENV NODE_ENV=development

WORKDIR /frontend

COPY ["package.json","package-lock.json", "./"]

RUN npm ci

COPY . .

CMD ["npm", "run", "dev"]
