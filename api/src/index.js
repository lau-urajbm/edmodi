const server = require('./app.js');
const { conn } = require('./db')


conn.sync({ force: false}).then(() => {
  server.listen(3001, () => {
    console.log('%s listening at 3001'); // eslint-disable-line no-console
  });
}).catch(error=>{
  console.log(error)
})
  ; 
  