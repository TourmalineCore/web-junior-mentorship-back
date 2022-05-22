# web-junior-mentorship-back

This is intended as a simple backend for this ui: [web-junior-mentorship-front](https://github.com/TourmalineCore/web-junior-mentorship-front).

## Running the project

Before running the project at the first time install the deps:

```
npm ci
```

To run the service:

```
npm start
```

## Available endpoints

Available endpoints:
- GET http://localhost:5000/clients - retrieve the list of clients
- POST http://localhost:5000/clients - create a new client
```
{
    "name": "The biggest client LLC",
    "description": "Nielsen is the best"
}
```
- DELETE http://localhost:5000/clients/1 - delete a client whose id is 1
