FROM node:slim
WORKDIR /app
COPY . /app
RUN npm install
EXPOSE 1900
CMD node app.js