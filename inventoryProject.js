const inventory  = [
]

function Product (productName, productCategory, price, quantity, id){
    //if u use the throw new error you need to use to try and catch
    if(typeof productName !== 'string' || productName.trim() === '') {
        throw new Error ('product name is invalid')
    }
    if(typeof productCategory !== 'string' || productCategory.trim() === '') {
        throw new Error ('product category is invalid')
    }
    if(typeof price !== 'number' || price<= 0) {
        throw new Error ('must be positive number or not less than 0')
    } 
      if(typeof quantity !== 'number' || quantity < 0 || !Number.isInteger(quantity)) {
       throw new Error  ('must be positive number or not less than 0')
    } 
      if(typeof id !== 'number' || id<=0 || !Number.isInteger(id)) {
        throw new Error ('must be positive number or not less than 0')
    } 

    this.productName = productName;
    this.productCategory = productCategory;
    this.price = price;
    this.quantity = quantity;
    this.id = id;

    /*
    inventory.push({
        productName: this.productName,
        productCategory: this.productCategory,
        price: this.price,
        quantity: this.quantity,
        id: this.id
    })

    use this if you are pushing of things you want only to be pushed into the array
        */

    inventory.push(this)
}

//a function that creates a product with a try and catch to detect validity is also refers to the constructor so it pushes to the constructor
function createProduct(productName, productCategory, price, quantity, id) {
    try {
        const product = new Product(productName, productCategory, price, quantity, id);
        console.log('Product created successfully!');
        return product;
    } catch (error) {
        console.log('Error:', error.message);
        return null; // or return { error: error.message }
    }
}


const Shoes = new createProduct('Shoes', 'Dry Goods', 30.00, 100, 3210)
console.log(inventory)

function showProduct (){
    // the length cant be negative. so it should be equals to zero
   if(inventory.length === 0){
    console.log('You have no products')
   } else{
    for(let products of inventory){
        console.log(`Product Name: ${products.productName}`);
        console.log(`Product Category: ${products.productCategory}`)
        console.log(`Price: ${products.price}`)
        console.log(`Quantity: ${products.quantity}`)
        console.log(`ID: ${products.id}`)
    }
   }
}

function findIdProd(productId){

    const found = inventory.find(product => product.id === productId)
    return found ? found : "product not found"
}


    function restockProduct (productId, quantityAdd){
        const theProduct = findIdProd(productId)

        if(typeof theProduct === 'string'){
            return theProduct;
        }
        if(quantityAdd<= 0 || !Number.isInteger(quantityAdd)){
            return 'invalid quantity must be positive number and greater than zero'
        }

        theProduct.quantity += quantityAdd
    }

    function sellProduct(productId, quantityToSell){
        const product = findIdProd(productId)
        
        if (typeof product === 'string'){
            return product
        }

        if(quantityToSell <= 0 || !Number.isInteger(quantityToSell)){
            return 'quantity must be greater than zero or a positive number'
        }

        if(quantityToSell > product.quantity){
            return `Only ${product.quantity} items available`
        }

        product.quantity -= quantityToSell
        return `Sold! Remaining quantity: ${product.quantity}`

    }
    function updateProduct(productId, updateProd){
        const product = findIdProd(productId)
        
        if(typeof product === 'string'){
            return product
        }

        for (let productKey in updateProd){
            // the includes() method is checking if the value is existing, in the array below are the value that is acceptable.
            if (!['productName', 'productCategory', 'price', 'quantity'].includes(productKey)){
                return `Cannot update field: ${field}`;
            }

            if(productKey === 'productName' || productKey === 'productCategory'){
                if (typeof updateProd[productKey] !== 'string' || updateProd[productKey].trim() === ''){
                     return `Invalid ${field}: must be non-empty string`;
                }
            }

             if (productKey === 'price') {
            if (typeof updateProd[productKey] !== 'number' || updateProd[productKey] <= 0) {
                return `Invalid price: must be positive number`;
            }
            }
        
            if (productKey === 'quantity') {
                if (!Number.isInteger(updateProd[productKey]) || updateProd[productKey] < 0) {
                    return `Invalid quantity: must be non-negative integer`;
                }
            }
            
        product[productKey] = updateProd[productKey];
    }
    
    return 'Product updated successfully';
}

function searchProduct(search, category ){
    const results = [

    ]

    if(!search && !category){
        return inventory
    }

    for (let product of inventory){
        // set the values to true
        let mactchSeacrh = true;
        let matchesCat = true;

        if (search){
            // the value will turn false if the condiiton is not met. 
            mactchSeacrh = product.productName.toLowerCase().includes(search.toLowerCase())
        }
        if(category){
            matchesCat = product.productCategory.toLowerCase() === category.toLowerCase()
        }

        if(mactchSeacrh && matchesCat){
            results.push(product)
        }
    }
}

    console.log(sellProduct(3210, 5))