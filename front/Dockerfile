FROM node:16-alpine AS build
WORKDIR /usr/app
COPY ./ ./

# Install base dependencies
RUN apk add git
RUN npm update
RUN npm install sfdx-cli -g

# Install base dependencies
RUN apk add git
RUN npm update
RUN npm install
RUN npm run build
# Serve Application using Nginx Server
FROM nginx:alpine
COPY --from=build /app/dist/convention/ /usr/share/nginx/html
EXPOSE 80
