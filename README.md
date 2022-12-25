# building-area-api

## Stacks

1. ExpressJs
2. PostgreSQL
3. Sequelize

## Project Setup

```
open terminal and go to your local directory
```

```
git clone https://github.com/brilianrn/building-area-api.git
```

```
change db configuration in config/config.json appropiate to your local database configuration
```

```
touch .env
```

```
copy all value from .env-dev to .env
```

```
npm install
```

```
npx sequelize db:create
```

```
npx sequelize db:migrate
```

```
npm start
```
