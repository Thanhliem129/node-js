module.exports = {
  multipleObject : function (arraies) {
    return arraies.map(array => array.toObject())
  },
  mongooOject : function(object){
    return object ? object.toObject() : object
  }
}