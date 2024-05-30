
const fs = require("fs")
module.exports = {
    index: (req,res) => {
        const data = JSON.parse(fs.readFileSync("./data/data.json", "utf-8"));
    
        res.render('index',{
           data 
        })
    },
    about : (req,res) => {
        
        res.render('about')
    },
    portfolio : (req,res) => {
        
        res.render('protfolio')
    },
    servicios : (req,res) => {
        
        res.render('servicios')
    },
    contact : (req,res) => {
        
        res.render('contact')
    },
    pagesTypes: (req,res) => {

        const {id} = req.params;
        const data = JSON.parse(fs.readFileSync("./data/data.json", "utf-8"));
       const tipoPagina=  data.find(tipo => tipo.id == id)
        
         res.render("pagesTypes",{
           tipo:  tipoPagina.Tipo,
           descripcion:  tipoPagina.Descripción,
           especificaciones : tipoPagina.Especificaciones,
           beneficios: tipoPagina.Beneficios
         })
         
         

}
}