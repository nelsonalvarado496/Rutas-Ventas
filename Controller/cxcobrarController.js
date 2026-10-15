const controller = {};

controller.list = (req, res) => {
    req.getConnection((error,conn) =>{
        conn.query('select *from cxcobrar',(err,cxcobrar) =>{
            if(err){
                res.json(err);
            }
            res.json(cxcobrar);
        });

    });

};

controller.edit = (req, res) => {

    const {idcxcobrar}= req.params;
   
    req.getConnection((err,conn) =>{
        conn.query('select *from cxcobrar where cxcobrar=?', [idcxcobrar], (err,cxcobrar) => {
            res.json(cxcobrar[0]);

        });

    });

};

controller.save = (req,res) =>{
    const data = req.body;
   req.getConnection((err,conn)=> {
       conn.query('insert into cxcobrar set?', [data], (err,cxcobrar) => {
        res.json(cxcobrar);
       });
   })
};

controller.update = (req,res) =>{

    const {idcxcobrar}= req.params;
    const nuevo_cxcobrar = req.body;
  
    req.getConnection((err, conn) => {
        conn.query('update cxcobrar set ? where idcxcobrar =?', [nuevo_cxcobrar, idcxcobrar], (err,rows) =>{ 
            res.json({ message: "Registro Actualizado" }); 

        });
    });
};

controller.delete = (req,res) =>{
    const {idcxcobrar}= req.params; 
  req.getConnection((err,conn) => {
      conn.query('update cxcobrar estado = "Inactivo"  where cxcobrar =?', [idcxcobrar], (err, rows) => {
        res.json({ message: "Registro Eliminado" }); 
      });
  })
};

module.exports =controller;
