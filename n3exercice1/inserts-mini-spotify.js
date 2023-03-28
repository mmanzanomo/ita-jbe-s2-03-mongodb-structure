/*
* use spotify
*/

// ARTISTS
db.artists.insertMany([
  {
    '_id': ObjectId("600dad6b6649a1e5fb264b1d"),
    'name': 'Santiago García',
    'image': 'image1.png',
    'artists': []
  },{
    '_id': ObjectId("600dad6b6649a1e5fb264b2d"),
    'name': 'Andrea Rodríguez',
    'image': 'image2.png',
    'artists': [ObjectId("600dad6b6649a1e5fb264b4d")]
  },{
    '_id': ObjectId("600dad6b6649a1e5fb264b3d"),
    'name': 'Lucía Gómez',
    'image': 'image3.png',
    'artists': [ObjectId("600dad6b6649a1e5fb264b1d"),ObjectId("600dad6b6649a1e5fb264b4d")]
  },{
    '_id': ObjectId("600dad6b6649a1e5fb264b4d"),
    'name': 'Alejandro Torres',
    'image': 'image4.png',
    'artists': [ObjectId("600dad6b6649a1e5fb264b3d")]
  }
]);

// ALBUMS
db.albums.insertMany([
  {
    '_id': ObjectId("601dad6b6649a1e5fb264b1d"),
    'title': 'Zik and Rap',
    'year_of_publication': '2006',
    'image': 'image1.png',
    'artist': ObjectId("600dad6b6649a1e5fb264b1d")
  },{
    '_id': ObjectId("601dad6b6649a1e5fb264b2d"),
    'title': 'Historias de un Artista',
    'year_of_publication': '2016',
    'image': 'image2.png',
    'artist': ObjectId("600dad6b6649a1e5fb264b2d")
  },{
    '_id': ObjectId("601dad6b6649a1e5fb264b3d"),
    'title': 'Fantasía',
    'year_of_publication': '2022',
    'image': 'image3.png',
    'artist': ObjectId("600dad6b6649a1e5fb264b3d")
  },{
    '_id': ObjectId("601dad6b6649a1e5fb264b4d"),
    'title': 'Tour de melodias',
    'year_of_publication': '2010',
    'image': 'image4.png',
    'artist': ObjectId("600dad6b6649a1e5fb264b3d")
  }
]);

// SONGS
db.songs.insertMany([
  {
    '_id': ObjectId("602dad6b6649a1e5fb264b1d"),
    'title': 'Gato y ratón',
    'length': 2.36,
    'reproductions': 566,
    'album': ObjectId("601dad6b6649a1e5fb264b1d")
  },{
    '_id': ObjectId("602dad6b6649a1e5fb264b2d"),
    'title': 'Zienaga',
    'length': 1.56,
    'reproductions': 615,
    'album': ObjectId("601dad6b6649a1e5fb264b2d")
  },{
    '_id': ObjectId("602dad6b6649a1e5fb264b3d"),
    'title': 'Sonido de guitarras',
    'length': 3.36,
    'reproductions': 712,
    'album': ObjectId("601dad6b6649a1e5fb264b2d")
  },{
    '_id': ObjectId("602dad6b6649a1e5fb264b4d"),
    'title': 'Saltamontes',
    'length': 3.12,
    'reproductions': 496,
    'album': ObjectId("601dad6b6649a1e5fb264b3d")
  }
]);

