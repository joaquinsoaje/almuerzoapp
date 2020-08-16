const express = require('express')
const Meals = require('../models/Meals')

const router = express.Router()

router.get('/', (req, res) => {
	Meals.find()
		.exec()
		.then(x => res.status(200).send(x))
	res.send('get meals')
})

router.get('/:id', (req, res) => {
	Meals.findById(req.params.id)
		.exec()
		.then(x => res.status(200).send(x))
	res.send('get meals')
})

router.post('/', (req, res) => {
	Meals.create(req.body)
		.then(x => res.status(201).send(x))
	res.send('post meals')
})

router.put('/:id', (req, res) => {
	Meals.findOneAndUpdate(req.params.id, req.body)
		.then(x => res.sendStatus(204))
	res.send('get meals')
})

router.delete('/:id', (req, res) => {
	Meals.findOneAndDelete(req.params.id)
		.exec()
		.then(() => res.sendStatus(204))
})

module.exports = router
