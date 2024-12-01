let arrObj = [
    {
        Product_Image: 'https://images.pexels.com/photos/90946/pexels-photo-90946.jpeg?cs=srgb&dl=pexels-madebymath-90946.jpg&fm=jpg',
        Product_Name : 'Camara',
        Product_Price : '2400',
        Product_Category: 'Electronic'
    },
    {
        Product_Image: 'https://images.unsplash.com/photo-1523275335684-37898b6baf30?fm=jpg&q=60&w=3000&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8cHJvZHVjdHxlbnwwfHwwfHx8MA%3D%3D',
        Product_Name : 'Watch',
        Product_Price : '2500',
        Product_Category: 'Electronic'
    },
    {
        Product_Image: 'https://i.pinimg.com/originals/c6/f3/7a/c6f37a9f229be1d4007026b952256c29.jpg',
        Product_Name : 'Headphone',
        Product_Price : '2000',
        Product_Category: 'Electronic'
    }
]

console.log(arrObj);

let bodyTag = document.querySelector('body')

let sectionTag = document.createElement('section')

arrObj.forEach(element => {
    let box = document.createElement('div')
    let imgbox = document.createElement('div')
    let imgtag = document.createElement('img')

    box.setAttribute('class','Box1')
    imgbox.setAttribute('class','imgbox')

    let First_h1 = document.createElement('h1')
    let Second_h1 = document.createElement('h1')
    let Third_h1 = document.createElement('h1')

    box.appendChild(imgbox);
    imgbox.appendChild(imgtag);
    box.appendChild(First_h1);
    box.appendChild(Second_h1);
    box.appendChild(Third_h1);
    sectionTag.appendChild(box);

    imgtag.src = element.Product_Image
    First_h1.innerText = 'Product Name : ' + element.Product_Name
    Second_h1.innerText = 'Product Price : ' + element.Product_Price + " Rs"
    Third_h1.innerText = 'Product Category : ' + element.Product_Category

    bodyTag.appendChild(sectionTag);
});


