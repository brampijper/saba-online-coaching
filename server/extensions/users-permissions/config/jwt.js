if (process.env.NODE_ENV === 'production') {
  module.exports = {
    jwtSecret: process.env.JWT_SECRET 
  } 
} else {
  const cred = require("../../../credentials.js");
  module.exports = {
    jwtSecret: cred.JWT_SECRET
  } 
}