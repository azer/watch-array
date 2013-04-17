var mixNewList = require("new-list").mix;

module.exports = subscribe;
module.exports.once = once;

function subscribe(array, callback){
  array.extendsPubSub || mixNewList(array);
  array.subscribe(callback);
}

function once(array, callback){
  array.extendsPubSub || mixNewList(array);
  array.subscribe.once(callback);
}
