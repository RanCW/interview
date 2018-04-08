function flattenDeep(arr){
    var newArr=[];
    arr.map(item => {
        if(Object.prototype.toString.call(item)==="[object Array]"){//是数组
            var childArr=flattenDeep(item);
            newArr=newArr.concat(childArr);
        }else{//非数组
            newArr.push(item);
        }
    });
    return newArr;
}
var test=[1,2,3,[11,22,33,[66,99]]];
// var test=[1,2,3];

var result=flattenDeep(test);
console.log(result);
