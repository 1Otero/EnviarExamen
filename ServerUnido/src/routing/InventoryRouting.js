const {Router} = require("express");
const {InventoryController} = require("../controller/inventoryController.js")


class InventoryRouting {

    constructor(){
      this.router = Router()
      this.routings();   
    }

    routings(){
      this.router.get("/producto/:Id",InventoryController.getProduct)  
      //this.router.get("/allProducts/", (req, res) =>{
        //   res.send("funciona")
      //})
      this.router.get("/", InventoryController.Index)
      this.router.put("/insertarproducto/",InventoryController.sendProduct)
      this.router.post("/modificarProducto/:id", InventoryController.updateProduct)
      this.router.delete("/eliminarProducto/:id", InventoryController.deleteProduct)
    }

}

module.exports.inventoryRouting = new InventoryRouting()