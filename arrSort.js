// 冒泡排序,功能版
function sort(arr){
    let len=arr.length;
    for(let i=0;i<len-1;i++){
        console.log(arr[i]);
        for(let j=0;j<len-1-i;j++){
            console.log(arr[j]);
            if(arr[j]>arr[j+1]){
                let val=arr[j];
                arr[j]=arr[j+1];
                arr[j+1]=val;
            }
        }
    }
    return arr;
}
let test=[9,3,10,2,1,48,100];

let result= sort(test);
// console.log(result);
