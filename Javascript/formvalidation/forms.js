const getId = () => {
    let id = Math.floor(Math.random() * 100000);
    document.getElementById('eid').value=`EPI${id}`
}

function validateFname(){
    let name = document.getElementById('fname').value;
    let fdiv = document.getElementById('fdiv');
    if(name.trim().length == 0){
        document.getElementById('fout').innerText = 'Please Enter FirstName';
        fdiv.classList.remove('has-success')
        fdiv.classList.add('has-error')
    }else{
        document.getElementById('fout').innerText = ''
        fdiv.classList.remove('has-error')
        fdiv.classList.add('has-success')
    }

}

const validateEmail = () => {
    let email = document.getElementById('mail').value;
    if(email.trim().length == 0){
        document.getElementById('eout').innerText = 'Please Enter Email';
    }else{
        if(email.match("^([a-zA-Z0-9]+)@([a-zA-Z0-9]+)\.([a-zA-Z]{2,5})$") == null){
            document.getElementById('eout').innerText = 'Please Enter Valid Email'
        }else{
            document.getElementById('eout').innerText = ''
        }
    }
}

const validatePwd = () => {
    let pass = document.getElementById('pwd').value;
    if(pass.trim().length<15){
        if(pass.trim().length <8){
            document.getElementById('pout').innerText = "Min Length is 8";
            document.getElementById('ppout').style.display = "block";
            document.getElementById('ppout').style.backgroundColor = "red";
        }else if(pass.trim().length > 8 && pass.trim().length <11){
            document.getElementById('pout').innerText = "";
            document.getElementById('ppout').style.backgroundColor = "orange";
        }
    }else{
        document.getElementById('ppout').style.backgroundColor = "green";
    }
}