const express = require("express")
const cors = require("cors")

class Config {

    App = express();

  constructor(){
     this.App.use(cors());
     console.log("inicio!!!")

  } 

   getMidlewars(){
       this.App.use(express.urlencoded({extended: false}))
       this.App.use(express.json())
   }

   getConfig(){
    this.App.listen()
   }


}


module.exports.Config = new Config();