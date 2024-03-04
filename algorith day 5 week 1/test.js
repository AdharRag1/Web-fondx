
var arr=["a", "b", "c", "d", "e"];
var revarr=[];
var revstr=""

    for (var j = arr.length - 1; j >= 0; j--) {       
        revarr.push(arr[j] )  ;            
}
 
  
 console.log(revarr);
 console.log(arr);

const str1="creature";
for (var j = str1.length - 1; j >= 0; j--) {       
    revstr+=str1[j]  ;            
}
console.log(str1);
console.log(revstr);