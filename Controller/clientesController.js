const controller = {};

controller.list = (req, res) => {
    req.getConnection((error,conn) =>{
        conn.query('select *from clientes',(err,clientes) =>{
            if(err){
                res.json(err);
            }
            res.json(clientes);
        });

    });

};

controller.edit = (req, res) => {

    const {idclientes}= req.params;
   
    req.getConnection((err,conn) =>{
        conn.query('select *from clientes where clientes=?', [idclientes], (err,clientes) => {
            res.json(clientes[0]);

        });

    });

};

controller.save = (req,res) =>{
    const data = req.body;
   req.getConnection((err,conn)=> {
       conn.query('insert into clientes set?', [data], (err,clientes) => {
        res.json(clientes);
       });
   })
};

controller.update = (req,res) =>{

    const {idclientes}= req.params;
    const nuevo_clientes = req.body;
  
    req.getConnection((err, conn) => {
        conn.query('update clientes set ? where idclientes =?', [nuevo_clientes, idclientes], (err,rows) =>{ 
            res.json({ message: "Registro Actualizado" }); 

        });
    });
};

controller.delete = (req,res) =>{
    const {idclientes}= req.params; 
  req.getConnection((err,conn) => {
      conn.query('update clientes estado = "Inactivo"  where clientes =?', [idclientes], (err, rows) => {
        res.json({ message: "Registro Eliminado" }); 
      });
  })
};

module.exports =controller;
