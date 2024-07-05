FROM node:20.15.0-alpine

ARG PORT=3000
ENV PORT=$PORT
ENV NODE_ENV=prod

WORKDIR /var/www

## https://engineeringblog.yelp.com/2016/01/dumb-init-an-init-for-docker.html
RUN apk add --no-cache dumb-init mysql-client curl

COPY . .

RUN npm ci
RUN npm run build

HEALTHCHECK --interval=10m --timeout=5s --retries=3 \
        CMD wget --no-verbose --tries=1 --spider http://localhost:$PORT || exit 1

USER node
EXPOSE $PORT

ENTRYPOINT ["./aws-entrypoint.sh"]
CMD ["npm", "run", "start:prod"]

