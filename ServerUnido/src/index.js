const express = require("express");
const {Config} = require("./configuraction/Config.js");
const cors = require("cors");
const {inventoryRouting} = require("./routing/InventoryRouting.js")

class Inventario{

    constructor(){
       this.App = express();
       this.Config();
       this.Routing();
    }
    
    Config(){
      this.App.set("port", 3307);  
      this.App.use(cors());
      this.App.use(express.json());
      this.App.use(express.urlencoded({extended:false}));
      this.App.listen(this.App.get("port"), () => {
        console.log("Listen in port: " + this.App.get("port"));
      });    
    }

    Routing(){
      //this.App.use("/Inventory",inventoryRouting.router);
      this.App.use("/Inventario", inventoryRouting.router)
    }
}

new Inventario();