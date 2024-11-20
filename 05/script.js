document.getElementById('registerBtn').addEventListener('click',() => {
    let name = document.getElementsByTagName('input')[0].value
    let email = document.getElementsByTagName('input')[1].value
    let pass = document.getElementsByTagName('input')[2].value
    let conatct = document.getElementsByTagName('input')[3].value
    let address = document.getElementsByTagName('input')[4].value
    let age = document.getElementsByTagName('input')[5].value
    let url = document.getElementsByTagName('input')[6].value

    localStorage.setItem('Name',name);
    localStorage.setItem('Email',email);
    localStorage.setItem('Password',pass);
    localStorage.setItem('Contact',conatct);
    localStorage.setItem('Address',address);
    localStorage.setItem('Age',age);
    localStorage.setItem('Url',url);

    document.getElementById('register-section').style.display = 'none';
    document.getElementById('login-section').style.display = 'flex';
});

document.getElementById('login-section').addEventListener('click',() => {
    let userEmail = localStorage.getItem('Email');
    let userPass = localStorage.getItem('Password');

    let userEmailId = document.getElementsByTagName('input')[7].value
    let userPasss = document.getElementsByTagName('input')[8].value

    

    if(userEmail == userEmailId && userPass == userPasss)
    {
        document.getElementById('register-section').style.display = 'none';
        document.getElementById('login-section').style.display = 'none';
        document.getElementById('profile-section').style.display = 'flex';

        document.getElementsByTagName('img')[0].src = localStorage.getItem('Url');
        document.getElementsByTagName('h2')[0].innerText = localStorage.getItem('Name');
        document.getElementsByTagName('h2')[1].innerText = localStorage.getItem('Address');
        document.getElementsByTagName('h2')[2].innerText = localStorage.getItem('Contact');
        document.getElementsByTagName('h2')[3].innerText = localStorage.getItem('Age');
    }
});

