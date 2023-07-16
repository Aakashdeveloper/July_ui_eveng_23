function clearScreen(){
    document.getElementById('result').value=""
}

const display = (value) => {
    document.getElementById('result').value += value
}


const calculate = () => {
    let q = document.getElementById('result').value;
    let p = eval(q);
    document.getElementById('result').value = p;
}
