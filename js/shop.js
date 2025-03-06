// Using Fetch API to get product data
fetch('https://fakestoreapi.com/products')
    .then(response => response.json())
    .then(data => {
        const productGrid = document.querySelector('.product-grid');
        data.forEach(product => {
            const productCard = document.createElement('div');
            productCard.classList.add('product-card');

            const productImage = document.createElement('img');
            productImage.src = product.image;
            productCard.appendChild(productImage);

            const productTitle = document.createElement('h2');
            productTitle.textContent = product.title;
            productCard.appendChild(productTitle);

            const productDescription = document.createElement('p');
            productDescription.textContent = product.description;
            productCard.appendChild(productDescription);

            const productPrice = document.createElement('p');
            productPrice.textContent = `$${product.price}`;
            productCard.appendChild(productPrice);

            const addButton = document.createElement('button');
            addButton.textContent = 'Add to Cart';
            productCard.appendChild(addButton);

            productGrid.appendChild(productCard);
        });
    })
    .catch(error => console.error(error));