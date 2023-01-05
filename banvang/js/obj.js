let productcart=[];
const parentElement=document.querySelector("#mycart");
const cartsum=document.querySelector("#slcart");
const products=document.querySelectorAll('.het');

function updateproduct(product){

}





products.forEach(product=>{
    product.addEventListener('click',(e)=>{
        if(e.target.classlist.contains('addtocart')){
            const productID=e.target.dataset.productId;
            console.log(productID);
            const productName=product.querySelector('.name').innerHTML;
            console.log(productName);
            const productGia=product.querySelector('.pricavl').innerHTML;
            console.log(productGia);
            const productImg=product.querySelector('img').src;
            console.log(productImg);
            let productTocart={
                name:productName,
                img:productImg,
                id:productID,
                gia:+productGia,
                count:1,
                baseprice:+productGia
            }
           updateproduct(productTocart);
           updateshoppinghtml();
        }
    });
})