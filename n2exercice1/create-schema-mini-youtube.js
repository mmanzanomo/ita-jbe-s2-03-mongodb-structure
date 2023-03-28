/*
* use youtube
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
          enum: ['male','female','other']
        },
        country: {
          bsonType: 'string'
        },
        zip: {
          bsonType: 'string'
        }
      }
    }
  }
});

db.createCollection('videos', {
  validator: {
    $jsonSchema: {
      bsonType: 'object',
      title: 'videos',
      required: ['title', 'description', 'size', 'video_file', 'length', 'thumbnail', 'reproductions', 'likes', 'dislikes', 'state', 'user'],
      properties: {
        title: {
          bsonType: 'string'
        },
        description: {
          bsonType: 'string'
        },
        size: {
          bsonType: 'double'
        },
        video_file: {
          bsonType: 'string'
        },
        length: {
          bsonType: 'double'
        },
        thumbnail: {
          bsonType: 'string'
        },
        reproductions: {
          bsonType: 'int'
        },
        likes: {
          bsonType: 'int'
        },
        dislikes: {
          bsonType: 'int'
        },
        state: {
          enum: ['public', 'private', 'hidden']
        },
        tags: {
          bsonType: 'array',
          items: {
            bsonType: 'string'
          }
        },
        user: {
          bsonType: 'objectId'
        },
        published: {
          bsonType: 'date'
        }
      }
    }
  }
});

db.createCollection('channels', {
  validator: {
    $jsonSchema: {
      bsonType: 'object',
      title: 'channels',
      required: ['name', 'description', 'created_at', 'user'],
      properties: {
        name: {
          bsonType: 'string'
        },
        description: {
          bsonType: 'string'
        },
        created_at: {
          bsonType: 'date'
        },
        user: {
          bsonType: 'objectId'
        }
      }
    }
  }
});

db.createCollection('subscription', {
  validator: {
    $jsonSchema: {
      bsonType: 'object',
      title: 'subscription',
      required: ['channel', 'user'],
      properties: {
        channel: {
          bsonType: 'objectId'
        },
        user: {
          bsonType: 'objectId'
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
      required: ['name', 'created_at', 'is_private', 'user', 'videos'],
      properties: {
        name: {
          bsonType: 'string'
        },
        created_at: {
          bsonType: 'date'
        },
        is_private: {
          bsonType: 'bool'
        },
        user: {
          bsonType: 'objectId'
        },
        videos: {
          bsonType: 'array',
          items: {
            bsonType: 'objectId'
          }
        }
      }
    }
  }
});

db.createCollection('comments', {
  validator: {
    $jsonSchema: {
      bsonType: 'object',
      title: 'comments',
      required: ['text', 'created_at', 'user', 'videos'],
      properties: {
        text: {
          bsonType: 'string'
        },
        created_at: {
          bsonType: 'date'
        },
        feedback: {
          bsonType: 'array',
          items: {
            title: 'object',
            required: ['user', 'feedback', 'date'],
            properties: {
              user: {
                bsonType: 'objectId'
              },
              feedback: {
                enum: ['like',
                'dislike']
              },
              date: {
                bsonType: 'date'
              }
            }
          }
        },
        user: {
          bsonType: 'objectId'
        },
        videos: {
          bsonType: 'objectId'
        }
      }
    }
  }
});

db.createCollection('feedback_video', {
  validator: {
    $jsonSchema: {
      bsonType: 'object',
      title: 'feedback_video',
      required: ['value', 'users', 'videos'],
      properties: {
        value: {
          enum: ['like',
          'dislike']
        },
        users: {
          bsonType: 'objectId'
        },
        videos: {
          bsonType: 'objectId'
        }
      }
    }
  }
});
