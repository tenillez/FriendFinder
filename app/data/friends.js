//array that holds all the friends that have taken the survey
//initialize starting with dummy data
var friends = [
    {
      name: 'Steven P',
      profilePic: 'https://images-na.ssl-images-amazon.com/images/I/51fw5fn9WYL._SY450_.jpg',
      "scores": [
        "4",
        "5",
        "5",
        "2",
        "4",
        "5",
        "2",
        "4",
        "2",
        "4"
      ]
    },
    {
      name: 'Luke',
      profilePic: 'https://www.thewrap.com/wp-content/uploads/2018/01/catinthehat.jpg',
      "scores": [
        "5",
        "3",
        "2",
        "2",
        "1",
        "4",
        "1",
        "2",
        "1",
        "5"
      ]
    },
    {
    name: 'Daniel',
    profilePic: 'https://wrightlibrary.org/files/images/DanielTiger-compressor.png',
    "scores": [
      "3",
      "3",
      "3",
      "4",
      "2",
      "5",
      "1",
      "6",
      "3",
      "4"
    ]
  },
  {
    name: 'Traci',
    profilePic: 'https://i.pinimg.com/originals/8a/a8/88/8aa888b3220e72d4004d93a2715ed291.jpg',
    "scores": [
      "1",
      "2",
      "3",
      "4",
      "5",
      "4",
      "3",
      "2",
      "1",
      "3"
    ]
  },
  {
    name: 'Jessica',
    profilePic: 'https://i.pinimg.com/originals/de/01/14/de011446aee79baec7b34d7e590847a7.jpg',
    "scores": [
      "5",
      "5",
      "5",
      "5",
      "4",
      "5",
      "4",
      "4",
      "5",
      "5"
    ]
  },


  ]
  
// Note how we export the array. This makes it accessible to other files using require.
module.exports = friends;
  