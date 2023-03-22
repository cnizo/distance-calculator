# Distance calculator application

Submit a source and a destination address and get the distance in kilometers between them.

## Description

This app was implemented using [Nest](https://github.com/nestjs/nest) framework and it was deployed on [Deta Cloud](https://deta.space/docs/en/introduction/start);

It is connected to a [MongoDb](https://www.mongodb.com/) database hosted on [MongoDB Atlas](https://www.mongodb.com/atlas).


## Running the app
This project uses Docker and docker-compose for local development.

If you are running it for the first time, run in the project root:

```bash
$ docker-compose up --build
```

If not, just run:
```bash
$ docker-compose up
```

The app will be available on localhost:3000.

## Using the app
 
### Calculate a distance
In order to search for the distance between two addresses, fill the form and sumbit.

The result will appear on a dialog box.

### Get historical queries

In order to get historical queries, access `/search`, for example `localhost:3000/search`

PS: Only queries with both source and destination addresses are stored. 
Queries that had both addresses but no distance calculated are stored without a distance value.

## Test
With the container running, run in another terminal window:
```bash
$ docker-compose exec app npm run test
```
