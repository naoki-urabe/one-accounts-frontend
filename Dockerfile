FROM node:14.14.0-alpine
WORKDIR /usr/local/frontend

RUN set -eux && \
apk add --update --no-cache ca-certificates git byobu
COPY . /usr/local/frontend