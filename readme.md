# DOMiNodes

DOMiNodes is a JavaScript DOM interaction library inspired by jQuery.  Using DOMiNodes, users can:
  * Select single or multiple DOM elements
  * Traverse and manipulate DOM elements
  * Build DOM elements
  * Create `DOMiNodeCollection` objects from `HTMLElement`s
  * Queue functions until DOM is fully loaded
  * Simplify HTTP requests

## Using DOMiNodes

If you would like to get started by using DOMiNodes, all you need to do is download the repo and include the webpack bundle `dominode.js` in your source code as seen below.

```html
<head>
  ...
  <script type="text/javascript" src="../dist/dominode.js"></script>
  ...
</head>
```

## DOMiNodes API

[`$l`](#l)

[DOM Traversal](#dom-traversal)
  * [`children`](#children)
  * [`parent`](#parent)

[DOM Manipulation](#dom-manipulation)
  * [`html`](#html)
  * [`empty`](#empty)
  * [`append`](#append)
  * [`remove`](#remove)
  * [`attr`](#attr)
  * [`addClass`](#addclass)
  * [`removeClass`](#removeclass)
  * [`toggleClass`](#toggleclass)

[Event Listeners](#event-listeners)
  * [`on`](#on)
  * [`off`](#off)

[`$l.ajax`](#lajax)

### $l

The DOMiNodes library employs the global variable of `$l` as a wrapper for all of the methods in the DOMiNodes library.

`$l` is most often used to select elements by using CSS selectors. `$l("div")` will find all of the `div` elements on the page and return a `DOMiNodeCollection` object which is an array of `HTMLElement`s. Additionally, other css selectors such as `$l(".active")` will find all of the elements on the document that have the class name of `active` and return a DOMiNode object with the respective `HTMLElement`s.

`$l` can also be used with unwrapped `HTMLElement`s. This will create a `DOMiNodeCollection` and allow these elements to access the DOMiNode methods.

Another way `$l` can be used is by using a string of HTML code. This builds `HTMLElement`s from the code, and wraps them in a `DOMiNodeCollection` object.

The final use of `$l` is as tool to queue functions to run once the document is fully loaded.


### DOM Traversal

`DOMiNodeCollection` methods to navigate DOM elements

#### `children`


Returns a `DOMiNodeCollection` object that contains an array of all of the children elements of every `HTMLElement` in the original collection. This method only goes one level deep and does not retrieve the grandchildren of the original elements.

#### `parent`

Returns a `DOMiNodeCollection` object containing the parent elements of every `HTMLElement` in the original `DOMiNodeCollection`.

### DOM Manipulation

`DOMiNodeCollection` methods to retrieve or set data on the DOM elements.

#### `html`

When a string argument is given, this method will change the `innerHTML` of each `DOMiNodeCollection` element to the string argument. If no argument is given, this method will return the `innerHTML` of the first `HTMLElement` in the `DOMiNodeCollection`

#### `empty`

Empties the innerHTML of each `DOMiNodeCollection` element

#### `append`

Takes a single `HTMLElement`, `DOMiNodeCollection`, or `string` as an argument and appends it to each `DOMiNodeCollection` element.

#### `remove`

Remove each `DOMiNodeCollection` element from the DOM.

#### `attr`

Takes an attribute name as an argument. The method gets the value of the attribute given for the the first element in the `DOMiNodeCollection`.

#### `addClass`

Adds a class, given as an argument, to each `DOMiNodeCollection` element.

#### `removeClass`

Removes a class, given as an argument, from each `DOMiNodeCollection` element.

#### `toggleClass`

Toggles a class, given as an argument, for each `DOMiNodeCollection` element.

### Event Listeners

```javascript
const callback = ()=> {
  console.log("Hello world!"
}
DOMiNode.on("click", callback);
DOMiNode.off("click");
```


#### `on`

Adds event listener to each `DOMiNodeCollection` element.  
List of events are available [here](https://developer.mozilla.org/en-US/docs/Web/Events).

#### `off`

Removes event listener from each `DOMiNodeCollection` element.

### $l.ajax

Sends HTTP Request and returns a `Promise` object.  

Accepts a `Hash` object as an argument with any of the following attributes:
  * method (default: "GET"): HTTP Request method or type
  * url (default: window.location.href): URL for HTTP Request
  * success: success callback
  * error: error callback
  * contentType (default: 'application/x-www-form-urlencoded; charset=UTF-8'): content type of HTTP Request

```javascript
$l.ajax({
  url: "/posts.json",
  method: "POST",
  data: {
    post: {
      title: "Theory of Everything",
      author: "Stephen Hawking"
    }
  },
  success(postData) {
    console.log("Posted!");
    // `create` action should `render json: @post`
    // this gives the client access to the `id` attribute issued by
    // the server.
    console.log("issued id: " + postData.id);
  }
});
```

## Example

Coming soon!
