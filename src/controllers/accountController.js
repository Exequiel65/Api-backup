const db = require('../database/models')

let controller ={
    account : (req, res) =>{
        db.Account.findAll({
            include : [
                {association: 'cards'},
                {association: 'user'},
                {association: 'movements'},
                {association: 'transactions'}
            ]
        })
        .then(result =>{
            res.json({
                result
            })
        })
        .catch(error => res.json({error}))
    },
    transaction : (req, res) =>{
        db.Transaction.findAll({
            attributes: ['nro_operation', 'description', 'amount'],
            include : [
                {association: 'account-transmitter'},
                {association: 'account-receiver'},
                {association: 'card-transmitter'},
                {association: 'card-receiver'}
            ]
        })
        .then(result =>{
            res.json({
                result
            })
        })
        .catch(error => res.json({error}))
    },
}


module.exports = controller