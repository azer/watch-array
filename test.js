var watchArray = require("./");

it('is the readme example', function(done){

  var people = ['Joe', 'Smith'];

  watchArray(people, function(update){ // or watchArray.once(people, function(update){

    expect(update.add).to.deep.equal({ 1: 'Taylor', 2: 'Brown' });
    expect(update.remove).to.deep.equal([0]);

    done();

  });

  people.shift();
  people.push('Taylor', 'Brown');

});

it('adds multiple callbacks', function(done){

  var people = ['Joe', 'Smith'], cb1 = false, cb2 = false;

  watchArray(people, function(update){ // or watchArray.once(people, function(update){
    cb1 = true;
  });

  watchArray(people, function(update){
    cb2 = true;
  });

  watchArray(people, function(){
    expect(cb1).to.be.true;
    expect(cb2).to.be.true;
    done();
  });

  people.shift();
  people.push('Taylor', 'Brown');

});
