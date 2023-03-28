/*
* use optics
*/

db.suppliers.insertMany( [{
  "_id": ObjectId("641dad6b6649a1e5fb264b7d"),
  "nif": "A73217363",
  "name": "Gafa pasta, SL",
  "phone": "659090321",
  "address": {
    "street": "Industria",
    "number": "2",
    "floor": "Bajo",
    "door": "A",
    "city": "Lugo",
    "zip": "1322",
    "country": "España"
  }
},{
  "_id": ObjectId("641daf8f6649a1e5fb264b80"),
  "nif": "B00923486",
  "name": "Crital Cubo, SA",
  "fax": "903243287",
  "phone": "956436641",
  "address": {
    "street": "Carrer del Comte d'Urgell",
    "number": "10",
    "floor": "S/N",
    "city": "Barcelona",
    "zip": "08011",
    "country": "España"
  }
},{
  "_id": ObjectId("641dafa86649a1e5fb264b81"),
  "nif": "L75583729",
  "name": "Visión de pasta",
  "fax": "912209450",
  "phone": "938421098",
  "address": {
    "street": "Plaza Mayo",
    "number": "43",
    "floor": "1º",
    "door": "3ª",
    "city": "Barcelona",
    "zip": "08010",
    "country": "España"
  }
},{
  "_id": ObjectId("641db02e6649a1e5fb264b82"),
  "nif": "N65903031",
  "name": "Eye Lab, SL",
  "fax": "14321123",
  "phone": "11223491",
  "address": {
    "street": "Industry",
    "number": "6",
    "floor": "ground",
    "door": "B",
    "city": "London",
    "zip": "1345",
    "country": "England"
  }
}] );

db.brand.insertMany( [
	{
		"_id" : ObjectId("741dad6b6649a1e5fb264b7d"),
		"name" : "Sunshine",
		"supplier" : ObjectId("641dad6b6649a1e5fb264b7d")
	},
	{
		"_id": ObjectId("741daf8f6649a1e5fb264b80"),
		"name" : "Blue sky",
		"supplier" : ObjectId("641daf8f6649a1e5fb264b80")
	},
	{
		"_id": ObjectId("741dafa86649a1e5fb264b81"),
		"name" : "Original eyes",
		"supplier" : ObjectId("641dafa86649a1e5fb264b81")
	},
	{
		"_id": ObjectId("741db02e6649a1e5fb264b82"),
		"name" : "Ray Sun",
		"supplier" : ObjectId("641db02e6649a1e5fb264b82")
	}
  ] );

db.glasses.insertMany( [
	{
		"_id" : ObjectId("772dad6b6649a1e5fb264b8d"),
		"model" : "R66",
		"frame" : "rimless",
		"frame_color" : "red",
		"crystal_color" : {
            "left": "blue",
            "right": "blue"
        },
        "prescription": {
            "left" : 0.41,
            "right" : 1.22,
        },
		"price" : 121.23,
		"brand" : ObjectId("741dad6b6649a1e5fb264b7d")
	},
	{
		"_id" : ObjectId("771daf8f6649a1e5fb264b60"),
		"model" : "Forest",
		"frame" : "plastic",
		"frame_color" : "black",
        "crystal_color" : {
            "left": "transparent",
            "right": "transparent"
        },
        "prescription": {
            "left" : 1.41,
            "right" : 1.22,
        },
		"price" : 212.45,
		"brand" : ObjectId("741daf8f6649a1e5fb264b80")
	},
	{
		"_id" : ObjectId("771dafa86649a1e5fb264c81"),
		"model" : "21A",
		"frame" : "metal",
		"frame_color" : "dark blue",
        "crystal_color" : {
            "left": "black",
            "right": "black"
        },
        "prescription": {
            "left" : 0.6,
            "right" : 0.5,
        },
		"price" : 78.45,
		"brand" : ObjectId("741dafa86649a1e5fb264b81")
	},
	{
		"_id" : ObjectId("771db02e6649a1e5fb264c82"),
		"model" : "21A",
		"frame" : "metal",
		"frame_color" : "white",
        "crystal_color" : {
            "left": "black",
            "right": "black"
        },
        "prescription": {
            "left" : 0.43,
            "right" : 1.05,
        },
		"price" : 78.45,
		"brand" : ObjectId("741db02e6649a1e5fb264b82")
	},
	{
		"_id" : ObjectId("771dafa86649a1e5fb265b81"),
		"model" : "21A",
		"frame" : "metal",
		"frame_color" : "white",
        "crystal_color" : {
            "left": "transparet",
            "right": "transparent"
        },
        "prescription": {
            "left" : 0.21,
            "right" : 1.52,
        },
		"price" : 76.8,
		"brand" : ObjectId("741dafa86649a1e5fb264b81")
	},
	{
		"_id" : ObjectId("771db02e6649a1e5fb264c89"),
		"model" : "Sea",
		"frame" : "plastic",
		"frame_color" : "white",
        "crystal_color" : {
            "left": "blue",
            "right": "blue"
        },
        "prescription": {
            "left" : 0.63,
            "right" : 0.51,
        },
		"price" : 178.56,
		"brand" : ObjectId("741db02e6649a1e5fb264b82")
	}
] );

