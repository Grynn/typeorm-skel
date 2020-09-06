# Typeorm Skeleton

Base project for building typeorm projects.

## Setup dev environment

* Install ts-node, sucrase-node, node `brew install ts-node sucrase-node node`  
* Add to .zshrc: `alias typeorm="ts-node `npm bin`/typeorm"`


## Useful commands

* `typeorm migration:make -n <name>`
* `typeorm migration:run`
* `typeorm migration:show` - show what SQL would be run
* `typeorm entity:make -n <name>` - create a new entity
* `typeorm migration:show | grep -F '[ ]' && echo "Migrations pending\!"` -- Check for pending migrations

## Setup database

```
brew install postgres
psql postgres
create user skel;
create database skel with owner = skel connection limit = 10;
```