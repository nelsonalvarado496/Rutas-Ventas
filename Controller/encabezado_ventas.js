const controller = {};

controller.list = (req, res) => {
    req.getConnection((error,conn) =>{
        conn.query('select *from encabezado_venta',(err,encabezado_venta) =>{
            if(err){
                res.json(err);
            }
            res.json(encabezado_venta);
        });

    });

};

controller.edit = (req, res) => {

    const {encabezado_venta}= req.params;
   
    req.getConnection((err,conn) =>{
        conn.query('select *from encabezado_venta where idencabezado_venta=?', [idencabezado_compra], (err,encabezado_venta) => {
            res.json(encabezado_venta[0]);

        });

    });

};

controller.save = (req,res) =>{
    const data = req.body;
   req.getConnection((err,conn)=> {
       conn.query('insert into encabezado_venta set?', [data], (err,encabezado_venta) => {
        res.json(encabezado_venta);
       });
   })
};

controller.update = (req,res) =>{

    const {idencabezado_venta}= req.params;
    const nuevo_encabezado_venta = req.body;
  
    req.getConnection((err, conn) => {
        conn.query('update encabezado_venta set ? where encabezado_venta =?', [nuevo_encabezado_venta, idencabezado_venta], (err,rows) =>{ 
            res.json({ message: "Registro Actualizado" }); 

        });
    });
};

controller.delete = (req,res) =>{
    const {idencabezado_venta}= req.params; 
  req.getConnection((err,conn) => {
      conn.query('update idencabezado_venta = "Inactivo"  where idencabezado_venta =?', [idencabezado_venta], (err, rows) => {
        res.json({ message: "Registro Eliminado" }); 
      });
  })
};

module.exports =controller;