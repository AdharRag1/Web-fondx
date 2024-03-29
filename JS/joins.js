var arr1=[1,2,3];
var result="";
for (var i = 0; i <arr1.length; i++) {                                                            
    if (i<arr1.length-1) {
        result+=arr1[i]+","
    }else{
        result+=arr1[i]
    }
}
console.log(result);


