const Pool = require('pg').Pool
const pool = new Pool({
  user: 'postgres',
  host: 'localhost',
  database: 'postgres',
  password: 'test123',
  port: 5432,
});

const getUsers = () => {
    return new Promise(function(resolve,reject){
        pool.query('SELECT * FROM bruker',(error,results) => {
            if (error) {
                reject(error)
            }
            resolve(results.rows);
        })
    })
  }


  const createMerchant = (body, lol) => {
    return new Promise(function(resolve, reject) {
      const { title, message } = body
      const {fk_bruker_id} = lol
      pool.query('INSERT INTO api_foresporsel (tittel, fk_bruker_id, fritekst, kategori) VALUES ($1, $2, $3, $4) RETURNING *', [title, fk_bruker_id, message, category], (error, results) => {
        if (error) {
          reject(error)
        }
        resolve(`A new merchant has been added added: ${results.rows[0]}`)
      })
    })
  }



  const deleteMerchant = () => {
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
    createMerchant,
    deleteMerchant,
  }