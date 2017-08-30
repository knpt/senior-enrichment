'use strict'
const api = require('express').Router()
const db = require('../db')
const {User, Student, Campus} = require ('../db/models/')

// If you aren't getting to this object, but rather the index.html (something with a joke) your path is wrong.
	// I know this because we automatically send index.html for all requests that don't make sense in our backend.
	// Ideally you would have something to handle this, so if you have time try that out!
api.get('/hello', (req, res) => res.send({hello: 'world'}))


api.get('/campuses', (req, res, next)=> {
	Campus.findAll({})
		.then(function(campuses){
			res.send(campuses)
		})
		.catch(next)
})

api.get('/campuses/:id', (req, res, next)=> {
	Campus.findById(req.params.id)
		.then(function(campus){
			res.send(campus)
		})
		.catch(next)
})


api.get('/students', (req, res, next) => {
	Student.findAll()
		.then(function(student){
			res.send(student)
		})
		.catch(next)
})

api.get('/students/:id', (req, res, next)=> {
	Student.findById(req.params.id)
		.then(function(student){
			res.send(student)
		})
		.catch(next)
})

api.post('/campuses', (req, res, next)=> {
	Campus.create(req.body)
	.then(function(campus){
		res.send(campus)
	})
	.catch(next)
})

api.post('/students', (req, res, next)=> {
	Student.create(req.body)
	.then(function(student){
		res.send(student)
	})
	.catch(next)
})

api.put('/students/:id', (req, res, next)=>{
	Student.update(req.body, {
		where: {id: req.params.id}
	})
	.catch(next)
})

api.put('/campuses/:id', (req, res, next)=> {
	Campus.update(req.body, {
		where: {id: req.params.id}
	})
	.catch(next)
})

api.delete('/campuses/:id', (req, res, next)=> {
	Campus.destroy({
		where: {
			id: req.params.id
		}
	})
})

api.delete('/students/:id', (req, res, next)=> {
	Student.destroy({
		where: {
			id: req.params.id
		}
	})
})
module.exports = api