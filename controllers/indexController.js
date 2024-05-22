module.exports = {
    index: (req,res) => {
        return res.render('index')
    },
 
    about : (req,res) => {
        return res.render('about')
    },
    portfolio : (req,res) => {
        return res.render('protfolio')
    },
    servicios : (req,res) => {
        return res.render('servicios')
    },
    contact : (req,res) => {
        return res.render('contact')
    },

}