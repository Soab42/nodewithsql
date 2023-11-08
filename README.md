# nodewithsql

pgsql with react express node

First go to front end directory.

```
cd frontend
yarn
```

Then

```
yarn start
```

It will run on 3000 port.

There is two route

1. home page that show a table data of all student that registerd.
2. registration page that has a form that submit data for registration.

Then go back to the back end directory

```
cd ../backend
yarn
```

then

```
yarn start
```

it will run on 4000 port.

in back end there is two api route.

1. '/' is the get function that retrive all student data.
2. "/registration" is a post request for registration a student.
   
![image](https://github.com/Soab42/nodewithsql/assets/108150913/de07fc90-1555-4643-88b0-3c204ede5623)

you have to setup a pgsql or mysql or any sql database up on ruuning to the server. then change on backend/config/database.js file.
```javascript
// Option 3: Passing parameters separately (other dialects)
const sequelize = new Sequelize('database', 'username', 'password', {
  host: 'localhost',
  dialect: /* one of 'mysql' | 'postgres' | 'sqlite' | 'mariadb' | 'mssql' | 'db2' | 'snowflake' | 'oracle' */
});
```

# Technology

- reactJs
- nodeJs
- expressJs
- 'mysql' | 'postgres' | 'sqlite' | 'mariadb' | 'mssql' | 'db2' | 'snowflake' | 'oracle'

# Extra feature

@redux/toolkit
