const controller = {};

controller.list = (req, res) => {
    req.getConnection((error,conn) =>{
        conn.query('select *from formapago',(err,formapago) =>{
            if(err){
                res.json(err);
            }
            res.json(formapago);
        });

    });

};

controller.edit = (req, res) => {

    const {formapago}= req.params;
   
    req.getConnection((err,conn) =>{
        conn.query('select *from formapago where formapago=?', [formapago], (err,formapago) => {
            res.json(formapago[0]);

        });

    });

};

controller.save = (req,res) =>{
    const data = req.body;
   req.getConnection((err,conn)=> {
       conn.query('insert into formapago set?', [data], (err,formapago) => {
        res.json(formapago);
       });
   })
};

controller.update = (req,res) =>{

    const {idformapago}= req.params;
    const nuevo_formapago = req.body;
  
    req.getConnection((err, conn) => {
        conn.query('update formapago set ? where formapago =?', [nuevo_formapago, idformapago], (err,rows) =>{ 
            res.json({ message: "Registro Actualizado" }); 

        });
    });
};

controller.delete = (req,res) =>{
    const {idformapago}= req.params; 
  req.getConnection((err,conn) => {
      conn.query('update idformapago = "Inactivo"  where idformapago =?', [idformapago], (err, rows) => {
        res.json({ message: "Registro Eliminado" }); 
      });
  })
};

module.exports =controller;