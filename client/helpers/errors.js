// Local (client-only) colleciton
Errors = new Mongo.Collection(null);

throwError = function (message) {
  Errors.insert({message: message});
};
