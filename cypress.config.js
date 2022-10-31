const { defineConfig } = require('cypress')

const mysql = require("mysql");
function queryTestDb(query, config) {
  // creates a new mysql connection using credentials from cypress.json env's
  const connection = mysql.createConnection(config.env.db);
  // start connection to db
  connection.connect();
  // exec query + disconnect to db as a Promise
  return new Promise((resolve, reject) => {
    connection.query(query, (error, results) => {
      if (error) reject(error);
      else {
        connection.end();
        // console.log(results)
        return resolve(results);
      }
    });
  });
}

module.exports = defineConfig({
  e2e: {
    baseUrl: 'https://opensource-demo.orangehrmlive.com/web/index.php/auth/login',
    env: {
      db: {
        "host": "127.0.0.1",
        "port": "3306",
        "user": "root",
        "password": "juanpacampos",
        "database": "demo-assessment"
      }
    },
    setupNodeEvents(on, config) {
      on("task", {
        queryDb: query => {
          return queryTestDb(query, config);
        }
      });
    }
    
  },
})
