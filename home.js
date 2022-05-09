


var products_data=[
  {
   img: "https://d1z88p83zuviay.cloudfront.net/ProductVariantThumbnailImages/c390252e-4bdb-4292-95fe-9e6ffdca0813_425x425.jpg",
  time: "DELIVERY IN 90 MINUTES",
  name: "Rajma Chitra Organic - Organic Tattva",
  price: "159",
  productID: "t1",
 
},
{
img:"https://d1z88p83zuviay.cloudfront.net/ProductVariantThumbnailImages/533198a2-a76d-4cbd-89c3-a418e8bd6233_425x425.jpg",
time:"DELIVERY IN 90 MINUTES",
name:"HAAGEN DAZS CHOC CHOCO ALMD BAR 80ml ",
price:"874",
productID:"t2",
},

{
img:"https://d1z88p83zuviay.cloudfront.net/ProductVariantThumbnailImages/2acf5565-d839-4eb3-808b-62835cfb03b9_425x425.jpg",
time:"DELIVERY IN 90 MINUTES",
name:"RITE BITE MAX PRO DAILY CHOALM 300G",
price:"433",
productID:"t3",
},
{
img:"https://d1z88p83zuviay.cloudfront.net/ProductVariantThumbnailImages/4ce1d47a-6da4-4ae5-9a87-e415e01eec74_425x425.jpg",
time:"DELIVERY IN 90 MINUTES",
name:"BETTY CROCKER BUTTRMILK PANCAKE MIX..",
price:"890",
productID:"t4",
},
{
img:"https://d1z88p83zuviay.cloudfront.net/ProductVariantThumbnailImages/1759879d-52d4-4919-9364-20cedfd41da2_425x425.jpg",
time:"DELIVERY IN 90 MINUTES",
name:"BETTY CROCKER FRNCH VNLA CAKE MIX 5..",
price:"79",
productID:"t5",
},
{
img:"https://d1z88p83zuviay.cloudfront.net/ProductVariantThumbnailImages/17d6b165-a222-4e0e-9d2e-20c34236e277_425x425.jpg",
time:"DELIVERY IN 90 MINUTES",
name:"HA TAPIOCA FLOUR 400G",
price:"878",
productID:"t6",
},
{
img:"https://d1z88p83zuviay.cloudfront.net/ProductVariantThumbnailImages/97e020df-acc1-4b42-bc2c-40160bacf0c0_425x425.jpg",
time:"DELIVERY IN 90 MINUTES",
name:"KW MAGNUM CHOCOTRFFLE STICK 80Ml",
price:"45",
productID:"t7",
},
{
img:"https://d1z88p83zuviay.cloudfront.net/ProductVariantThumbnailImages/c14f4343-335e-42d6-84bc-7d2e412d6660_425x425.jpg",
time:"DELIVERY IN 90 MINUTES",
name:"RAY SPRAY OIL JAR 200Ml",
price:"456",
productID:"t8",
},
{
img:"https://d1z88p83zuviay.cloudfront.net/ProductVariantThumbnailImages/17d6b165-a222-4e0e-9d2e-20c34236e277_425x425.jpg",
time:"DELIVERY IN 90 MINUTES",
name:"HA TAPIOCA FLOUR 400G",
price:"90",
productID:"t9",
},
{
img:"https://d1z88p83zuviay.cloudfront.net/ProductVariantThumbnailImages/ea67eb11-2629-4772-9147-a6ee2ab63d3c_425x425.jpg",
time:"DELIVERY IN 90 MINUTES",
name:"ZORABIAN CHI COCKTAIL BBQ SAUSAGES",
price:"456",
productID:"q1",
},
{
img:"https://d1z88p83zuviay.cloudfront.net/ProductVariantThumbnailImages/b2afe385-4b55-4b7c-bdee-bbef03eb1d7b_425x425.jpg",
time:"DELIVERY IN 90 MINUTES",
name:"BORGES NATURA RICE & ALMOND DRINK 1l",
price:"878",
productID:"q2",
},
{
img:"https://d1z88p83zuviay.cloudfront.net/ProductVariantThumbnailImages/d3b35d52-94ac-4800-86d8-301c6bed1fda_425x425.jpg",
time:"DELIVERY IN 90 MINUTES",
name:"ZORABIAN CHICKEN NUGGETS 250G",
price:"890",
productID:"q3",
},

{
img:"https://d1z88p83zuviay.cloudfront.net/ProductVariantThumbnailImages/216def31-a261-4435-8ece-4476d0689869_425x425.jpg",
time:"DELIVERY IN 90 MINUTES",
name:"RRO SOUR CREAM 200G",
price:"433",
productID:"q4",
},
]
localStorage.setItem("masai-ecom",JSON.stringify(products_data));
var products=document.querySelector(".products");

var cartLSData=JSON.parse(localStorage.getItem("masai-cart")) ||[];
function display(data){
    products.innerHTML=null;

    data.forEach(function(element){
      var card=document.createElement("div");
      var img=document.createElement("img");
      img.src=element.img;
      var title=document.createElement("p");
      title.textContent=element.time;
      var name=document.createElement("h3");
      name.textContent=element.name;
      var price=document.createElement("h4");
      price.textContent=element.price;
      
      var button=document.createElement("button");
      button.innerText="Add";
      button.addEventListener("click",function(){
          Add(element);
      });

      card.append(img,title,name,price,button);
       

        products.append(card);
    })
}
display(products_data);

function Add(element){
    console.log(element)
    cartLSData.push(element);
    localStorage.setItem("masai-cart",JSON.stringify(cartLSData));
    alert("Product added successfully");
}










let slidePosition = 0;
const slides = document.getElementsByClassName('carousel__item');
const totalSlides = slides.length;

document.
getElementById('carousel__button--next')
.addEventListener("click", function() {
  moveToNextSlide();
});
document.
getElementById('carousel__button--prev')
.addEventListener("click", function() {
  moveToPrevSlide();
});

function updateSlidePosition() {
for (let slide of slides) {
  slide.classList.remove('carousel__item--visible');
  slide.classList.add('carousel__item--hidden');
}

slides[slidePosition].classList.add('carousel__item--visible');
}

function moveToNextSlide() {
if (slidePosition === totalSlides - 1) {
  slidePosition = 0;
} else {
  slidePosition++;
}

updateSlidePosition();
}

function moveToPrevSlide() {
if (slidePosition === 0) {
  slidePosition = totalSlides - 1;
} else {
  slidePosition--;
}

updateSlidePosition();
}



var form =document.querySelector("form");
var userdata=JSON.parse(localStorage.getItem("userdata"));

form.addEventListener("submit",function(event){
  event.preventDefault();
  var data={
  email:form.email.value,
  password:form.password.value
  };

if(userdata === null){
    alert("Please create an account");
}else if(userdata.email==data.email && userdata.password==data.password){
    alert("Sign in Successfull");
    localStorage.setItem("signin",JSON.stringify("userdata"));
    window.location.href="home.html"

}else{
    alert("User doesn't Exist");
}


})


