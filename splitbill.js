// function Calculate(){
//     var remain;
//     var split;
//     var name1 = document.getElementById('name1').value;
//     var name2 = document.getElementById('name2').value;
//     var amt1 = document.getElementById('amt1').value;
//     var amt2 = document.getElementById('amt2').value;
    
//     if (amt2 > amt1) {
//         remain = amt2 - amt1;
//         split = remain/2;
//         var para = document.createElement('p')
//     para.innerHTML = ` ${name1} owes Rs ${split} to ${name2}`;
//     document.getElementById('split').appendChild(para); 
//     para.setAttribute('style','color:rgb(85, 66, 54); margin-left:700px; padding:50px; margin-bottom: 100px; font-size: 30px');
//     }
//     else if (amt1 > amt2) {
//         remain = amt1 - amt2;
//         split = remain/2;
//         var para = document.createElement('p')
//     para.innerHTML = ` ${name2} owes Rs ${split} to ${name1}`;
//     document.getElementById('split').appendChild(para);
//     para.setAttribute('style','color:rgb(85, 66, 54); margin-left:700px; padding:50px; margin-bottom: 100px; font-size: 30px');
//     }
//     else{
//         alert("No share to be paid")
//     }
    
    
// }

function Calculate(){
    
    var name1 = document.getElementById('name1').value;
    var name2 = document.getElementById('name2').value;
    var name3 = document.getElementById('name3').value;
    var amt1 = document.getElementById('amt1').value;
    var amt2 = document.getElementById('amt2').value;
    var amt3 = document.getElementById('amt3').value;

    var owes;
    var owe;
    var sum = (+amt1 + +amt2 + +amt3);
    var total = sum/3;
    var max = Math.max(amt1, amt2, amt3);
    console.log(`Sum: ${sum}`); //calculating sum
    console.log(`total: ${total}`);   //sum/3 for owes
    console.log(`max: ${max}`);  //calculating max

    if (max == amt1){    //everyone will pay to P1
        if (total > amt2 && total > amt3){
            owes = total - amt2;
            owe = total - amt3;
            console.log(`${name2} owes Rs ${owes} to ${name1}`);
            console.log(`${name3} owes Rs ${owe} to ${name1}`);
            
            var para = document.createElement('p');
            {
            para.innerHTML = ` ${name2} owes Rs ${owes} to ${name1}` ;
            document.getElementById('split').appendChild(para); 
            para.setAttribute('style','color:rgb(85, 66, 54); margin-left:700px; padding:20px 50px; padding-top: 10px; margin-bottom: 10px; font-size: 20px');
            }
            var para = document.createElement('p');
            {
            para.innerHTML = `${name3} owes Rs ${owe} to ${name1}`;
            document.getElementById('split').appendChild(para); 
            para.setAttribute('style','color:rgb(85, 66, 54); margin-left:700px; padding:10px 50px; margin-bottom: 10px; font-size: 20px');
            }
            
           
        }
    }
    else if (max == amt2){    //everyone will pay to P2
        if (total > amt1 && total > amt3){
            owes = total - amt1;
            owe = total - amt3;
            console.log(`${name1} owes Rs ${owes} to ${name2}`);
            console.log(`${name3} owes Rs ${owe} to ${name2}`);

            var para = document.createElement('p');
            {
            para.innerHTML = ` ${name1} owes Rs ${owes} to ${name2}` ;
            document.getElementById('split').appendChild(para); 
            para.setAttribute('style','color:rgb(85, 66, 54); margin-left:700px; padding:20px 50px; padding-top: 10px; margin-bottom: 10px; font-size: 20px');
            }
            var para = document.createElement('p');{
            para.innerHTML = `${name3} owes Rs ${owe} to ${name2}`;
            document.getElementById('split').appendChild(para); 
            para.setAttribute('style','color:rgb(85, 66, 54); margin-left:700px; padding:10px 50px; margin-bottom: 10px; font-size: 20px');
            }
        }
    }
    else {    //everyone will pay to P3
        if (total > amt1 && total > amt2){
            owes = total - amt1;
            owe = total - amt2;
            console.log(`${name1} owes Rs ${owes} to ${name3}`);
            console.log(`${name2} owes Rs ${owe} to ${name3}`);

            var para = document.createElement('p');
            {
            para.innerHTML = ` ${name1} owes Rs ${owes} to ${name3}` ;
            document.getElementById('split').appendChild(para); 
            para.setAttribute('style','color:rgb(85, 66, 54); margin-left:700px; padding:20px 50px; padding-top: 10px; margin-bottom: 10px; font-size: 20px');
            }
            var para = document.createElement('p');{
            para.innerHTML = `${name2} owes Rs ${owe} to ${name3}`;
            document.getElementById('split').appendChild(para); 
            para.setAttribute('style','color:rgb(85, 66, 54); margin-left:700px; padding:10px 50px; margin-bottom: 10px; font-size: 20px');
            }
        }
    }
        


}