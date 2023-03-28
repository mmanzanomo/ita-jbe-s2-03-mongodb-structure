/*
 * use youtube
*/

// USERS
db.users.insertMany([
    {
      '_id': ObjectId("701dad6b6649a1e5fb264b1a"),
      'email': 'mpascual@example.com',
      'password': 'samplepass1',
      'username': 'Pascu',
      'birthday': new Date('1992-09-22T00:01:00Z'),
      'gender': 'male',
      'country': 'España',
      'zip': '30422'
    }, {
      '_id': ObjectId("701dad6b6649a1e5fb264b2a"),
      'email': 'jhonroberts@example.com',
      'password': 'samplepass2',
      'username': 'jhonbert',
      'birthday': new Date('1995-03-10T00:01:00Z'),
      'gender': 'male',
      'country': 'Canadá',
      'zip': 'A3034'
    }, {
      '_id': ObjectId("701dad6b6649a1e5fb264b3a"),
      'email': 'valeria_gb@example.com',
      'password': 'samplepass3',
      'username': 'ValeriTech',
      'birthday': new Date('1996-06-12T00:01:00Z'),
      'gender': 'female',
      'country': 'Italia',
      'zip': '332221'
    }, {
      '_id': ObjectId("701dad6b6649a1e5fb264b4a"),
      'email': 'saralops@example.com',
      'password': 'samplepass6',
      'username': 'salops',
      'birthday': new Date('2000-01-27T00:01:00Z'),
      'gender': 'female',
      'country': 'Francia',
      'zip': '444333'
    }
]);

// CHANNELS
db.channels.insertMany([
  {
    '_id': ObjectId("891dad6b6649a1e5fb264b1c"),
    'name': 'TechTuts',
    'description': 'Canal con tutoriales técnicos sobre tecnología',
    'created_at': new Date('2021-01-01T19:42:15Z'),
    'user': ObjectId("701dad6b6649a1e5fb264b1a")
  }, {
    '_id': ObjectId("891dad6b6649a1e5fb264b2c"),
    'name': 'The Fitness Hub',
    'description': 'A fitness channel with workout videos',
    'created_at': new Date('2020-05-15T12:15:10Z'),
    'user': ObjectId("701dad6b6649a1e5fb264b2a")
  }, {
    '_id': ObjectId("891dad6b6649a1e5fb264b3c"),
    'name': 'valeri_code',
    'description': 'Tus tutoriales de programación',
    'created_at': new Date('2019-11-01T21:11:21Z'),
    'user': ObjectId("701dad6b6649a1e5fb264b3a")
  }, {
    '_id': ObjectId("891dad6b6649a1e5fb264b4c"),
    'name': 'Gaming Central',
    'description': 'Reviews sobre las novedades del mundo gamimg',
    'created_at': new Date('2022-02-14T14:40:51Z'),
    'user': ObjectId("701dad6b6649a1e5fb264b4a")
  }   
]);

// SUBSCRIPTIONS
db.subscription.insertMany([
  {
    '_id': ObjectId("881aad6b6649a1e5fb264b1c"),
    'channel': ObjectId("891dad6b6649a1e5fb264b2c"),
    'user': ObjectId("701dad6b6649a1e5fb264b1a")
  },{
    '_id': ObjectId("881aad6b6649a1e5fb264b2c"),
    'channel': ObjectId("891dad6b6649a1e5fb264b3c"),
    'user': ObjectId("701dad6b6649a1e5fb264b1a")
  },{
    '_id': ObjectId("881aad6b6649a1e5fb264b3c"),
    'channel': ObjectId("891dad6b6649a1e5fb264b4c"),
    'user': ObjectId("701dad6b6649a1e5fb264b1a")
  },{
    '_id': ObjectId("881aad6b6649a1e5fb264b4c"),
    'channel': ObjectId("891dad6b6649a1e5fb264b1c"),
    'user': ObjectId("701dad6b6649a1e5fb264b4a")
  },{
    '_id': ObjectId("881aad6b6649a1e5fb264b5c"),
    'channel': ObjectId("891dad6b6649a1e5fb264b2c"),
    'user': ObjectId("701dad6b6649a1e5fb264b4a")
  },{
    '_id': ObjectId("881aad6b6649a1e5fb264b6c"),
    'channel': ObjectId("891dad6b6649a1e5fb264b4c"),
    'user': ObjectId("701dad6b6649a1e5fb264b3a")
  }
]);