db.customers.insertMany([
    {
        "_id" : ObjectId("700dad6b6649a1e5fb264b1d"),
        'name': 'Juan García',
        'address': 'C. de la plaza, 22, 1º1, 32123, Alicante, España',
        'phone': '678912345',
        'email': 'jgarcia@mail.com',
        'registration_date': new Date('2022-03-22T12:22:00Z')
    }, {
        "_id" : ObjectId("700dad6b6649a1e5fb264b2d"),
        'name': 'Marta Martínez',
        'address': 'Av. Principal, 92, 4º3, 98765, Madrid, España',
        'phone': '634694411',
        'email': 'm.martinez@mail.com',
        'registration_date': new Date('2022-03-26T12:22:00Z')
    }, {
        "_id" : ObjectId("700dad6b6649a1e5fb264b3d"),
        'name': 'Pablo López',
        'address': 'Calle Las palmeras, 43, 3º3, 76534, Valencia, España',
        'phone': '654770238',
        'email': 'pablolo@mail.com',
        'registration_date': new Date('2022-03-29T16:41:00Z')
    }, {
        "_id" : ObjectId("700dad6b6649a1e5fb264b4d"),
        'name': 'Ana Fernández',
        'address': 'Rambla Poble Nou, 51, 1º1, 21543, Barcelona, España',
        'phone': '654770238',
        'email': 'anafer@mail.com',
        'registration_date': new Date('2022-04-02T11:16:00Z'),
        'recomended_by_customer': ObjectId("700dad6b6649a1e5fb264b3d")
    }, {
        "_id" : ObjectId("700dad6b6649a1e5fb264b5d"),
        'name': 'Miguel González',
        'address': 'Plaza La Palmera, 23, 5º31 65423, Barcelona, España',
        'phone': '678001276',
        'email': 'mgonzalez@mail.com',
        'registration_date': new Date('2022-04-06T12:52:00Z'),
        'recomended_by_customer': ObjectId("700dad6b6649a1e5fb264b4d")
    }
]);

db.invoices.insertMany([
    {
        "_id" : ObjectId("910dad6b6649a1e5fb264b1d"),
        "customer": ObjectId("700dad6b6649a1e5fb264b1d"),
        "seller": 'Manel Roble',
        "date": new Date('2022-06-29T12:31:00Z'),
        "glasses": [ObjectId("771daf8f6649a1e5fb264b60"), ObjectId("771dafa86649a1e5fb264c81")]
    }, {
        "_id" : ObjectId("910dad6b6649a1e5fb264b2d"),
        "customer": ObjectId("700dad6b6649a1e5fb264b1d"),
        "seller": 'Manel Roble',
        "date": new Date('2022-011-19T18:23:00Z'),
        "glasses": [ObjectId("771daf8f6649a1e5fb264b60"), ObjectId("771dafa86649a1e5fb264c81")]
    }, {
        "_id" : ObjectId("910dad6b6649a1e5fb264b3d"),
        "customer": ObjectId("700dad6b6649a1e5fb264b2d"),
        "seller": 'Manel Roble',
        "date": new Date('2022-010-07T17:41:00Z'),
        "glasses": [ObjectId("771daf8f6649a1e5fb264b60"), ObjectId("771dafa86649a1e5fb264c81")]
    }, {
        "_id" : ObjectId("910dad6b6649a1e5fb264b4d"),
        "customer": ObjectId("700dad6b6649a1e5fb264b4d"),
        "seller": 'Manel Roble',
        "date": new Date('2023-01-21T11:42:00Z'),
        "glasses": [ObjectId("771daf8f6649a1e5fb264b60")]
    }
]);
