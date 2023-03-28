/*
* use optics
*/

db.createCollection('suppliers', {
  validator: {
    $jsonSchema: {
      bsonType: 'object',
      title: 'suppliers',
      required: ['nif', 'name', 'phone', 'address'],
      properties: {
        nif: {
          bsonType: 'string'
        },
        name: {
          bsonType: 'string'
        },
        fax: {
          bsonType: 'string'
        },
        phone: {
          bsonType: 'string'
        },
        address: {
          bsonType: 'object',
          title: 'object',
          required: ['street', 'number', 'city', 'zip', 'country'],
          properties: {
            street: {
              bsonType: 'string'
            },
            number: {
              bsonType: 'string'
            },
            floor: {
              bsonType: 'string'
            },
            door: {
              bsonType: 'string'
            },
            city: {
              bsonType: 'string'
            },
            zip: {
              bsonType: 'string'
            },
            country: {
              bsonType: 'string'
            }
          }
        }
      }
    }
  }
});

db.createCollection('glasses', {
  validator: {
    $jsonSchema: {
      bsonType: 'object',
      title: 'glasses',
      required: ['model', 'frame', 'frame_color', 'crystal_color', 'price', 'brand'],
      properties: {
        model: {
          bsonType: 'string'
        },
        frame: {
          enum: ["metal",
          "plastic",
          "rimless"]
        },
        frame_color: {
          bsonType: 'string'
        },
        crystal_color: {
          bsonType: 'object',
          title: 'object',
          required: ['left', 'right'],
          properties: {
            left: {
              bsonType: 'string'
            },
            right: {
              bsonType: 'string'
            }
          }
        },
        prescription: {
          bsonType: 'object',
          title: 'object',
          properties: {
            left: {
              bsonType: 'double'
            },
            right: {
              bsonType: 'double'
            }
          }
        },
        price: {
          bsonType: 'double'
        },
        brand: {
          bsonType: 'objectId'
        }
      }
    }
  }
});

db.createCollection('customers', {
  validator: {
    $jsonSchema: {
      bsonType: 'object',
      title: 'customers',
      required: ['name', 'address', 'phone', 'email', 'registration_date'],
      properties: {
        name: {
          bsonType: 'string'
        },
        address: {
          bsonType: 'string'
        },
        phone: {
          bsonType: 'string'
        },
        email: {
          bsonType: 'string'
        },
        registration_date: {
          bsonType: 'date'
        },
        recomended_by_customer: {
          bsonType: 'objectId'
        }
      }
    }
  }
});

db.createCollection('invoices', {
  validator: {
    $jsonSchema: {
      bsonType: 'object',
      title: 'invoices',
      required: ['customer', 'seller', 'date', 'glasses'],
      properties: {
        customer: {
          bsonType: 'objectId'
        },
        seller: {
          bsonType: 'string'
        },
        date: {
          bsonType: 'date'
        },
        glasses: {
          bsonType: 'array',
          items: {
            bsonType: 'objectId'
          }
        }
      }
    }
  }
});

db.createCollection('brand', {
  validator: {
    $jsonSchema: {
      bsonType: 'object',
      title: 'brand',
      required: ['supplier', 'name'],
      properties: {
        supplier: {
          bsonType: 'objectId'
        },
        name: {
          bsonType: 'string'
        }
      }
    }
  }
});