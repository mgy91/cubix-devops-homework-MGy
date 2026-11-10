FROM node:20-alpine
WORKDIR /usr/src/app
COPY package*.json ./
RUN npm ci --only=production
COPY server.js .
RUN chown -R node:node /usr/src/app
USER node
EXPOSE 3500
CMD ["node", "server.js"]
