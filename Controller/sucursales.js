const controller = {};

controller.list = (req, res) => {
    req.getConnection((error,conn) =>{
        conn.query('select *from sucursales',(err,sucursales) =>{
            if(err){
                res.json(err);
            }
            res.json(sucursales);
        });

    });

};

controller.edit = (req, res) => {

    const {sucursales}= req.params;
   
    req.getConnection((err,conn) =>{
        conn.query('select *from sucursales where sucursales=?', [sucursales], (err,sucursales) => {
            res.json(sucursales[0]);

        });

    });

};

controller.save = (req,res) =>{
    const data = req.body;
   req.getConnection((err,conn)=> {
       conn.query('insert into sucursales set?', [data], (err,sucursales) => {
        res.json(sucursales);
       });
   })
};

controller.update = (req,res) =>{

    const {idsucursales}= req.params;
    const nuevo_sucursales = req.body;
  
    req.getConnection((err, conn) => {
        conn.query('update sucursales set ? where sucursales =?', [nuevo_sucursales, idsucursales], (err,rows) =>{ 
            res.json({ message: "Registro Actualizado" }); 

        });
    });
};

controller.delete = (req,res) =>{
    const {idsucursales}= req.params; 
  req.getConnection((err,conn) => {
      conn.query('update idsucursales = "Inactivo"  where idsucursales =?', [idsucursales], (err, rows) => {
        res.json({ message: "Registro Eliminado" }); 
      });
  })
};

module.exports =controller;