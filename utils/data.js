// const ObjectId = require('mongoose')
const ObjectId = require('mongodb').ObjectId;

const users = [
    {"_id": ObjectId("6203c14bd9cbea24f3be3614"),
    "username": 'rayhewitt42',
    "email":"rayhewitt42@gmail.com",
    "thoughts":[
        ObjectId("6203c14bd9cbea24f3be361c")
    ],
    "friends":[
        ObjectId("6203c14bd9cbea24f3be3615"),
        ObjectId("6203c14bd9cbea24f3be3616"),
        ObjectId("6203c14bd9cbea24f3be3617"),
        ObjectId("6203c14bd9cbea24f3be3618"),
        ObjectId("6203c14bd9cbea24f3be3619"),
        ObjectId("6203c14bd9cbea24f3be361a"),
    ] 
    },

    {"_id": ObjectId("6203c14bd9cbea24f3be3615"),
     "username": 'johnjones12',
    "email":"martianmanhunter@mail.com",
    "thoughts":[
        ObjectId("6203c14bd9cbea24f3be361d")
    ],
    },

    {"_id": ObjectId("6203c14bd9cbea24f3be3616"),
    "username": 'Hulk234',
    "email":"bbscience@lab.com",
    "thoughts":[
        ObjectId("6203c14bd9cbea24f3be361e")
    ],
    "friends":[
        ObjectId("6203c14bd9cbea24f3be3614"),
        ObjectId("6203c14bd9cbea24f3be3617"),
        ObjectId("6203c14bd9cbea24f3be3618"),
        ObjectId("6203c14bd9cbea24f3be3619"),
        ObjectId("6203c14bd9cbea24f3be361a"),
    ]   },

    {"_id": ObjectId("6203c14bd9cbea24f3be3617"),
    "username": 'IronmanMKIII',
    "email":"rdj@mail.com",
    "thoughts":[
        ObjectId("6203c14bd9cbea24f3be361f")
    ], "friends":[
        ObjectId("6203c14bd9cbea24f3be3614"),
        ObjectId("6203c14bd9cbea24f3be3616"),
        ObjectId("6203c14bd9cbea24f3be361a"),
    ] },

    {"_id": ObjectId("6203c14bd9cbea24f3be3618"),
    "username": 'BlackWidow234',
    "email":"scarletj@mail.com",
    "friends":[
        ObjectId("6203c14bd9cbea24f3be3614"),
        ObjectId("6203c14bd9cbea24f3be3619"),
       
    ] },

    {"_id": ObjectId("6203c14bd9cbea24f3be3619"),
    "username": 'HawlkEye08',
    "email":"bullseye01@mail.com" },

    { "_id": ObjectId("6203c14bd9cbea24f3be361a"),
    "username": 'ThorOdenson',"email":"strongestavenger@.mail",
    "thoughts":[
        ObjectId("6203c14bd9cbea24f3be3620")
    ], "friends":[
        ObjectId("6203c14bd9cbea24f3be3614"),
        ObjectId("6203c14bd9cbea24f3be3617"),
        ObjectId("6203c14bd9cbea24f3be3616"),
       
    ]  },
]
const thoughts = [
    {"thoughtText":"This is a Thought",
    "username":"rayhewitt42"},

    {"thoughtText":"I am from mars to protect","username":
    "johnjones12"},

    {"thoughtText":"Hulk Smash!!","username":
    "Hulk234"},

    {"thoughtText":"Jarvis, is the AI system I created",
    "username":"IronmanMKIII"},

    {"thoughtText":"I am from Asgard","username":
    "ThorOdenson"},
    



]
module.exports = { 
    users, 
    thoughts}