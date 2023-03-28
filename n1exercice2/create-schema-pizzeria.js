/*
* use pizzeria
*/
db.createCollection('customers', {
    validator: {
      $jsonSchema: {
        bsonType: 'object',
        title: 'customers',
        required: ['name', 'surnames', 'address', 'phone'],
        properties: {
          name: {
            bsonType: 'string'
          },
          surnames: {
            bsonType: 'string'
          },
          address: {
            bsonType: 'object',
            title: 'object',
            properties: {
              address: {
                bsonType: 'string'
              },
              zip: {
                bsonType: 'string'
              },
              town: {
                bsonType: 'string'
              },
              province: {
                bsonType: 'string'
              }
            }
          },
          phone: {
            bsonType: 'string'
          }
        }
      }
    }
  });

  db.createCollection('orders', {
    validator: {
      $jsonSchema: {
        bsonType: 'object',
        title: 'orders',
        required: ['date', 'is_home_delivery', 'total_price', 'customer', 'products', 'store'],
        properties: {
          date: {
            bsonType: 'date'
          },
          is_home_delivery: {
            bsonType: 'bool'
          },
          total_price: {
            bsonType: 'double'
          },
          customer: {
            bsonType: 'objectId'
          },
          products: {
            bsonType: 'array',
            items: {
              bsonType: 'objectId'
            }
          },
          store: {
            bsonType: 'objectId'
          },
          delivery: {
            bsonType: 'object',
            title: 'object',
            required: ['delivered_by', 'date'],
            properties: {
              delivered_by: {
                bsonType: 'objectId'
              },
              date: {
                bsonType: 'date'
              }
            }
          }
        }
      }
    }
  });
  
  db.createCollection('products', {
    validator: {
      $jsonSchema: {
        bsonType: 'object',
        title: 'products',
        required: ['type', 'name', 'description', 'image', 'price'],
        properties: {
          type: {
            enum: ['pizza', 'burger', 'drink']
          },
          name: {
            bsonType: 'string'
          },
          category: {
            bsonType: 'string'
          },
          description: {
            bsonType: 'string'
          },
          image: {
            bsonType: 'string'
          },
          price: {
            bsonType: 'double'
          }
        }
      }
    }
  });
  
  db.createCollection('stores', {
    validator: {
      $jsonSchema: {
        bsonType: 'object',
        title: 'stores',
        required: ['address', 'employees'],
        properties: {
          address: {
            bsonType: 'object',
            title: 'object',
            required: ['address', 'zip', 'town', 'province'],
            properties: {
              address: {
                bsonType: 'string'
              },
              zip: {
                bsonType: 'string'
              },
              town: {
                bsonType: 'string'
              },
              province: {
                bsonType: 'string'
              }
            }
          },
          employees: {
            bsonType: 'array',
            items: {
              title: 'object',
              required: ['name', 'surnames', 'nif', 'phone', 'is_dealer'],
              properties: {
                name: {
                  bsonType: 'string'
                },
                surnames: {
                  bsonType: 'string'
                },
                nif: {
                  bsonType: 'string'
                },
                phone: {
                  bsonType: 'string'
                },
                is_dealer: {
                  bsonType: 'bool'
                }
              }
            }
          }
        }
      }
    }
  });

  