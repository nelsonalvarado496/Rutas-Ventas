const controller = {};

controller.list = (req, res) => {
    req.getConnection((error,conn) =>{
        conn.query('select *from areas_trabajo',(err,areas_trabajo) =>{
            if(err){
                res.json(err);
            }
            res.json(areas_trabajo);
        });

    });

};

controller.edit = (req, res) => {

    const {idareas_trabajo}= req.params;
   
    req.getConnection((err,conn) =>{
        conn.query('select *from areas_trabajo where idareas_trabajo=?', [idareas_trabajo], (err,areas_trabajo) => {
            res.json(areas_trabajo[0]);

        });

    });

};

controller.save = (req,res) =>{
    const data = req.body;
   req.getConnection((err,conn)=> {
       conn.query('insert into areas_trabajo set?', [data], (err,areas_trabajo) => {
        res.json(areas_trabajo);
       });
   })
};

controller.update = (req,res) =>{

    const {idareas_trabajo}= req.params;
    const nuevo_areas_trabajo = req.body;
  
    req.getConnection((err, conn) => {
        conn.query('update areas_trabajo set ? where idareas_trabajo =?', [nuevo_areas_trabajo, idareas_trabajo], (err,rows) =>{ 
            res.json({ message: "Registro Actualizado" }); 

        });
    });
};

controller.delete = (req,res) =>{
    const {idareas_trabajo}= req.params; 
  req.getConnection((err,conn) => {
      conn.query('update areas_trabajo estado = "Inactivo"  where idareas_trabajo =?', [idareas_trabajo], (err, rows) => {
        res.json({ message: "Registro Eliminado" }); 
      });
  })
};

module.exports =controller;
