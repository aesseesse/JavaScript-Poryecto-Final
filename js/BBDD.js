

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
          <div class="card media align-items-lg-center flex-column flex-lg-row p-3" id="card${productFake.id}" onclick="copiarInfo('card${productFake.id}')">
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
                    <i class="fa-solid fa-cart-shopping"></i>
                  </div>
              </div>
            </button>
          </div>

        `;
        productsDiv.appendChild(productDiv);
        }); 
    })



    
