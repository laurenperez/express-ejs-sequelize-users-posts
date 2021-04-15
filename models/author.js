'use strict';
module.exports = (sequelize, DataTypes) => {
  var author = sequelize.define('author', {
    name: DataTypes.STRING
  }, {
    classMethods: {
      associate: function(models) {
        // associations can be defined here
        models.author.hasMany(models.post);
        //this basically says that one (models.)author has many (models.)post(s)
      }
    }
  });
  return author;
};
