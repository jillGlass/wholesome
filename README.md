# A starter webpack project for React

This is a starter project that uses webpack to transpile and bundle ES6 React code. To use, consider these steps:

* Fork this repo
* Rename your repo according to the app you're building

```sh
git clone https://github.com/[your-account]/[your-app].git
cd [your-app] && npm i
```

To start the development server with a watcher that rebuilds your code, run `npm run dev`. The assets built by webpack are placed in `server/public`. This folder is defined as a static folder in an Express.js server that can be started with `npm run server`.

Additional components should be placed in `client/components`.

## Sever Documentation


### Table name: 
`prompt`, with 2 columns `id` = integer and `promptItem` = string.


| Column        | Type          | Null  |
| ------------- |:-------------:| -----:|
| id            | integer       |  No   |
| promptItem    | String        |  No   |

### Route:
only route is `/:id`

### API requirements:

#### Allowed HTTP requests

GET :Get a resource or list of resources

### Description of Server Responses:

200 `OK` the request was successful

204 `NO CONTENT` - the request was successful but thee is no representation to return. 

400 `BAD REQUEST` - the request could not be understood or was missing required parameters.

500 `NEVER HAVE I EVER HAD A DATABASE ERROR` - database error. 

### PROMPT

GET http://localhost:3000/:id

#### Parameters

id    Numberic id of the prompt to be displayed     Number

Response 

200

Example Body:

{
  "id": 1,
  "promptItem": 'been kicked out of a bar'
}




 template: 
The boilerplate is also set up to host the client using `webpack-dev-server` with hot module reloading etc. To use this method, in one terminal run:
```sh
npm run client
```
and in the other:
```sh
npm run server
```
The client will be available on http://localhost:8080 and the server on http://localhost:3000. Note that you will still need to manage CORS between the two, as they are on different ports.

