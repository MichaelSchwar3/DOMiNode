const DOMiNodeCollection = require('./dom_node_collection.js');
window.DOMiNodeCollection = DOMNodeCollection;


window.$l = (arg) => {
  if (arg instanceof HTMLElement){
    const domObject = new DOMiNodeCollection([arg]);
    return domObject;
  }else {
    const objects = document.querySelectorAll(arg);
    const arrObjects = Array.from(objects);
    const domObject = new DOMiNodeCollection(arrObjects);
    return domObject;
  }
};
