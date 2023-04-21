FROM node:18-alpine as build

WORKDIR /tmp
COPY ./web/package.json .
RUN npm install
COPY ./web .
ARG REACT_APP_BASE_URL
RUN REACT_APP_BASE_URL=${REACT_APP_BASE_URL} npm run build

FROM node:18-alpine
WORKDIR /app
COPY --from=build /tmp/build .
RUN npm install -g serve
CMD serve -s .