// USERS
db.users.insertMany([
  {
    '_id': ObjectId("702dad6b6649a1e5fb264b1d"),
    'email': 'example1@example.com',
    'password': 'examplepass1',
    'username': 'Emily Smith',
    'birthday': new Date('1990-01-01T00:00:00Z'),
    'gender': 'f',
    'country': 'Australia',
    'zip': '3000',
    'favourite_artists': [ObjectId("600dad6b6649a1e5fb264b1d")],
    'favourite_albums':[ObjectId("601dad6b6649a1e5fb264b1d"),ObjectId("601dad6b6649a1e5fb264b2d")],
    'favourite_songs': [ObjectId("602dad6b6649a1e5fb264b1d"),ObjectId("602dad6b6649a1e5fb264b2d")]
  },{
    '_id': ObjectId("702dad6b6649a1e5fb264b2d"),
    'email': 'example2@example.com',
    'password': 'examplepass2',
    'username': 'Roberto Hidalgo',
    'birthday': new Date('1997-08-05T00:00:00Z'),
    'gender': 'm',
    'country': 'España',
    'zip': '8000',
    'favourite_artists': [ObjectId("600dad6b6649a1e5fb264b4d")],
    'favourite_albums':[ObjectId("601dad6b6649a1e5fb264b3d")],
    'favourite_songs': [ObjectId("602dad6b6649a1e5fb264b3d")]
  },{
    '_id': ObjectId("702dad6b6649a1e5fb264b3d"),
    'email': 'example3@example.com',
    'password': 'examplepass3',
    'username': 'Sara Andersson',
    'birthday': new Date('1998-09-07T00:00:00Z'),
    'gender': 'f',
    'country': 'Suecia',
    'zip': '6000',
    'favourite_artists': [ObjectId("600dad6b6649a1e5fb264b1d"),ObjectId("600dad6b6649a1e5fb264b4d")],
    'favourite_albums':[ObjectId("601dad6b6649a1e5fb264b1d"),ObjectId("601dad6b6649a1e5fb264b3d")],
    'favourite_songs': [ObjectId("602dad6b6649a1e5fb264b1d")]
  }
]);

// PLAYLISTS
db.playlists.insertMany([
  {
    '_id': ObjectId("703dad6b6649a1e5fb264b1d"),
    'title': 'Best songs 2022',
    'n_songs': 2,
    'created_at': new Date('2022-05-09T00:00:00Z'),
    'user': ObjectId("702dad6b6649a1e5fb264b1d"),
    'songs': [ObjectId("602dad6b6649a1e5fb264b1d"),ObjectId("602dad6b6649a1e5fb264b2d")]
  }
]);

// SUBSCRIPTIONS
db.subscriptions.insertMany([
  {
    '_id': ObjectId("901dad6b6649a1e5fb264b1d"),
    'start_date': new Date('2022-05-09T00:00:00Z'),
    'renewal_date': new Date('2023-05-09T00:00:00Z'),
    'user': ObjectId("702dad6b6649a1e5fb264b2d"),
    'payments': [
      {
        '_id': ObjectId("911dad6b6649a1e5fb264b1a"),
        'date': new Date('2022-06-09T00:00:00Z'),
        'total': 8.50,
        'payment_option': 'paypal',
        'payment_method': {
          'paypal': {
            'username': 'paypalsample@example.com'
          }
        }
      },{
        '_id': ObjectId("911dad6b6649a1e5fb264b2a"),
        'date': new Date('2022-07-09T00:00:00Z'),
        'total': 8.50,
        'payment_option': 'paypal',
        'payment_method': {
          'paypal': {
            'username': 'paypalsample@example.com'
          }
        }
      }
    ]
  },{
    '_id': ObjectId("901dad6b6649a1e5fb264b2d"),
    'start_date': new Date('2022-10-09T00:00:00Z'),
    'renewal_date': new Date('2023-02-01T00:00:00Z'),
    'user': ObjectId("702dad6b6649a1e5fb264b3d"),
    'payments': [
      {
        '_id': ObjectId("912dad6b6649a1e5fb264b2a"),
        'date': new Date('2022-10-09T00:00:00Z'),
        'total': 8.50,
        'payment_option': 'credit_card',
        'payment_method': {
          'credit_card': {
            'card_number': '6448-1123-4587',
            'expiration_date': new Date('2023-05-09T00:00:00Z'),
            'csc': 543
          }
        }
      }
    ]
  }
]);
