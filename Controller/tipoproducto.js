const controller = {};

controller.list = (req, res) => {
    req.getConnection((error,conn) =>{
        conn.query('select *from tipoproducto',(err,tipoproducto) =>{
            if(err){
                res.json(err);
            }
            res.json(tipoproducto);
        });

    });

};

controller.edit = (req, res) => {

    const {tipoproducto}= req.params;
   
    req.getConnection((err,conn) =>{
        conn.query('select *from tipoproducto where tipoproducto=?', [tipoproducto], (err,sutipoproductoursales) => {
            res.json(tipoproducto[0]);

        });

    });

};

controller.save = (req,res) =>{
    const data = req.body;
   req.getConnection((err,conn)=> {
       conn.query('insert into tipoproducto set?', [data], (err,tipoproducto) => {
        res.json(tipoproducto);
       });
   })
};

controller.update = (req,res) =>{

    const {idtipoproducto}= req.params;
    const nuevo_tipoproducto = req.body;
  
    req.getConnection((err, conn) => {
        conn.query('update tipoproducto set ? where tipoproducto =?', [nuevo_tipoproducto, idtipoproducto], (err,rows) =>{ 
            res.json({ message: "Registro Actualizado" }); 

        });
    });
};

controller.delete = (req,res) =>{
    const {idtipoproducto}= req.params; 
  req.getConnection((err,conn) => {
      conn.query('update idtipoproducto = "Inactivo"  where idtipoproducto =?', [idtipoproducto], (err, rows) => {
        res.json({ message: "Registro Eliminado" }); 
      });
  })
};

module.exports =controller;