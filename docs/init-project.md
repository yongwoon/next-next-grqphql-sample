# How to create project ?

## common

- Create Network (only one time)

```bash
docker network create next_nest_gql_sample_network
```

- Build Image

```bash
docker-compose build --no-cache
```

## Create Nestjs Project (Backend)

- Create Project

```bash
docker-compose run --rm backend nest generate application
```

## Create Nextjs Project (Frontend)

- Create Project

```bash
docker-compose run --rm frontend npx create-next-app@latest --ts --use-npm
```

- 一個上の directory (app) に作成された file をすべて移動
- `src` directory 作成
- `src` directory に `page`, `styles` directory を入れる
