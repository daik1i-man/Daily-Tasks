const db = require("../model/db.js");


const insertTasks =  async (req, res) =>{
    try {
        const insert = await db.query(`INSERT INTO tasks (description, task_date, user_name) VALUES ($1, CURRENT_DATE, $2) RETURNING *`, [req.body.description, req.cookies.user_name]);

        res.status(200).send("task insertrd succesfully").json(insert)
        console.log(insert);
    } catch (error) {
        console.log(error);
    }
}

const gettask = async (req, res) => {
    try {
        const get = await db.query(`SELECT * FROM tasks WHERE user_name = $1`, [req.cookies.user_name])
        res.status(200).json({ message: "Get tasks successfully", data: get.rows });
        console.log("User name from cookies:", req.cookies.user_name);
    } catch (error) {
        res.status(500).send("something wrong on get tasks")
        console.log(error);
    }
}

const update = async (req, res) => {
    try {
        const update = await db.query(`UPDATE tasks SET description = $1, task_date = $2  WHERE id = $3`, [req.body.description , req.body.task_date , req.params.id ]);
        res.status(200).send("update tasks succesfuly")
        console.log(update);
    } catch (error) {
        console.log(error);
        res.status(500).send("wrong on update router")
    }
}

const deletetask =  async (req, res) => {
    try {
        const deleteTask = db.query(`DELETE FROM tasks WHERE id=$1`,[req.params.id]) 
        res.status(200).send("task deleted")
        console.log(deleteTask);
    } catch (error) {
        console.log(error);
        re.status(500).send("worng on delete router")
    }
}

module.exports = {
    insertTasks,
    gettask,
    update,
    deletetask
}