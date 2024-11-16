function showImage(){
    let imgpath = document.getElementsByTagName('input')[0].value
    let txt = document.getElementsByTagName('input')[1].value

    let boxcontainer = document.querySelector(".box-container")
    let box = document.createElement('div')
    let img = document.createElement('img')
    let h2 = document.createElement('h2')
    
    box.classList.add('box')
    img.src = imgpath
    h2.innerText = txt
    box.appendChild(img)
    box.appendChild(h2)
    boxcontainer.appendChild(box)

    if (h2.innerText.length > 5) {
        h2.innerText = h2.innerText.slice(0, 6) + '...'
        h2.setAttribute('title', txt)
    }

    document.getElementsByTagName('input')[0].value = ''
    document.getElementsByTagName('input')[1].value = ''

}
