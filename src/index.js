const express = require('express')
const app = express()
const mongoose = require('mongoose')
const router = require('./router/router.js')

app.use(express.json())
app.use('/api/menu', router)

mongoose
	.connect(
		'mongodb+srv://tejaskalbe96:Tejas123@cluster0.7bouzev.mongodb.net/To-Do-List?retryWrites=true&w=majority'
	)
	.then(() => {
		console.log('Connection Successfull')
	})
	.then(() => {
		app.listen(3000, () => {
			console.log(`Server is ruuning on http://localhost:3000`)
		})
	})
	.catch((e) => {
		console.error('Error', e)
	})
