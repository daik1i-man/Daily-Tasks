const { Pool } = require("pg")

const db = new Pool({
    host: "bjeet2l1rpkjqzk2qrrc-postgresql.services.clever-cloud.com",
    port: "50013",
    user: "ufa7jrdrir2csoh1qvju",
    password: "4uOA5nRciItWs6EXygEWQzO0VwyGjG",
    database: "bjeet2l1rpkjqzk2qrrc"
})

module.exports = db

