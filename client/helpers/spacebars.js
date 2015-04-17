Template.registerHelper('pluralize', function (n, thing) {
  // fairly naive pluralizer
  if (n === 1) {
    return '1 ' + thing;
  }
  else {
    return n + ' ' + thing + 's';
  }
});
