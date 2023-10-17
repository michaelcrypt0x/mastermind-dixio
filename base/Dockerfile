FROM postgres

LABEL Michael SOISSON 

RUN apt-get update \
 && apt-get install -y curl jq vim-tiny \
 && apt-get clean && rm -rf /var/lib/apt/lists/*

#create masterdb at start
ENV POSTGRES_DB=dixio-db
ENV POSTGRES_ENV=local-development

#ENV POSTGRES_USER=postgres # default postgres user  db system
ENV POSTGRES_PASSWORD=ymJtwy6LigGCFpq

# first install 
COPY docker-entrypoint-initdb.d /docker-entrypoint-initdb.d

# second run decomment 
COPY postgresql.conf /etc/postgresql/postgresql.conf
COPY pg_hba.conf /etc/postgresql/pg_hba.conf

EXPOSE 5432

CMD ["postgres", "-c", "config_file=/etc/postgresql/postgresql.conf"]


# docker build -t postgres-dixio . 
# docker run -p 5432:5432 --name dixio-db -e POSTGRES_PASSWORD=ymJtwy6LigGCFpq  -e PGPASSWORD=ymJtwy6LigGCFpq postgres-dixio -d postgres


#run psql
#docker run -p 5432:5432  -v /var/run/postgresql:/var/run/postgresql -it --rm  master-db psql -h localhost -U root -f docker-entrypoint-initdb.d/1.0.database-schema-extension.sql




