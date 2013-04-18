## watch-array

Lets you subscribe to any changes on native JavaScript arrays. See also: [new-list](http://github.com/azer/new-list)

```js
watchArray = require('watch-array')

people = ['Joe', 'Smith']

watchArray(people, function(update){ // or watchArray.once(people, function(update){

    update.add
    // => { 1: Taylor, 2: Brown }

    update.remove
    // => [0]
    
    update.sort
    // => undefined

})

people.shift()
people.push('Taylor', 'Brown')
```

## Install

```bash
$ npm install watch-array
```

## Subscribing To Deeper Changes

You can easily define your custom type of updates and distribute them using the minimalistic pubsub interface mixed to
any array that you watch *(see [new-list](http://github.com/azer/new-list) for defining native arrays with Pub/Sub by default):*

```js
people = [{ name: 'Joe', age: 27 }, { name: 'Smith', age: 19 }]

watchArray(people, function(update){
    
  if (update.person) {

    update.index
    // => 1
    update.person
    // => { name: 'Smith', age: 20 }

  }
  
})

people[1].age = 20

people.publish({ person: people[1], index: 1 })
```

## How It Works?

* It mixes the given array with [new-pubsub](http://github.com/azer/new-pubsub). 
* It doesn't add new methods (except the pubsub ones above) or change the behaviour of existing ones.
* It overrides mutable methods like `push`, `splice` etc to emit the changes.

![](https://dl.dropboxusercontent.com/s/vg71zdk29kckx04/npmel_12.jpg)
