module.exports = function(err, response){
  if (err) {
    console.error(err);
    return false;
  } 

  console.log("Engine.js says: " + response.getEvaluation());
};