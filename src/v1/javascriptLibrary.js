class Js{
    constructor(){
        // PRINT METHOD
        this.print = function(msg){
            console.log(msg);
        }
        // SELECT CLASS METHOD
        this.selectClass = function(item){
            const elems = document.getElementsByClassName(item);
            var elements = [];
            for(var i = 0;i <= elems.length - 1;i++){
                elements.push(elems[i]);
            }
            return elements
        }
        // SELECT TAG METHOD
        this.selectTag = function(tag){
            document.getElementsByTagName(tag);
        }
        // SELECT ID METHOD
        this.selectId = function(id){
            document.querySelector('#' + id);
        }
    }
}