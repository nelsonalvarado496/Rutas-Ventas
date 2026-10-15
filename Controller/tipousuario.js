const controller = {};

controller.list = (req, res) => {
    req.getConnection((error,conn) =>{
        conn.query('select *from tipousuario',(err,tipousuario) =>{
            if(err){
                res.json(err);
            }
            res.json(tipousuario);
        });

    });

};

controller.edit = (req, res) => {

    const {tipousuario}= req.params;
   
    req.getConnection((err,conn) =>{
        conn.query('select *from tipousuario where tipousuario=?', [tipousuario], (err,tipousuario) => {
            res.json(tipousuario[0]);

        });

    });

};

controller.save = (req,res) =>{
    const data = req.body;
   req.getConnection((err,conn)=> {
       conn.query('insert into tipousuario set?', [data], (err,tipousuario) => {
        res.json(tipousuario);
       });
   })
};

controller.update = (req,res) =>{

    const {tipousuario}= req.params;
    const nuevo_tipousuarioo = req.body;
  
    req.getConnection((err, conn) => {
        conn.query('update tipousuario set ? where tipousuario =?', [nuevo_tipousuario, idtipousuario], (err,rows) =>{ 
            res.json({ message: "Registro Actualizado" }); 

        });
    });
};

controller.delete = (req,res) =>{
    const {idtipousuario}= req.params; 
  req.getConnection((err,conn) => {
      conn.query('update idtipousuario = "Inactivo"  where idtipousuario =?', [idtipousuario], (err, rows) => {
        res.json({ message: "Registro Eliminado" }); 
      });
  })
};

module.exports =controller;