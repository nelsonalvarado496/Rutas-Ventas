const controller = {};

controller.list = (req, res) => {
    req.getConnection((error,conn) =>{
        conn.query('select *from encabezado_compra',(err,encabezado_compra) =>{
            if(err){
                res.json(err);
            }
            res.json(encabezado_compra);
        });

    });

};

controller.edit = (req, res) => {

    const {idencabezado_compra}= req.params;
   
    req.getConnection((err,conn) =>{
        conn.query('select *from encabezado_compra where idencabezado_compra=?', [idencabezado_compra], (err,encabezado_compra) => {
            res.json(encabezado_compra[0]);

        });

    });

};

controller.save = (req,res) =>{
    const data = req.body;
   req.getConnection((err,conn)=> {
       conn.query('insert into encabezado_compra set?', [data], (err,encabezado_compra) => {
        res.json(encabezado_compra);
       });
   })
};

controller.update = (req,res) =>{

    const {idencabezado_compra}= req.params;
    const nuevo_encabezado_compra = req.body;
  
    req.getConnection((err, conn) => {
        conn.query('update encabezado_compra set ? where encabezado_compra =?', [nuevo_encabezado_compra, idencabezado_compra], (err,rows) =>{ 
            res.json({ message: "Registro Actualizado" }); 

        });
    });
};

controller.delete = (req,res) =>{
    const {idencabezado_compra}= req.params; 
  req.getConnection((err,conn) => {
      conn.query('update idencabezado_compra = "Inactivo"  where idencabezado_compra =?', [idencabezado_compra], (err, rows) => {
        res.json({ message: "Registro Eliminado" }); 
      });
  })
};

module.exports =controller;