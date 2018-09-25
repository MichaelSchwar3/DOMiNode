class DOMiNodeCollection {
  constructor(objects) {
    this.objects = objects;
  }
  html(string){
    if(!string){
      return this.objects[0].innerHTML;
    }else {
      for (let i = 0; i < this.objects.length; i++) {
        this.objects[i].innerHTML = string;
      }
    }
  }
  empty(){
    for (let i = 0; i < this.objects.length; i++) {
      this.objects[i].innerHTML = "";
    }
  }
  append(args){
    for (let i = 0; i < this.objects.length; i++) {
      if (args instanceof DOMiNodeCollection) {
        for (let j = 0; j < args.length; j++) {
          this.objects[i].innerHTML += args[j].outerHTML;
        }
      }else if (args instanceof HTMLElement) {
        this.objects[i].innerHTML += args.outerHTML;
      }else {
        this.objects[i].innerHTML += args;
      }
    }
  }
  attr(attributeName){
    const attr = this.objects[0].getAttribute(attributeName);
    return attr.value;
  }
  addClass(classNames){
    const splitNames = classNames.split(" ");
    for (let i = 0; i < this.objects.length; i++) {
      for (let j = 0; j < splitNames.length; j++) {
        this.objects[i].classList.add(splitNames[j]);
      }
    }
  }
}

export default DOMiNodeCollection;
