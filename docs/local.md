# 開発環境構築

## 手順

- docker build

```bash
# docker-compose -f docker-compose.local.yml build --no-cache
docker-compose build --no-cache
```

- package install

```bash
# backend
docker-compose run --rm backend npm install

# frontend
docker-compose run --rm frontend npm install
```

- Run docker

```bash
docker-compose up
```

- Copy .env.sample (backend)

```bash
# Access to container
docker-compose exec backend bash

# copy env file
cp .env.sample .env.dev
cp .env.sample .env.test
```

- Start Servcer (backend)

```bash
# Access to container
docker-compose exec backend bash

npm run start:dev
npm run start:debug
```

- Start Server (Frontend)

```bash
# Access to container
docker-compose exec frontend bash

npm run dev
```

## Database

- access via container

```bash
docker-compose exec postgres bash
psql -U root -p 5432
```

- create database

```sql
CREATE DATABASE uber_eats_development ENCODING UTF_8;
CREATE DATABASE uber_eats_test ENCODING UTF_8;
```

## その他

- [backend base url](http://localhost:3000)
- [frontend base url](http://localhost:8080)
