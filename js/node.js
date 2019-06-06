/*
* 在某一个父元素最前面插入一个元素
*parent.prepend(child);
*
* */


HTMLElement.prototype.prepend=function (element) {
    let firstChild = this.firstElementChild;
    if(firstChild){
        this.insertBefore(element,firstChild);
    }else{
        this.appendChild(element)
    }
};

HTMLElement.prototype.prependTo =  function (element) {
    element.prepend(this);
};

HTMLElement.prototype.after = function (element) {
    let next =this.nextElementSibling;
    let parent = this.parentNode;

    if(next){
        parent.insertBefore(element, next);
    }else{
        parent.appendChild(element);
    }
};

HTMLElement.prototype.insertAfter = function (element) {
    let next =this.nextElementSibling;
    let parent = this.parentNode;

    if(next){
        parent.insertBefore(element, next);
    }else{
        parent.appendChild(element);
    }

};

