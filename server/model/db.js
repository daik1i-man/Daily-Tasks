const {Pool} = require("pg")

const db = new Pool({
    host:"btrl86logwwlxcyblrvw-postgresql.services.clever-cloud.com",
    port:"50013",
    user:"uhibynvoswizk4cp1fnj",
    password:"781tpVW5wAgwL7AbxwbZNBItaflucY",
    database:"btrl86logwwlxcyblrvw"
})


module.exports = db