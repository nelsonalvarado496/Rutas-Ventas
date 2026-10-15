const controller = {};

controller.list = (req, res) => {
    req.getConnection((error,conn) =>{
        conn.query('select *from detalleventa',(err,detalleventa) =>{
            if(err){
                res.json(err);
            }
            res.json(detalleventa);
        });

    });

};

controller.edit = (req, res) => {

    const {detalleventa}= req.params;
   
    req.getConnection((err,conn) =>{
        conn.query('select *from detalleventa where detalleventa=?', [detalleventa], (err,detalleventa) => {
            res.json(detalleventa[0]);

        });

    });

};

controller.save = (req,res) =>{
    const data = req.body;
   req.getConnection((err,conn)=> {
       conn.query('insert into detalleventa set?', [data], (err,detalleventa) => {
        res.json(detalleventa);
       });
   })
};

controller.update = (req,res) =>{

    const {iddetalleventa}= req.params;
    const nuevo_detalleventa = req.body;
  
    req.getConnection((err, conn) => {
        conn.query('update detalleventa set ? where detalleventa =?', [nuevo_detalleventa, iddetalleventa], (err,rows) =>{ 
            res.json({ message: "Registro Actualizado" }); 

        });
    });
};

controller.delete = (req,res) =>{
    const {iddetalleventa}= req.params; 
  req.getConnection((err,conn) => {
      conn.query('update detalleventa estado = "Inactivo"  where iddetalleventa =?', [iddetalleventa], (err, rows) => {
        res.json({ message: "Registro Eliminado" }); 
      });
  })
};

module.exports =controller;