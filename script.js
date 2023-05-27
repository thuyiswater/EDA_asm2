function fetchProduct(productList){
    fetch('')
    .then(response => response.json())
    .catch(error => {
        console.error('Error:', error);
    });
}

function displayProduct(productList) {
    const list = document.querySelector('.product-list');

    const listHeader = document.createElement('tr');
    listHeader.innerHTML = `
    <th>Name</th>
    <th>Sale Price</th>
    <th>Cost</th>
    <th>Product Category</th>
    <th>Product Type</th>
    <th>Quantity On Hand</th>
    <th>Forecasts Quantity</th>
    <th>Unit of Measure</th>
    `;
    list.appendChild(listHeader);
}

function addProduct(newProduct) {
    fetch('', {
        method: "post",
        headers: {
            'Content-Type': 'application/json'
        },
        body: JSON.stringify(newProduct)
    })
    .then(response => {
        if (response.ok) {
            document.querySelector('.success-message').textContent = 'Product added successfully!';
        } else {
            document.querySelector('.error-message').textContent = 'Error adding new product. Please try again.';
        }
    }).then(json => {
            console.log(json)
        })
    .catch(error => {
        console.log(error);
        document.querySelector('.error-message').textContent = 'An error occurred. Please try again later.';
    });
}

function editProduct(editProduct){
    fetch(`/${productId}`, {
        method: "PUT",
        headers: {
            'Content-Type': 'application/json'
        },
        body: JSON.stringify(updatedProduct)
    })
    .then(response => {
        if (response.ok) {
            document.querySelector('.success-message').textContent = 'Product updated successfully!';
        } else {
            document.querySelector('.error-message').textContent = 'Error updating product. Please try again.';
        }
    })
    .catch(error => {
        console.log(error);
        document.querySelector('.error-message').textContent = 'An error occurred. Please try again later.';
    });
}

function deleteProduct(productId, event){
    event.preventDefault();
    fetch(``, {
        method: "DELETE",
    })
    .then(response => {
        if (response.ok) {
            document.querySelector('.success-message').textContent = 'Product deleted successfully!';
        } else {
            document.querySelector('.error-message').textContent = 'Error deleting product. Please try again.';
        }
    })
    .catch(error => {
        console.log(error);
        document.querySelector('.error-message').textContent = 'An error occurred. Please try again later.';
    });
}
