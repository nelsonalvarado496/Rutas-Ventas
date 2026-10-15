const controller = {};

controller.list = (req, res) => {
    req.getConnection((error,conn) =>{
        conn.query('select *from empleados',(err,empleados) =>{
            if(err){
                res.json(err);
            }
            res.json(empleados);
        });

    });

};

controller.edit = (req, res) => {

    const {idempleados}= req.params;
   
    req.getConnection((err,conn) =>{
        conn.query('select *from empleados where empleados=?', [idempleados], (err,empleados) => {
            res.json(empleados[0]);

        });

    });

};

controller.save = (req,res) =>{
    const data = req.body;
   req.getConnection((err,conn)=> {
       conn.query('insert into empleados set?', [data], (err,empleados) => {
        res.json(empleados);
       });
   })
};

controller.update = (req,res) =>{

    const {idempleados}= req.params;
    const nuevo_empleados = req.body;
  
    req.getConnection((err, conn) => {
        conn.query('update empleados set ? where idempleadoss =?', [nuevo_empleados, idempleados], (err,rows) =>{ 
            res.json({ message: "Registro Actualizado" }); 

        });
    });
};

controller.delete = (req,res) =>{
    const {idempleados}= req.params; 
  req.getConnection((err,conn) => {
      conn.query('update empleados estado = "Inactivo"  where empleados =?', [idempleados], (err, rows) => {
        res.json({ message: "Registro Eliminado" }); 
      });
  })
};

module.exports =controller;