// VIDEOS
db.videos.insertMany([
  {
    '_id': ObjectId("691dad6b6649a1e5fb264b1d"),
    'title': 'modelo sample1',
    'description': 'El sample1 aparece con interesantes novedades.',
    'size': 74.10,
    'video_file': 'newtech.mp4',
    'length': 21.2,
    'thumbnail': 'default_thumbnail.png',
    'reproductions': 1352,
    'likes': 154,
    'dislikes': 1,
    'state': 'public',
    'tags': ['technology', 'programming', 'learning'],
    'published': new Date('2021-01-01T19:42:15Z'),
    'user': ObjectId("891dad6b6649a1e5fb264b3c")
  },{
    '_id': ObjectId("691dad6b6649a1e5fb264b2d"),
    'title': 'Mejores juegos de aventuras',
    'description': '¡Descubre los mejores juegos de aventuras para jugar en tu tiempo libre!',
    'size': 96.4,
    'video_file': 'best_games_2021.mp4',
    'length': 15.4,
    'thumbnail': 'default_thumbnail.png',
    'reproductions': 2021,
    'likes': 465,
    'dislikes': 26,
    'state': 'public',
    'tags': ['entertainment', 'games'],
    'published': new Date('2021-02-19T22:06:15Z'),
    'user': ObjectId("701dad6b6649a1e5fb264b4a")
  },{
    '_id': ObjectId("691dad6b6649a1e5fb264b3d"),
    'title': 'Gameplay Walkthrough: Last of us',
    'description': 'Nuevo capítulo con un final inesperado.',
    'size': 96.1,
    'video_file': 'lastus.mp4',
    'length': 36.3,
    'thumbnail': 'default_thumbnail.png',
    'reproductions': 1621,
    'likes': 110,
    'dislikes': 3,
    'state': 'public',
    'tags': ['games'],
    'published': new Date('2021-03-02T19:42:15Z'),
    'user': ObjectId("701dad6b6649a1e5fb264b4a")
  }
]);

// PLAYLISTS
db.playlists.insertMany([
  {
    '_id': ObjectId("591dad6b6649a1e5fb264b1d"),
    'name': 'games',
    'created_at': new Date('2022-06-01T19:42:15Z'),
    'is_private': false,
    'user': ObjectId("701dad6b6649a1e5fb264b4a"),
    'videos': [ObjectId("691dad6b6649a1e5fb264b2d"), ObjectId("691dad6b6649a1e5fb264b3d")]
  },{
    '_id': ObjectId("591dad6b6649a1e5fb264b2d"),
    'name': 'best videos 2022',
    'created_at': new Date('2022-07-01T19:42:15Z'),
    'is_private': true,
    'user': ObjectId("701dad6b6649a1e5fb264b1a"),
    'videos': [ObjectId("691dad6b6649a1e5fb264b1d"), ObjectId("691dad6b6649a1e5fb264b2d")]
  }
]);

// FEEDBACK_VIDEOS
db.feedback_video.insertMany([
  {
    '_id': ObjectId("291dad6b6649a1e5fb264b1d"),
    'value': 'like',
    'users': ObjectId("701dad6b6649a1e5fb264b4a"),
    'videos': ObjectId("691dad6b6649a1e5fb264b2d")
  },{
    '_id': ObjectId("291dad6b6649a1e5fb264b2d"),
    'value': 'like',
    'users': ObjectId("701dad6b6649a1e5fb264b1a"),
    'videos': ObjectId("691dad6b6649a1e5fb264b2d")
  },{
    '_id': ObjectId("291dad6b6649a1e5fb264b3d"),
    'value': 'like',
    'users': ObjectId("701dad6b6649a1e5fb264b3a"),
    'videos': ObjectId("691dad6b6649a1e5fb264b3d")
  }
]);

// COMMENTS
db.comments.insertMany([
  {
    '_id': ObjectId("341dad6b6649a1e5fb264b1d"),
    'text': 'Sample comment on displayed video.',
    'created_at': new Date('2022-11-09T19:42:15Z'),
    'feedback': [{
      'user': ObjectId("691dad6b6649a1e5fb264b2d"),
      'feedback': 'like',
      'date': new Date('2022-11-09T19:55:15Z')
    }],
    'user': ObjectId("701dad6b6649a1e5fb264b4a"),
    'videos': ObjectId("691dad6b6649a1e5fb264b1d")
  },{
    '_id': ObjectId("341dad6b6649a1e5fb264b2d"),
    'text': 'Sample comment on displayed video.',
    'created_at': new Date('2022-11-11T19:42:15Z'),
    'feedback': [{
      'user': ObjectId("701dad6b6649a1e5fb264b4a"),
      'feedback': 'like',
      'date': new Date('2022-11-11T19:55:15Z')
    }],
    'user': ObjectId("701dad6b6649a1e5fb264b2a"),
    'videos': ObjectId("691dad6b6649a1e5fb264b3d")
  }
]);


