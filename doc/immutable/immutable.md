Immutable
====================================
JavaScript 中的对象一般是可变的（Mutable），因为使用了引用赋值，新的对象简单的引用了原始对象，改变新的对象将影响到原始对象。如 foo={a: 1}; bar=foo; bar.a=2 你会发现此时 foo.a 也被改成了 2。虽然这样做可以节约内存，但当应用复杂后，这就造成了非常大的隐患，Mutable 带来的优点变得得不偿失。为了解决这个问题，一般的做法是使用 shallowCopy（浅拷贝）或 deepCopy（深拷贝）来避免被修改，但这样做造成了 CPU 和内存的浪费

Immutable 可以很好地解决这些问题

Immutable.js 提供了很多种数据结构:
`List`, `Stack`, `Map`, `OrderedMap`, `Set`, `OrderedSet`, `Record`.

使用npm安装

```shell
npm install immutable
```

require到任意模块.

```javascript
var Immutable = require('immutable');
var map1 = Immutable.Map({a:1, b:2, c:3});
var map2 = map1.set('b', 50);
map1.get('b'); // 2
map2.get('b'); // 50
```

### 浏览器

To use `immutable` from a browser, download [dist/immutable.min.js](https://github.com/facebook/immutable-js/blob/master/dist/immutable.min.js)
or use a CDN such as [CDNJS](https://cdnjs.com/libraries/immutable)
or [jsDelivr](http://www.jsdelivr.com/#!immutable.js).

Then, add it as a script tag to your page:

```html
<script src="immutable.min.js"></script>
<script>
    var map1 = Immutable.Map({a:1, b:2, c:3});
    var map2 = map1.set('b', 50);
    map1.get('b'); // 2
    map2.get('b'); // 50
</script>
```

Or use an AMD loader (such as [RequireJS](http://requirejs.org/)):

```javascript
require(['./immutable.min.js'], function (Immutable) {
    var map1 = Immutable.Map({a:1, b:2, c:3});
    var map2 = map1.set('b', 50);
    map1.get('b'); // 2
    map2.get('b'); // 50
});
```

If you're using [browserify](http://browserify.org/), the `immutable` npm module
also works from the browser.

### TypeScript

Use these Immutable collections and sequences as you would use native
collections in your [TypeScript](http://typescriptlang.org) programs while still taking
advantage of type generics, error detection, and auto-complete in your IDE.

Just add a reference with a relative path to the type declarations at the top
of your file.

```javascript
///<reference path='./node_modules/immutable/dist/immutable.d.ts'/>
import Immutable = require('immutable');
var map1: Immutable.Map<string, number>;
map1 = Immutable.Map({a:1, b:2, c:3});
var map2 = map1.set('b', 50);
map1.get('b'); // 2
map2.get('b'); // 50
```


The case for Immutability
-------------------------

```javascript
var map1 = Immutable.Map({a:1, b:2, c:3});
var map2 = map1.set('b', 2);
assert(map1.equals(map2) === true);
var map3 = map1.set('b', 50);
assert(map1.equals(map3) === false);
```

```javascript
var map1 = Immutable.Map({a:1, b:2, c:3});
var clone = map1;
```


```javascript
var list1 = Immutable.List.of(1, 2);
var list2 = list1.push(3, 4, 5);
var list3 = list2.unshift(0);
var list4 = list1.concat(list2, list3);
assert(list1.size === 2);
assert(list2.size === 5);
assert(list3.size === 6);
assert(list4.size === 13);
assert(list4.get(0) === 1);
```

```javascript
var alpha = Immutable.Map({a:1, b:2, c:3, d:4});
alpha.map((v, k) => k.toUpperCase()).join();
// 'A,B,C,D'
```

### Accepts raw JavaScript objects.

```javascript
var map1 = Immutable.Map({a:1, b:2, c:3, d:4});
var map2 = Immutable.Map({c:10, a:20, t:30});
var obj = {d:100, o:200, g:300};
var map3 = map1.merge(map2, obj);
// Map { a: 20, b: 2, c: 10, d: 100, t: 30, o: 200, g: 300 }
```

```javascript
var myObject = {a:1,b:2,c:3};
Immutable.Seq(myObject).map(x => x * x).toObject();
// { a: 1, b: 4, c: 9 }
```

```js
var obj = { 1: "one" };
Object.keys(obj); // [ "1" ]
obj["1"]; // "one"
obj[1];   // "one"

var map = Immutable.fromJS(obj);
map.get("1"); // "one"
map.get(1);   // undefined
```

### Converts back to raw JavaScript objects.

```javascript
var deep = Immutable.Map({ a: 1, b: 2, c: Immutable.List.of(3, 4, 5) });
deep.toObject() // { a: 1, b: 2, c: List [ 3, 4, 5 ] }
deep.toArray() // [ 1, 2, List [ 3, 4, 5 ] ]
deep.toJS() // { a: 1, b: 2, c: [ 3, 4, 5 ] }
JSON.stringify(deep) // '{"a":1,"b":2,"c":[3,4,5]}'
```

### Embraces ES6

```js
// ES6
foo.map(x => x * x);
// ES3
foo.map(function (x) { return x * x; });
```

Nested Structures
-----------------

The collections in `immutable` are intended to be nested, allowing for deep
trees of data, similar to JSON.

```javascript
var nested = Immutable.fromJS({a:{b:{c:[3,4,5]}}});
// Map { a: Map { b: Map { c: List [ 3, 4, 5 ] } } }
```

A few power-tools allow for reading and operating on nested data. The
most useful are `mergeDeep`, `getIn`, `setIn`, and `updateIn`, found on `List`,
`Map` and `OrderedMap`.

```javascript
var nested2 = nested.mergeDeep({a:{b:{d:6}}});
// Map { a: Map { b: Map { c: List [ 3, 4, 5 ], d: 6 } } }

nested2.getIn(['a', 'b', 'd']); // 6

var nested3 = nested2.updateIn(['a', 'b', 'd'], value => value + 1);
// Map { a: Map { b: Map { c: List [ 3, 4, 5 ], d: 7 } } }

var nested4 = nested3.updateIn(['a', 'b', 'c'], list => list.push(6));
// Map { a: Map { b: Map { c: List [ 3, 4, 5, 6 ], d: 7 } } }
```


Lazy Seq
--------

`Seq` describes a lazy operation, allowing them to efficiently chain
use of all the Iterable methods (such as `map` and `filter`).

**Seq is immutable** — Once a Seq is created, it cannot be
changed, appended to, rearranged or otherwise modified. Instead, any mutative
method called on a Seq will return a new Seq.

**Seq is lazy** — Seq does as little work as necessary to respond to any
method call.

For example, the following does not perform any work, because the resulting
Seq is never used:

    var oddSquares = Immutable.Seq.of(1,2,3,4,5,6,7,8)
      .filter(x => x % 2).map(x => x * x);

Once the Seq is used, it performs only the work necessary. In this
example, no intermediate arrays are ever created, filter is called three times,
and map is only called once:

    console.log(oddSquares.get(1)); // 9

Any collection can be converted to a lazy Seq with `.toSeq()`.

    var seq = Immutable.Map({a:1, b:1, c:1}).toSeq();

Seq allows for the efficient chaining of sequence operations, especially when
converting to a different concrete type (such as to a JS object):

    seq.flip().map(key => key.toUpperCase()).flip().toObject();
    // { A: 1, B: 1, C: 1 }

As well as expressing logic that would otherwise seem memory-limited:

    Immutable.Range(1, Infinity)
      .skip(1000)
      .map(n => -n)
      .filter(n => n % 2 === 0)
      .take(2)
      .reduce((r, n) => r * n, 1);
    // 1006008

Note: An iterable is always iterated in the same order, however that order may
not always be well defined, as is the case for the `Map`.


Equality treats Collections as Data
-----------------------------------

```javascript
var map1 = Immutable.Map({a:1, b:1, c:1});
var map2 = Immutable.Map({a:1, b:1, c:1});
assert(map1 !== map2); // two different instances
assert(Immutable.is(map1, map2)); // have equivalent values
assert(map1.equals(map2)); // alternatively use the equals method
```

Batching Mutations
------------------

```javascript
var list1 = Immutable.List.of(1,2,3);
var list2 = list1.withMutations(function (list) {
  list.push(4).push(5).push(6);
});
assert(list1.size === 3);
assert(list2.size === 6);
```

文档
-------------

[Read the docs](http://facebook.github.io/immutable-js/docs/)

