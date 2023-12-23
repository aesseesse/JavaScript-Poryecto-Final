

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
          <div class="card" id="card${productFake.id}" onclick="copiarInfo('card${productFake.id}')">
            <button id="btnCart${productFake.id}">
              <div class="card-info">
                <h3 class="text-title" id="cardName">${productFake.title}</h3>
                <p class="text-body">${productFake.description}</p>
              </div>
              <div class="card-footer">
                <span class="text-title" id="cardPrice"> ${productFake.price}</span>
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