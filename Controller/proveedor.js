const controller = {};

controller.list = (req, res) => {
    req.getConnection((error,conn) =>{
        conn.query('select *from proveedor',(err,proveedor) =>{
            if(err){
                res.json(err);
            }
            res.json(proveedor);
        });

    });

};

controller.edit = (req, res) => {

    const {proveedor}= req.params;
   
    req.getConnection((err,conn) =>{
        conn.query('select *from proveedor where proveedor=?', [proveedor], (err,proveedor) => {
            res.json(proveedor[0]);

        });

    });

};

controller.save = (req,res) =>{
    const data = req.body;
   req.getConnection((err,conn)=> {
       conn.query('insert into proveedor set?', [data], (err,proveedor) => {
        res.json(proveedor);
       });
   })
};

controller.update = (req,res) =>{

    const {idproveedor}= req.params;
    const nuevo_proveedor = req.body;
  
    req.getConnection((err, conn) => {
        conn.query('update proveedor set ? where proveedor =?', [nuevo_proveedor, idproveedor], (err,rows) =>{ 
            res.json({ message: "Registro Actualizado" }); 

        });
    });
};

controller.delete = (req,res) =>{
    const {idproveedor}= req.params; 
  req.getConnection((err,conn) => {
      conn.query('update idproveedor = "Inactivo"  where idproveedor =?', [idproveedor], (err, rows) => {
        res.json({ message: "Registro Eliminado" }); 
      });
  })
};

module.exports =controller;