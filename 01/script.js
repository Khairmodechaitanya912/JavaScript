document.querySelector('#submitData').addEventListener('click',()=>{

    let theaterName = document.getElementsByTagName('input')[0].value
    let movieName = document.getElementsByTagName('input')[1].value
    let theaterNo = document.getElementsByTagName('input')[2].value
    let seatNo = document.getElementsByTagName('input')[3].value
    let date = document.getElementsByTagName('input')[4].value
    let movieimage = document.getElementsByTagName('input')[5].value
    let srno = document.getElementsByTagName('input')[6].value

    document.getElementsByTagName('h3')[1].innerText = srno
    document.getElementsByTagName('h3')[11].innerText = srno

    document.getElementsByTagName('img')[0].src = movieimage

    document.getElementsByTagName('h3')[3].innerText = theaterNo
    document.getElementsByTagName('h3')[13].innerText = theaterNo

    document.getElementsByTagName('h3')[5].innerText = seatNo
    document.getElementsByTagName('h3')[15].innerText = seatNo

    document.getElementsByTagName('h3')[7].innerText = date
    document.getElementsByTagName('h3')[17].innerText = date

    document.getElementsByTagName('h3')[9].innerText = theaterName

    document.getElementsByTagName('h2')[1].innerText = movieName



    event.preventDefault();
    document.getElementById('form-section').style.display = 'none'
    document.getElementById('ticket-section').style.display = 'flex'
})