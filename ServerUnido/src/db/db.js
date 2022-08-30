const {Connection, createConnection} = require("promise-mysql")
const mysql = require("promise-mysql")

class SqlConn {

    //_cnn = null;
    constructor(){
//       this._cnn = new mysql();
    createConnection({
        user: "root",
        password: "",
        host: "localhost",
        database: "pruebas"
       })
       .then((e) => {
        this._cnn = e;   
        console.log("conexion exitosa!!!!")
       })
       .catch(() => {

       })
    }


    getProductoId(id){
       return new Promise((res, rej) => {
        this._cnn.query("SELECT * FROM productos WHERE IdProducto = ?", [id], (err, respuesta) => {
            res(respuesta)
        })
       })
    }

    async getProduct(){
        return new Promise((res, rej) => {
            this._cnn.query("SELECT * FROM productos",(err, respuesta) => {
                res(respuesta)
            })
        })
    }

    sendProduct(products){
    var id = products.Id;
    var estado = products.Estado;
    var cantidad = products.Cantidad;
    var nombre = products.Nombre;
    var lote = products.Lote;
    var proveedor = products.proveedor;
    var precio = products.Precio;

        return new Promise((res, rej) => {
            this._cnn.query(`INSERT INTO productos (Nombre,Estado,Cantidad,Precio,Lote,proveedor) VALUES (?,?,?,?,?,?)`,[nombre,estado,cantidad,precio,lote,proveedor],
            (err, respuesta) => {
              res(respuesta)
            })
        })
    }

    updateProduct(products){
    var id = products.IdProducto;
    var estado = products.Estado;
    var cantidad = products.Cantidad;
    var nombre = products.Nombre;
    var lote = products.Lote;
    var proveedor = products.proveedor;
    var precio = products.Precio;
        return new Promise((res, rej) => {
            this._cnn.query("UPDATE Productos SET Nombre = ?, Estado = ?, Cantidad = ?,Precio = ?,Lote = ?,proveedor = ? WHERE IdProducto = ?",[nombre,estado,cantidad,precio,lote,proveedor,id],(err, respuesta) => {
              res(respuesta)
            })
        })
    }

    deleteProduct(id){
        return new Promise((res, rej) => {
            this._cnn.query("DELETE FROM productos WHERE IdProducto = ?",[id],(err, respuesta) => {
               res(respuesta)
            })
        })
    }
}


module.exports.db = new SqlConn();