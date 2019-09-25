function setUpCart()
{
if (localStorage.cart == null)
{
	localStorage.cart = [];
}
}

function Product(name,price,quantity)
{
	this.name = name;
	this.price = price;
	this.quantity = quantity;
}	


function addProduct(name,price,quantity)
{
	testProduct = new Product(name,price,quantity);
	localStorage.testProduct = JSON.stringify(testProduct);
	console.log(testProduct);
}

function checkout()
{
	var buyProduct = JSON.parse(localStorage.testProduct);
	
	document.getElementById("checkoutN").innerHTML = "You Ordered: " + buyProduct.name;
	document.getElementById("checkoutP").innerHTML = "Price per unit: $" + buyProduct.price;
	document.getElementById("checkoutQ").innerHTML = "Quantity: " + buyProduct.quantity;
}
					

