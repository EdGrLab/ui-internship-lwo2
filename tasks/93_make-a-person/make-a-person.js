export const Person = function(firstAndLast) {
  const names = firstAndLast.split(' ');
  let firstName = names[0];
  let lastName = names[1];

  this.getFirstName = function() {
    return firstName;
  };

  this.getLastName = function() {
    return lastName;
  };

  this.getFullName = function() {
    return `${firstName} ${lastName}`;
  };

  this.setFirstName = function(fname) {
    firstName = fname;
    return firstName;
  };

  this.setLastName = function(lname) {
    lastName = lname;
    return lastName;
  };

  this.setFullName = function(fullName) {
    const newFullName = fullName.split(' ');
    firstName = newFullName[0];
    lastName = newFullName[1];
    return `${firstName} ${lastName}`;
  };
};
