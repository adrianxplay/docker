FROM postgres:14.7-alpine

ENV POSTGRES_DATABASE=test
ENV POSTGRES_USER=test
ENV POSTGRES_PASSWORD=test

EXPOSE 5432