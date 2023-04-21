#FROM python:3.11-alpine
#
#WORKDIR /api
#ENV DATABASE_URL=sqlite:///test.db
#COPY ./api .
#RUN pip install -r requirements.txt
#EXPOSE 5001
#CMD flask db upgrade && flask db-seed && flask run --host 0.0.0.0 --port 5001
#

FROM python:3.11-alpine
WORKDIR /api

RUN apk update && apk add postgresql-dev gcc python3-dev musl-dev
RUN pip install psycopg2-binary psycopg2

COPY ./api/requirements.txt .
RUN pip install -r requirements.txt


COPY ./api .
EXPOSE 5001
#ENV DATABASE_URL='postgresql://test:test@dojo-postgres:5432/test'
ENV DATABASE_URL='sqlite:///test.db'
CMD flask db upgrade && flask db-seed && flask run --host 0.0.0.0 --port 5001