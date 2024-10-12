function getInputFieldValueById(id){
    const inputValue = document.getElementById(id).value;
    const money = parseFloat(inputValue)
    return money;
}

function getInputFieldTextById(id){
    const inputValue = document.getElementById(id).innerText;
    const money = parseFloat(inputValue)
    return money;
}
function showSectionById(id){
    // hide all the sections
    document.getElementById('donate-money-form').classList.add('hidden');
    document.getElementById('history-card-form').classList.add('hidden');
    
    // show the section with the provide id as parameter
    document.getElementById(id).classList.remove('hidden');
}