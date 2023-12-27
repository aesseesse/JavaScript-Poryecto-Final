

  fetch('https://fakestoreapi.com/products')
    .then((res)=>{
        return res.json()
    })
    .then((data)=>{
        console.log(data)
        const contenedor = document.getElementById('contenedorAPI')
      
        const productsDiv = document.getElementById('contenedorAPI');
        productsDiv.innerHTML = '<h3>productos API:</h3>';

      data.forEach(productFake => {
        const productDiv = document.createElement('div');
        productDiv.classList.add('productFake');
        productDiv.innerHTML = `                  
          <div class="cardProduct media align-items-lg-center flex-column flex-row p-3" id="card${productFake.id}" onclick="copiarInfo('card${productFake.id}')">
            <button class="media-body order-2 order-lg-1" id="btnCart${productFake.id}">
              <div class="card-info">
                <img src="${productFake.image}" alt="${productFake.title}" width="200" class="ml-lg-5 order-1 order-lg-2">
                <h3 class="text-title mt-0 font-weight-bold mb-2" id="cardName">${productFake.title}</h3>
                <p class="text-body">${productFake.description}</p>
              </div>
              <div class="card-footer">
              <p class="text-title">$
              <span class="text-title" id="cardPrice">${productFake.price}</span>
              </p>
                <div class="card-button">
                  <svg xmlns="http://www.w3.org/2000/svg" height="16" width="18" viewBox="0 0 576 512"><!--!Font Awesome Free 6.5.1 by @fontawesome - https://fontawesome.com License - https://fontawesome.com/license/free Copyright 2023 Fonticons, Inc.--><path d="M528.1 301.3l47.3-208C578.8 78.3 567.4 64 552 64H159.2l-9.2-44.8C147.8 8 137.9 0 126.5 0H24C10.7 0 0 10.7 0 24v16c0 13.3 10.7 24 24 24h69.9l70.2 343.4C147.3 417.1 136 435.2 136 456c0 30.9 25.1 56 56 56s56-25.1 56-56c0-15.7-6.4-29.8-16.8-40h209.6C430.4 426.2 424 440.3 424 456c0 30.9 25.1 56 56 56s56-25.1 56-56c0-22.2-12.9-41.3-31.6-50.4l5.5-24.3c3.4-15-8-29.3-23.4-29.3H218.1l-6.5-32h293.1c11.2 0 20.9-7.8 23.4-18.7z"/></svg>
                </div>
              </div>
            </button>
          </div>

        `;
        productsDiv.appendChild(productDiv);
        }); 
    })



    
