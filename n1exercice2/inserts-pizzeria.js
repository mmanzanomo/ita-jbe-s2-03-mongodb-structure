/*
 * use pizzeria
*/

// STORES
db.stores.insertMany([
    {
        "_id": ObjectId("500dad6b6649a1e5fb264b1d"),
        "address": {
            "address": "sample street 1",
            "zip": "72543",
            "town": "Badalona",
            "province": "Barcelona"
        },
        "employees": [{
            "_id": ObjectId("400dad6b6649a1e5fb264b1d"),
            "name": "Oscar",
            "surnames": "García García",
            "nif": "98734563A",
            "phone": "654321098",
            "is_dealer": false
        }, {
            "_id": ObjectId("400dad6b6649a1e5fb264b2d"),
            "name": "María",
            "surnames": "Pérez García",
            "nif": "96534589B",
            "phone": "6123654",
            "is_dealer": true
        }]
    }, {
        "_id": ObjectId("500dad6b6649a1e5fb264b2d"),
        "address": {
            "address": "sample street 2",
            "zip": "72543",
            "town": "Barcelona",
            "province": "Barcelona"
        },
        "employees": [{
            "_id": ObjectId("400dad6b6649a1e5fb264b3d"),
            "name": "Carlos",
            "surnames": "Arroyo Beltrán",
            "nif": "123465L",
            "phone": "6540981",
            "is_dealer": false
        }, {
            "_id": ObjectId("400dad6b6649a1e5fb264b4d"),
            "name": "Antonio",
            "surnames": "Lucas Berracín",
            "nif": "67890543E",
            "phone": "7123456",
            "is_dealer": true
        }]
    }
]);

// PRODUCTS
db.products.insertMany([
    {
        "_id": ObjectId("800dad6b6649a1e5fb264b1d"),
        "type": 'pizza',
        "name": "Barbacoa",
        "category": "category1",
        "description": "sample description",
        "image": "/images/image1.png",
        "price": 12.60
    }, {
        "_id": ObjectId("800dad6b6649a1e5fb264b2d"),
        "type": 'drink',
        "name": "Coke",
        "description": "sample description",
        "image": "/images/image2.png",
        "price": 2.60
    }, {
        "_id": ObjectId("800dad6b6649a1e5fb264b3d"),
        "type": 'burger',
        "name": "doble",
        "description": "sample description",
        "image": "/images/image3.png",
        "price": 6.60
    }, {
        "_id": ObjectId("800dad6b6649a1e5fb264b4d"),
        "type": 'pizza',
        "name": "Carbonara",
        "category": "category1",
        "description": "sample description",
        "image": "/images/image4.png",
        "price": 21.60
    }
]);

// CUSTOMERS
db.customers.insertMany([
    {
        "_id": ObjectId("700dad6b6649a1e5fb264b1d"),
        "name": "Joan",
        "surnames": "Masià Martín",
        "address": {
            "address": "Carrer d'Example",
            "zip": "08980",
            "town": "Barcelna",
            "province": "Barcelona"
        },
        "phone": "654321100"
    }, {
        "_id": ObjectId("700dad6b6649a1e5fb264b2d"),
        "name": "María",
        "surnames": "García",
        "address": {
            "address": "Carrer d'Example2",
            "zip": "30980",
            "town": "Balager",
            "province": "Lleida"
        },
        "phone": "621987654"
    }, {
        "_id": ObjectId("700dad6b6649a1e5fb264b3d"),
        "name": "Pablo",
        "surnames": "Martín Pérez",
        "address": {
            "address": "Carrer d'Example3",
            "zip": "18980",
            "town": "Barcelna",
            "province": "Barcelona"
        },
        "phone": "765423211"
    }, {
        "_id": ObjectId("700dad6b6649a1e5fb264b4d"),
        "name": "Joan",
        "surnames": "Laura Navarro González",
        "address": {
            "address": "Carrer d'Example",
            "zip": "08989",
            "town": "Badalona",
            "province": "Barcelona"
        },
        "phone": "654326549"
    }
]);

// ORDERS
db.orders.insertMany([
    {
        '_id': ObjectId("200dad6b6649a1e5fb264b1d"),
        'date': new Date('10-10-2022T19:12:00Z'),
        'is_home_delivery': true,
        'total_price': 20.50,
        'customer': ObjectId('700dad6b6649a1e5fb264b1d'),
        'products': [ObjectId('800dad6b6649a1e5fb264b1d'), ObjectId('800dad6b6649a1e5fb264b2d')],
        'store': ObjectId('500dad6b6649a1e5fb264b1d'),
        'delivery': {
            'delivered_by': ObjectId('400dad6b6649a1e5fb264b2d'),
            'date': new Date('10-10-2022T19:41:00Z')
        }
    }, {
        '_id': ObjectId("200dad6b6649a1e5fb264b2d"),
        'date': new Date('11-12-2022T20:12:00Z'),
        'is_home_delivery': true,
        'total_price': 21.75,
        'customer': ObjectId('700dad6b6649a1e5fb264b2d'),
        'products': [ObjectId('800dad6b6649a1e5fb264b2d'), ObjectId('800dad6b6649a1e5fb264b3d')],
        'store': ObjectId('500dad6b6649a1e5fb264b2d'),
        'delivery': {
            'delivered_by': ObjectId('400dad6b6649a1e5fb264b4d'),
            'date': new Date('11-12-2022T20:41:00Z')
        }
    }, {
        '_id': ObjectId("200dad6b6649a1e5fb264b3d"),
        'date': new Date('10-09-2022T19:30:00Z'),
        'is_home_delivery': false,
        'total_price': 19.10,
        'customer': ObjectId('700dad6b6649a1e5fb264b3d'),
        'products': [ObjectId('800dad6b6649a1e5fb264b1d'), ObjectId('800dad6b6649a1e5fb264b3d')],
        'store': ObjectId('500dad6b6649a1e5fb264b1d')
    }
]);
