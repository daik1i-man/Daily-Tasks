const { Pool } = require("pg");

const db = new Pool({
  host: "bjeet2l1rpkjqzk2qrrc-postgresql.services.clever-cloud.com",
  port: "50013",
  user: "ufa7jrdrir2csoh1qvju",
  password: "4uOA5nRciItWs6EXygEWQzO0VwyGjG",
  database: "bjeet2l1rpkjqzk2qrrc",
});

module.exports = db;

/*
POSTGRESQL_ADDON_HOST=bjeet2l1rpkjqzk2qrrc-postgresql.services.clever-cloud.com
POSTGRESQL_ADDON_DB=bjeet2l1rpkjqzk2qrrc
POSTGRESQL_ADDON_USER=ufa7jrdrir2csoh1qvju
POSTGRESQL_ADDON_PORT=50013
POSTGRESQL_ADDON_PASSWORD=4uOA5nRciItWs6EXygEWQzO0VwyGjG
POSTGRESQL_ADDON_URI=postgresql://ufa7jrdrir2csoh1qvju:4uOA5nRciItWs6EXygEWQzO0VwyGjG@bjeet2l1rpkjqzk2qrrc-postgresql.services.clever-cloud.com:5432/bjeet2l1rpkjqzk2qrrc
*/
