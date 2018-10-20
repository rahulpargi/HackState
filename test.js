var placeLookup = require('place-lookup')
var apiKey = "AIzaSyAIW-eWe8hZlWjIc5o3V7wcmI3Z0GTpbS4";

placeLookup("oxford", apiKey, function(result){
    console.log(result) // Do whatever with the results
});
