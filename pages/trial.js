
import './trial.css';


function Trial() {
    function displayProduct(imageUrl, name, description) {
        var container = document.getElementById("product-container");
        
        var product = document.createElement("div");
        product.className = "product";
        
        var image = document.createElement("img");
        image.className = "product-image";
        image.src = imageUrl;
        
        var details = document.createElement("div");
        details.className = "product-details";
        
        var productName = document.createElement("h3");
        productName.textContent = name;
        
        var productDescription = document.createElement("p");
        productDescription.textContent = description;
        
        details.appendChild(productName);
        details.appendChild(productDescription);
        
        product.appendChild(image);
        product.appendChild(details);
        
        container.appendChild(product);
    }
    displayProduct("image1.jpg", "Product 1", "Description 1");
  return (
   <>
  <div id="product-container">
    
  </div>
  
    
    </>
  );
}

export default Trial;
