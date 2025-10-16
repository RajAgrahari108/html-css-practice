// ! destructing

// !with array

// let arr = [10, 20, 30, 40, 50];
// let [,,,a, b] = arr;
// console.log(a,b);

// let arr2 = [10, [20, [30,[40, [50]]]]]
// let [,[d,[,[,[c]]]]] = arr2;
// console.log(d,c);

// let arr3 = [10, [20, [30,[40, [50]]]]]
// let [,[e,[,[,[f]]]]] = arr2;
// console.log(d,c);

let obj = {
    name : "raj", 
    age : 23,
    place : "up",
    hobbies :['movie', 'comis', 'books'],
    skill :{
        fronted: {
             basic : ['html', 'css', 'js'],
            advance : ['react', 'nextjs', 'nodejs']
        },
        backend :{
             basic : ['html1', 'css1', 'js1'],
            advance : ['react1', 'nextjs1', 'nodejs1']
        }
    }


}
// let {skill: {fronted: {basic:[a, b]}}}=obj   
// let {skill: {backend: {advance:[, b]}}}=obj
// console.log(a,b);



let userProfile = {
  firstName: "Alex",
  lastName: "Johnson",
  age: 30,
  city: "New York",
  email: "alex.j@example.com"
};

// let {a}= userProfile;
// console.log(a);




const data = {
  user: {
    profile: {
      name: "Jane Doe",
      details: {
        age: 30,
        contact: {
          phone: "123-456-7890",
          address: {
            street: "456 Elm St",
            city: "Metropolis",
            coordinates: {
              lat: 40.7128,
              lng: -74.006
            }
          }
        },
        contact2: {
          phone: "7890-123-456",
          address: {
            street: "christ St",
            city: "NY",
            coordinates: {
              lat: 50.7128,
              lng: -44.006
            }
          }
        }
      }
    }
  }
};
// const {user:{profile:{details:{contact:{address:{coordinates:a}}}}}}=data
// console.log(a);



const systemConfig = {
  environment: {
    name: "production",
    regions: [
      {
        id: "us-east-1",
        services: {             
          database: {
            type: "PostgreSQL",
            credentials: {
              user: "admin",
              pass: "secret123",
              endpoints: [
                { host: "db1.useast.example.com", port: 5432 },
                { host: "db2.useast.example.com", port: 5432 }
              ]
            }               

          },                            
          cache: {
            type: "Redis",
            nodes: [
              { host: "cache1.useast.example.com", port: 6379 },
              { host: "cache2.useast.example.com", port: 6379 }
            ]
          }
        }
      }
    ]
  },
  logging: {
    level: "debug",
    outputs: {
      console: true,
      file: {
        enabled: true,
        path: "/var/log/app.log",
        rotation: {
          size: "10MB",
          interval: "1d"
        }
      }
    }
  }
};



const {environment:{regions:[{services:{database:{credentials:{endpoints:[{host:h1}]}},cache:{nodes:[{host:h2}]}}}]}}=systemConfig;
console.log(h1);
console.log(h2);