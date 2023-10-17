#!/bin/bash
set -e



IMAGE="postgres-dixio";
SERVER="dixio-db";
PW="ymJtwy6LigGCFpq";
DB="dixio-db";

echo "echo create image docker "
cd ./base
docker built -t $IMAGE .

echo "echo stop & remove old docker [$SERVER] and starting new fresh instance of [$SERVER]"
(docker kill $SERVER || :) && \
  (docker rm $SERVER || :) && \
docker run --name dixio-db -e POSTGRES_PASSWORD=ymJtwy6LigGCFpq  -e PGPASSWORD=ymJtwy6LigGCFpq $IMAGE \
  -p 5432:5432 \
  -d postgres

# wait for pg to start
echo "sleep wait for pg-server [$SERVER] to start";
SLEEP 3;



