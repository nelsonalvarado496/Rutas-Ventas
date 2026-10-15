const controller = {};

controller.list = (req, res) => {
    req.getConnection((error,conn) =>{
        conn.query('select *from producto',(err,producto) =>{
            if(err){
                res.json(err);
            }
            res.json(product);
        });

    });

};

controller.edit = (req, res) => {

    const {product}= req.params;
   
    req.getConnection((err,conn) =>{
        conn.query('select *from product where producto=?', [producto], (err,producto) => {
            res.json(product[0]);

        });

    });

};

controller.save = (req,res) =>{
    const data = req.body;
   req.getConnection((err,conn)=> {
       conn.query('insert into producto set?', [data], (err,producto) => {
        res.json(producto);
       });
   })
};

controller.update = (req,res) =>{

    const {idproducto}= req.params;
    const nuevo_producto = req.body;
  
    req.getConnection((err, conn) => {
        conn.query('update producto set ? where producto =?', [nuevo_producto, idproducto], (err,rows) =>{ 
            res.json({ message: "Registro Actualizado" }); 

        });
    });
};

controller.delete = (req,res) =>{
    const {idproducto}= req.params; 
  req.getConnection((err,conn) => {
      conn.query('update idproducto = "Inactivo"  where idproducto =?', [idproducto], (err, rows) => {
        res.json({ message: "Registro Eliminado" }); 
      });
  })
};

module.exports =controller;