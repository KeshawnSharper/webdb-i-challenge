const express = require('express')
const accountRouter= express.Router()
const db = require('./data/dbConfig.js');
accountRouter.get('/', (req,res) => {
    db('accounts').then(i => res.status(200).json(i))
})
accountRouter.get('/:id', (req,res) => {
    const {id} = req.params
    db('accounts').select('*').where({id}).then(i => res.status(200).json(i))
})
accountRouter.post('/', (req,res) => {
    const accountsData = req.body 
    db('accounts').insert(accountsData).then(i => res.status(201).json(i))
})
accountRouter.put('/:id', (req,res) => {
    const {id} = req.params
    db('accounts').where({id}).update(req.body).then(i => res.status(200).json(i))
})
accountRouter.delete('/:id', (req,res) => {
    const {id} = req.params
    db('accounts').where({id}).del().then(i => res.status(200).json(i))
})




module.exports = accountRouter 