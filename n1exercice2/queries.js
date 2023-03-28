// Get the employees of a store
db.stores.find({'_id': ObjectId('500dad6b6649a1e5fb264b1d')}, {'employees':1});

// Get orders with home delivery
db.orders.find({delivery: { $exists: true }});

