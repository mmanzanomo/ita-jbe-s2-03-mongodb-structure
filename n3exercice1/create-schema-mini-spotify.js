/*
* use spotify
*/


db.createCollection('users', {
  validator: {
    $jsonSchema: {
      bsonType: 'object',
      title: 'users',
      required: ['email', 'password', 'username', 'birthday', 'gender', 'country', 'zip'],
      properties: {
        email: {
          bsonType: 'string'
        },
        password: {
          bsonType: 'string'
        },
        username: {
          bsonType: 'string'
        },
        birthday: {
          bsonType: 'date'
        },
        gender: {
          bsonType: 'string'
        },
        country: {
          bsonType: 'string'
        },
        zip: {
          bsonType: 'string'
        },
        favourite_artists: {
          bsonType: 'array',
          items: {
            bsonType: 'objectId'
          }
        },
        favourite_albums: {
          bsonType: 'array',
          items: {
            bsonType: 'objectId'
          }
        },
        favourite_songs: {
          bsonType: 'array',
          items: {
            bsonType: 'objectId'
          }
        }
      }
    }
  }
});

db.createCollection('subscriptions', {
  validator: {
    $jsonSchema: {
      bsonType: 'object',
      title: 'subscriptions',
      required: ['start_date', 'renewal_date', 'user'],
      properties: {
        start_date: {
          bsonType: 'date'
        },
        renewal_date: {
          bsonType: 'date'
        },
        user: {
          bsonType: 'objectId'
        },
        payments: {
          bsonType: 'array',
          items: {
            title: 'object',
            required: ['date', 'total', 'payment_option', 'payment_method'],
            properties: {
              date: {
                bsonType: 'date'
              },
              total: {
                bsonType: 'double'
              },
              payment_option: {
                enum: ['credit_card','paypal']
              },
              payment_method: {
                bsonType: 'object',
                title: 'object',
                properties: {
                  credit_card: {
                    bsonType: 'object',
                    title: 'object',
                    required: ['card_number', 'expiration_date', 'csc'],
                    properties: {
                      card_number: {
                        bsonType: 'string'
                      },
                      expiration_date: {
                        bsonType: 'date'
                      },
                      csc: {
                        bsonType: 'int'
                      }
                    }
                  },
                  paypal: {
                    bsonType: 'object',
                    title: 'object',
                    required: ['username'],
                    properties: {
                      username: {
                        bsonType: 'string'
                      }
                    }
                  }
                }
              }
            }
          }
        }
      }
    }
  }
});

db.createCollection('albums', {
  validator: {
    $jsonSchema: {
      bsonType: 'object',
      title: 'albums',
      required: ['title', 'year_of_publication', 'image', 'artist'],
      properties: {
        title: {
          bsonType: 'string'
        },
        year_of_publication: {
          bsonType: 'string'
        },
        image: {
          bsonType: 'string'
        },
        artist: {
          bsonType: 'objectId'
        }
      }
    }
  }
});

db.createCollection('songs', {
  validator: {
    $jsonSchema: {
      bsonType: 'object',
      title: 'songs',
      required: ['title', 'length', 'reproductions', 'album'],
      properties: {
        title: {
          bsonType: 'string'
        },
        length: {
          bsonType: 'double'
        },
        reproductions: {
          bsonType: 'int'
        },
        album: {
          bsonType: 'objectId'
        }
      }
    }
  }
});

db.createCollection('artists', {
  validator: {
    $jsonSchema: {
      bsonType: 'object',
      title: 'artists',
      required: ['name', 'image'],
      properties: {
        name: {
          bsonType: 'string'
        },
        image: {
          bsonType: 'string'
        },
        artists: {
          bsonType: 'array',
          items: {
            bsonType: 'objectId'
          }
        }
      }
    }
  }
});

db.createCollection('playlists', {
  validator: {
    $jsonSchema: {
      bsonType: 'object',
      title: 'playlists',
      required: ['title', 'n_songs', 'created_at', 'user', 'songs'],
      properties: {
        title: {
          bsonType: 'string'
        },
        n_songs: {
          bsonType: 'int'
        },
        created_at: {
          bsonType: 'date'
        },
        deleted: {
          bsonType: 'date'
        },
        user: {
          bsonType: 'objectId'
        },
        songs: {
          bsonType: 'array',
          items: {
            bsonType: 'objectId'
          }
        }
      }
    }
  }
});

db.createCollection('shared_playlist', {
  validator: {
    $jsonSchema: {
      bsonType: 'object',
      title: 'shared_playlist',
      required: ['date', 'users', 'playlists', 'songs'],
      properties: {
        date: {
          bsonType: 'date'
        },
        users: {
          bsonType: 'objectId'
        },
        playlists: {
          bsonType: 'objectId'
        },
        songs: {
          bsonType: 'objectId'
        }
      }
    }
  }
});
