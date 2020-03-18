module.exports = (sequelize, DataTypes) => {
    const Bookmark = sequelize.define('Bookmark', {})
  
    // relates this model with User and Song
    Bookmark.associate = function (models) {
      Bookmark.belongsTo(models.User)
      Bookmark.belongsTo(models.Song)
    }
  
    return Bookmark
  }