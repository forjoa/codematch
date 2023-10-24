import mysql from 'mysql2'

const db = mysql.createConnection({
    host: 'localhost',
    user: 'root',
    password: '1234',
    database: 'codematch'
})

db.connect(err => {
    err ? console.log('error al conectar'+err) : console.log('conexion correcta ')
})

export default db