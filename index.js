window.onscroll = function() {
  var navbar = document.querySelector('.navbar');
  if (window.scrollY >= 50) {
    navbar.classList.add('sticky');
  } else {
    navbar.classList.remove('sticky');
  }
};

//Banner
let returnedData; // Lưu trữ dữ liệu ở mức toàn cục

function loadJsonFromFile() {
  fetch("data/banner.json")
    .then(function (res) {
      if (!res.ok) {
        throw new Error("Error: " + res.statusText);
      }
      return res.json();
    })
    .then(function (data) {
      returnedData = data;
      let htmlContent = "";
      returnedData.forEach((p, index) => {
        htmlContent += `<img src="img/${p.src}" alt="${p.alt}" style="display:${index === 0 ? 'block' : 'none'};"/><br/>`;
      });

      document.getElementById("banner").innerHTML = htmlContent;
    })
    .catch(function (err) {
      console.error(err.message);
    });
}

function changeBanner(id) {
  if (returnedData && returnedData.length > 0) {
    const selectedImage = returnedData.find(image => image.id === id);

    if (selectedImage) {
      document.querySelectorAll('.banner img').forEach(img => img.style.display = 'none');
      const selectedImageElement = document.querySelector(`#banner img[src="img/${selectedImage.src}"]`);
      if (selectedImageElement) {
        selectedImageElement.style.display = 'block';
      }
    } else {
      console.error(`Image with ID ${id} not found.`);
    }
  } else {
    console.error('No data available to change banner.');
  }
}
loadJsonFromFile();

//Sản phẩm
function loadJson(){
  fetch("data/product.json").
  then(function(res){
      if(!res.ok){
          throw new Error("Error: " + res.statusText);
      }
      return res.json();
  })
  .then(function(returproduct){
      let htmlContent="";
      returproduct.forEach(p => {
          htmlContent += `
          <div class="product" onclick="">          
          <img src="img/${p.pThumb}" width="190px" />
          <hr>
          <p class="name">${p.pName}</p> 
          <p class="price">${p.pPrice} VNĐ</p>
          </div>`;
      })
  // .then(function(trangsanpham){
  //   let spdetail="";
  //   let spimage="";
  //   trangsanpham.forEach(p => {
  //     spdetail= `
  //     <div class="sp-detail">
  //     <p class="name">${p.pName}</p> 
  //     <p class="price">${p.pPrice} VNĐ</p><br>
  //     <p class="desc">${p.pDesc}</p>
  //     </div>
  //     `
  //     spimage= `<img src="img/${p.pThumb}" width="320px"/>`
  //   })
  // })
      // document.getElementById("image").innerHTML = spimage;
      // document.getElementById("content-sp").innerHTML = spdetail;
      document.getElementById("content").innerHTML = htmlContent;
  })
  .catch(function(err){
      console.log(err.message);
  })
}

loadJson()