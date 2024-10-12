document.getElementById('balance-donate1').addEventListener('click',function(event){
    event.preventDefault();
    const addMoney1 = getInputFieldValueById('input-money1');
    if (addMoney1<0){
        alert("Not Possible");
    
    }
    else{
        const myBalance = getInputFieldTextById('current-balance');
        const newBalance =myBalance-addMoney1;
        document.getElementById('current-balance').innerText=newBalance;

        const donateBalance = getInputFieldTextById('total-donate1');
        const newTotalBalance = donateBalance+addMoney1;
        document.getElementById('total-donate1').innerText=newTotalBalance;
        alert('Money Succefully Added');
        const boxContainer = document.createElement('div');
        boxContainer.style.border = '1px solid #000';
        boxContainer.style.padding = '20px';
        boxContainer.style.margin = '10px 0';
        boxContainer.style.borderRadius = '5px';
        boxContainer.style.backgroundColor = '#f9f9f9';
        
        
        const p = document.createElement('p');
        p.innerText = `${addMoney1} is ${document.getElementById('card-title1').innerText}`;
        p.style.fontWeight = 'bold';
        p.style.color='Black';
        p.style.textAlign = 'left'; 
        p.style.marginLeft = '20px'; 
        
        // Create the second paragraph
        const s = document.createElement('p');
        let currentTime = new Date();
        s.innerText = `${currentTime}`;
        s.style.textAlign = 'left';
        s.style.color='Black'; 
        s.style.marginLeft = '20px'; 
        
        
        boxContainer.appendChild(p);
        boxContainer.appendChild(s);
        
        document.getElementById('history-container').appendChild(boxContainer);
        
        document.getElementById('history-container').appendChild(boxContainer);
        
        


    }

})
document.getElementById('balance-donate2').addEventListener('click',function(event){
    event.preventDefault();
    const addMoney2 = getInputFieldValueById('input-money2');
    if (addMoney2<0){
        alert("Not Possible");
    }
    else{
        const myBalance = getInputFieldTextById('current-balance');
        const newBalance =myBalance-addMoney2;
        document.getElementById('current-balance').innerText=newBalance;

        const donateBalance = getInputFieldTextById('total-donate2');
        const newTotalBalance = donateBalance+addMoney2;
        document.getElementById('total-donate2').innerText=newTotalBalance;
        alert('Money Succefully Added');

const boxContainer = document.createElement('div');
boxContainer.style.border = '1px solid #000';
boxContainer.style.padding = '20px';
boxContainer.style.margin = '10px 0';
boxContainer.style.borderRadius = '5px';
boxContainer.style.backgroundColor = '#f9f9f9';


const p = document.createElement('p');
p.innerText = `${addMoney2} is ${document.getElementById('card-title2').innerText}`;
p.style.fontWeight = 'bold';
p.style.color='Black';
p.style.textAlign = 'left'; 
p.style.marginLeft = '20px'; 

// Create the second paragraph
const s = document.createElement('p');
let currentTime = new Date();
s.innerText = `${currentTime}`;
s.style.textAlign = 'left';
s.style.color='Black'; 
s.style.marginLeft = '20px'; 


boxContainer.appendChild(p);
boxContainer.appendChild(s);

document.getElementById('history-container').appendChild(boxContainer);

document.getElementById('history-container').appendChild(boxContainer);


    }

   })
   document.getElementById('balance-donate3').addEventListener('click',function(event){
    event.preventDefault();
    const addMoney3 = getInputFieldValueById('input-money3');
    if (addMoney3<0){
        alert("Not Possible");
    }
    else{
        const myBalance = getInputFieldTextById('current-balance');
        const newBalance =myBalance-addMoney3;
        document.getElementById('current-balance').innerText=newBalance;

        const donateBalance = getInputFieldTextById('total-donate3');
        const newTotalBalance = donateBalance+addMoney3;
        document.getElementById('total-donate3').innerText=newTotalBalance;

        alert('Money Succefully Added');

        const boxContainer = document.createElement('div');
        boxContainer.style.border = '1px solid #000';
        boxContainer.style.padding = '20px';
        boxContainer.style.margin = '10px 0';
        boxContainer.style.borderRadius = '5px';
        boxContainer.style.backgroundColor = '#f9f9f9';
        
        
        const p = document.createElement('p');
        p.innerText = `${addMoney3} is ${document.getElementById('card-title3').innerText}`;
        p.style.fontWeight = 'bold';
        p.style.color='Black';
        p.style.textAlign = 'left'; 
        p.style.marginLeft = '20px'; 
        
        // Create the second paragraph
        const s = document.createElement('p');
        let currentTime = new Date();
        s.innerText = `${currentTime}`;
        s.style.textAlign = 'left';
        s.style.color='Black'; 
        s.style.marginLeft = '20px'; 
        
        
        boxContainer.appendChild(p);
        boxContainer.appendChild(s);
        
        document.getElementById('history-container').appendChild(boxContainer);
        
        document.getElementById('history-container').appendChild(boxContainer);
        
        

    }
   
   })

