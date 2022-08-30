const {Request, Require} = require("express")
const {db} = require("../db/db.js")

class InventoryController {

    constructor(){
        //Se va ejecutar la base de datos HERE!!!
    }

    async Index(req, res){
        var dato = await db.getProduct();
        console.log("dato es: ")
        console.log(dato)
        if(dato.length > 0){
          res.json(dato);
        }else{
          res.json({text: 'not data yet'});
        }
    }

    async getProduct(req, res){
       var {Id} = req.params; 
       var dato = await db.getProductoId(Id)
       if (dato.length > 0) {
        res.json(dato)
        console.log(dato)
       }else{
        res.status(404).json("Not data yet");    
       }
    }

    async sendProduct(req, res){
      var dato = {
        IdProducto: Number.parseInt(req.body.id),
        Nombre: req.body.Nombre,
        Cantidad: Number.parseInt(req.body.Cantidad),
        Estado: Number.parseInt(req.body.Estado),
        Precio: Number.parseInt(req.body.Precio),
        Lote: Number.parseInt(req.body.Lote),
        proveedor: req.body.proveedor
      }
      var dato = await db.sendProduct(dato);
      res.json({text: "Se inserto correctamente!!!"})
      //await db.sendProduct(); 
    }

    async updateProduct(req, res){
        var id = Number.parseInt(req.params.id);
        var dato = {
            IdProducto: Number.parseInt(req.params.id),
            Nombre: req.body.Nombre,
            Cantidad: Number.parseInt(req.body.Cantidad),
            Estado: Number.parseInt(req.body.Estado),
            Precio: Number.parseInt(req.body.Precio),
            Lote: Number.parseInt(req.body.Lote),
            proveedor: req.body.proveedor
          } 
          var dat = await db.updateProduct(dato);
          var datoId = await db.getProductoId(id);
          res.json(datoId);
    }

    async deleteProduct(req, res){
        var id = Number.parseInt(req.params.id);
        var dato = await db.deleteProduct(id);
        res.json({text: "Elimino correctamente!!!"})
    }

}

module.exports.InventoryController = new InventoryController();