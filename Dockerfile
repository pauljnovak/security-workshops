FROM node

COPY ./ ./secure-workshop

WORKDIR /secure-workshop
RUN yarn
RUN yarn build
CMD node server.js
