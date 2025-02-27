document.addEventListener("DOMContentLoaded", () => {
  const productContainer = document.getElementById("product-container");

  //Fetch data from API
  fetch("https://dummyjson.com/products?limit=10")
      .then(response => response.json())
      .then(data => {
          data.products.forEach(product => {
            //Product Card
            const productCard = document.createElement("div");
            productCard.classList.add("product-card");

            //Product Detail
            productCard.innerHTML = `
                <img src="${product.thumbnail}" alt="${product.title}">
                <h3>${product.title}</h3>
                <p class="price">$ ${product.price}</p>
                <p class="rating">⭐ ${product.rating}</p>
                <button class="detail-btn">Lihat Detail</button>
                <div class="details hidden">
                    <p>${product.description}</p>
                </div>
              `;

            //Add Card to Container
            productContainer.appendChild(productCard);

            const detailBtn = productCard.querySelector(".detail-btn");
            const details = productCard.querySelector(".details");

            detailBtn.addEventListener("click", () => {
                details.classList.toggle("hidden"); // Toggle visibility
            });
        });
    })
    .catch(error => console.error("Gagal mengambil data:", error));
});
