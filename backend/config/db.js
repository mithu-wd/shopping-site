const mongoose = require("mongoose");

const database_connect=()=>{

mongoose
  .connect(process.env.DB_URL, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
  })

  .then((data) => {
    console.log("connected", data.connection.host);
  })
  .catch((err) => {
    console.log(err);
  });

}
module.exports=database_connect