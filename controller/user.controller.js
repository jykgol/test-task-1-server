const db = require('../db')

class UserController{
    async createTableData (req,res){
        const {data, name, count, distance} = req.body
        const newPerson = await db.query('INSERT INTO tabledata (data,name,count,distance) values ($1,$2,$3,$4) RETURNING *', [data,name,count,distance])

        res.json(newPerson.rows[0])
    }
    async getTableData (req,res){
        const tabledata = await db.query('SELECT * FROM tabledata')
        res.json(tabledata.rows)
    }
    async deleteTableData (req,res){
        const id = req.params.id
        const user = await db.query('DELETE FROM tabledata where id = $1',[id])
        res.json(user.rows[0])
    }

}

module.exports = new UserController()