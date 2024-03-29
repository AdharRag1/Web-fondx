const num1=[-2,5,7,0,3];

var x=0;
var y=0;
var indexb=0;
for (let i = 0; i < num1.length; i++) {
    while (x==y) {
        x+=num1[i]
        
    }
}

for (let j =num1.length-1; j>=0;j--) {
    while (x==y) {
        y+=num1[j]
    }
    
}


console.log(indexb);

console.log(x);
console.log(y);