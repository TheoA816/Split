# Grab the latest Node base image
FROM node:20.2-alpine as builder

# Set the current working directory inside the container
WORKDIR /app

COPY package.json package-lock.json tsconfig.json ./
COPY prisma ./prisma/
COPY . .
RUN npx prisma generate

RUN npm install && npm cache clean --force

RUN npm run build

# Grab the latest Node base image
FROM node:20.2-alpine as runner

# Set the current working directory inside the container
WORKDIR /app

COPY package.json package-lock.json ./
RUN npm install --production

COPY --from=builder /app/dist ./dist
COPY --from=builder /app/prisma ./prisma
RUN npx prisma generate

EXPOSE 3030

CMD ["sh", "-c", "DATABASE_URL=postgresql://${POSTGRESQL_USER}:${POSTGRESQL_PASSWORD}@${POSTGRESQL_HOST}:5432/${POSTGRESQL_DATABASE}?schema=public npm start"]
