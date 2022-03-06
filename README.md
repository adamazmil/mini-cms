# mini-cms
A cms to serve video. 

## **Requirements** 
- node.js
- postgresql 11
- nodemon 
##.env template
```
  #Database Connection
  POSTGRES_USER= "dev"
  POSTGRES_HOST= "localhost"
  POSTGRES_PORT= 5433
  POSTGRES_PASSWORD= "password"
  POSTGRES_NAME= "mini-cms"

  #Authentication 
  AUTH_SECRET= "your secret"
  CLIENT_ID= "auth0 client ID"
  ISSUER_BASE_URL= "auth 0 url"
  #EXPRESS
  BASE_URL= "http://localhost:5000"
  PORT= 5000
```
## **Run**
```
npm install
start up postgres server
npm run start:dev in root
npm run start in client directory

```
