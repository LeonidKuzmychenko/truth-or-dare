FROM node:16-alpine
WORKDIR /truth-or-dare
COPY package.json .
RUN npm install
COPY . .
EXPOSE 5000
CMD ["npm", "start"]