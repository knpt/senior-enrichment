var Sequelize = require('sequelize')
var db = require('../index.js')


module.exports = db.define('campus', {
  name: {
      type: Sequelize.STRING, 
      allowNull: false
  },
  image: {
      type: Sequelize.STRING,
      defaultValue: "http://cdn77.sadanduseless.com/wp-content/uploads/2014/08/cat-burrito10.jpg"
  }
 
})