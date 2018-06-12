var User = require('./user');

var mongoose = require('mongoose');

mongoose.connect('mongodb://localhost:27017/api');
var done = 0;
console.log('go');
User.find(function(err, data) {
	console.log('Found --> ' + data.length);
	for(var i=0;i<data.length;i++) {
		console.log(i);
		data[i].remove(function(err, result) {
			done++;
			console.log(done);
			if(done == User.length) {
				exit();
			}
		});
	}
});

function exit() {
	mongoose.disconnect();
}