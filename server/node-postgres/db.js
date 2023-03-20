const Pool = require('pg').Pool
const pool = new Pool({
  user: 'postgres',
  host: 'localhost',
  database: 'postgres',
  password: 'test123',
  port: 5432,
});


/*const getUsers = () => {
    return new Promise(function(resolve,reject){
       const bruker_id = parseInt(request.params.bruker_id)
       console.log("db bruker_id: " + bruker_id)
        pool.query('SELECT * FROM bruker WHERE bruker_id = ' + bruker_id, (error,results) => {
            if (error) {
              console.log(error)
              reject(error)
            }
            resolve(results.rows);
        })
    })
  } */
  const getUsers = (epost, passord) => {
    return new Promise(function(resolve, reject){
      pool.query('SELECT * FROM bruker WHERE epost = $1 AND passord = $2', [epost, passord], (error, results) => {
        if (error) {
          console.log(error)
          reject(error)
        }
        resolve(results.rows);
      })
    })
  }


  const createRequest = (body) => {
    return new Promise(function(resolve, reject) {
      const { title, category, message, brukertall } = body
      pool.query('INSERT INTO api_foresporsel (tittel, kategori, bruker_id, fritekst ) VALUES ($1, $2, $3, $4) RETURNING *', 
      [title, category, brukertall, message], (error, results) => {
        if (error) {
          reject(error)
        }
        resolve(`Førespørsel sendt`)
      })
    })
  }
 
 

  const deleteRequest = () => {
    return new Promise(function(resolve, reject) {
      const id = parseInt(request.params.id)
      pool.query('DELETE FROM merchants WHERE id = $1', [id], (error, results) => {
        if (error) {
          reject(error)
        }
        resolve(`Merchant deleted with ID: ${id}`)
      })
    })
  }
  
  module.exports = {
    getUsers,
    createRequest,
    deleteRequest,
  }