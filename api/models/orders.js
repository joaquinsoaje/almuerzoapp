const mongoose = require('mongoose')
const Schema = mongoose.Schema

const Orders = mongoose.model('Order', new SChema({
	meal_id: { type: Schema.Types.ObjectId, ref: "meal" },
	user_id: String,
}))

module.exports = Orders
