function submitData(){
    event.preventDefault();
    console.log('hello');
    let first = document.getElementsByTagName('input')[0].value
    let middle = document.getElementsByTagName('input')[1].value
    let last = document.getElementsByTagName('input')[2].value
    let mob = document.getElementsByTagName('input')[3].value
    let emailid = document.getElementsByTagName('input')[4].value
    let regNo = document.getElementsByTagName('input')[5].value
    let Photos = document.getElementsByTagName('input')[6].value

    let name = first + " " +  middle + " " + last;
    let path = Photos

    document.getElementsByTagName('h1')[3].innerText = name
    document.getElementsByTagName('h1')[5].innerText = mob
    document.getElementsByTagName('h1')[7].innerText = emailid
    document.getElementsByTagName('h1')[9].innerText = regNo
    document.getElementsByTagName('img')[0].src = path

    document.getElementById('form-data').style.display = 'none'
    document.getElementById('profile-section').style.display = 'flex'
}