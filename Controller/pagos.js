const controller = {};

controller.list = (req, res) => {
    req.getConnection((error,conn) =>{
        conn.query('select *from pagos',(err,pagos) =>{
            if(err){
                res.json(err);
            }
            res.json(pagos);
        });

    });

};

controller.edit = (req, res) => {

    const {pagos}= req.params;
   
    req.getConnection((err,conn) =>{
        conn.query('select *from pagos where pagos=?', [pagos], (err,pagos) => {
            res.json(pagos[0]);

        });

    });

};

controller.save = (req,res) =>{
    const data = req.body;
   req.getConnection((err,conn)=> {
       conn.query('insert into pagos set?', [data], (err,pagos) => {
        res.json(pagos);
       });
   })
};

controller.update = (req,res) =>{

    const {idpagos}= req.params;
    const nuevo_pagos = req.body;
  
    req.getConnection((err, conn) => {
        conn.query('update pagos set ? where pagos =?', [nuevo_pagos, idpagos], (err,rows) =>{ 
            res.json({ message: "Registro Actualizado" }); 

        });
    });
};

controller.delete = (req,res) =>{
    const {idpagos}= req.params; 
  req.getConnection((err,conn) => {
      conn.query('update idpagos = "Inactivo"  where idpagos =?', [idpagos], (err, rows) => {
        res.json({ message: "Registro Eliminado" }); 
      });
  })
};

module.exports =controller;