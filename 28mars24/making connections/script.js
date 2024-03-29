var counter_req=2;
var counter_con=2;

function replaceName() {
    document.getElementById('heading').textContent = 'my new name ';
}
function accept1() {
    document.getElementById('friend1').remove() 
    counter_req--;
    counter_con++;
    document.getElementById('btn2').textContent = counter_req;   
    document.getElementById('btn3').textContent = counter_con; 

    
    var div = document.createElement("div");
    div.style.width = "100px";
    div.style.height = "100px";
    div.style.color = "black";
    div.innerHTML = "Todd E";
    document.getElementById("request5").appendChild(div);
    
    var newImg = document.createElement('img');
    image1.src = 'user.png';
    document.getElementById('image1').appendChild(newImg);
    
      
}
function accept2() {
    document.getElementById('friend2').remove() 
    counter_req--;
    counter_con++;
    document.getElementById('btn2').textContent = counter_req;   
    document.getElementById('btn3').textContent = counter_con;
    var div = document.createElement("div");
    div.style.width = "100px";
    div.style.height = "100px";
    div.style.color = "black";
    
    div.innerHTML = "Phill K";
    document.getElementById("request6").appendChild(div);

    var newImg = document.createElement('img');
    image2.src = 'user.png';
    document.getElementById('image2').appendChild(newImg);
      
}
function decline1() {
    document.getElementById('friend1').remove() 
    counter_req--;
    document.getElementById('btn2').textContent = counter_req;
        
    
       
      
}
function decline2() {
    document.getElementById('friend2').remove() 
    counter_req--;
    document.getElementById('btn2').textContent = counter_req;   

      
}
