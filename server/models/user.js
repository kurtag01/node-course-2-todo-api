var mongoose = require ('mongoose');

var User = mongoose.model('User',{
  email: {
    type: String,
    required: true,
    minlength: 1,
    trim: true
  }
})

var User = new User({
  email: '   blahblah@blah.com   '
});

module.exports = {User};
