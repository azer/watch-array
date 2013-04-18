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

})

people.shift()
people.push('Taylor', 'Brown')
```

## Install

```bash
$ npm install watch-array
```

## How It Works?

* It mixes the given array with [new-pubsub](http://github.com/azer/new-pubsub). 
* It doesn't add new methods or change the behaviour of existing ones.
* It overrides mutable methods like `push`, `splice` etc to emit the changes.

![](https://dl.dropboxusercontent.com/s/vg71zdk29kckx04/npmel_12.jpg)
