fetch('https://fakestoreapi.com/products')
    .then(response => response.json())
    .then(response => {
        let box = document.querySelector('.box')
        response.forEach(items => {
            console.log(items);
            box.innerHTML += `
                    <div class="card">
                    <div class="img-box">
                         <img src=${items.image} alt="">
                    </div>
                    <div class="info">
                        <h4>${items.title}</h4>
                        <h1>${items.price} &#8377 </h1>
                        <h5>${items.category}</h5>
                        <h5 title="${items.description}">${items.description.slice(0, 60) + "...."}</h5>
                    </div>
                    </div>
                    `
        });
        console.log(response);
    });