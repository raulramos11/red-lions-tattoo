FROM node:22-alpine AS build
WORKDIR /app
COPY package*.json ./
RUN npm install --no-audit --no-fund
COPY . .
ARG NEXT_PUBLIC_BASE_PATH=/red-lions-tattoo
ARG NEXT_PUBLIC_SITE_URL=https://raulramos11.github.io/red-lions-tattoo/
ENV GITHUB_PAGES=true
ENV NEXT_PUBLIC_BASE_PATH=$NEXT_PUBLIC_BASE_PATH
ENV NEXT_PUBLIC_SITE_URL=$NEXT_PUBLIC_SITE_URL
RUN npm test
