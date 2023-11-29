const Foods = require('../model/modalSchema.js')

const postFoodItems = async (req, res) => {
	const { name, price, rating, description} = req.body
	let Food
	try {
		Food = new Foods({
			name,
      price,
			rating,
      description
		})
		await Food.save()
	} catch (e) {
		console.log(e)
	}
	if (!Food) {
		return res.status(500).json({ message: "Can't Created" })
	} else {
		return res.status(201).json({ Food })
	}
}

const getallFoods = async (req, res) => {
	let Food
	try {
		Food = await Foods.find()
	} catch (e) {
		console.log(e)
	}
	if (!Food) {
		res.status(400).send('Not Found')
	} else {
		res.status(200).json(Food)
	}
}

const getbyIdFoodItems = async (req, res) => {
	const _id = req.params.id
	let Food
	try {
		Food = await Foods.findById({ _id })
	} catch (e) {
		console.log(e)
	}
	if (!Food) {
		res.status(400).send({ message: 'Not Found' })
	} else {
		res.status(200).json(Food)
	}
}

const updateFoodItemsbyId = async (req, res) => {
	const _id = req.params.id
	const { name, price, rating, description } = req.body
	let Food
	try {
		Food = await Foods.findByIdAndUpdate(
			{ _id },
			{
				name,
        price,
				rating,
				description,
			},
			{ new: true }
		)
	} catch (e) {
		console.log(e)
	}
	if (!Food) {
		res.status(400).send({ message: 'Not Found' })
	} else {
		res.status(201).json(Food)
	}
}

const deleteFooditembyId = async (req, res) => {
	const _id = req.params.id
	let Food
	try {
		Food = await Foods.findByIdAndDelete({ _id })
	} catch (e) {
		console.log(e)
	}
	if (!Food) {
		res.status(404).send({ message: 'Not Found' })
	} else {
		res.status(202).json(Food)
	}
}

exports.postFoodItems = postFoodItems
exports.getallFoods = getallFoods
exports.getbyIdFoodItems = getbyIdFoodItems
exports.updateFoodItemsbyId = updateFoodItemsbyId
exports.deleteFooditembyId = deleteFooditembyId
