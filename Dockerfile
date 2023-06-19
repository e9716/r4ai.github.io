FROM node:20-bullseye-slim

WORKDIR /app

RUN npm i -g pnpm && pnpx playwright install --with-deps chromium
