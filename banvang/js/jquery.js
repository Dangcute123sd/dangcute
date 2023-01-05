// jquery
/*
var listProducts = [
    {
        "id":1,
        "name":"Cá hồi nấu rượu",
        "mota":"  Dùng cá hồi chưng với rượu",
        "gia":"500.000",
        "unit":"vnd",
        "image":"../banvang/img/product_1.png",
        "sao":"../banvang/img/star.png",
        "tittle":"Cá hồi nấu rượu",
        "data-aos":"fade-down-left"

    }, {
        "id":2,
        "name":"Trứng hoàng kim",
        "mota":"Trứng luộc với lá trà ngon",
        "gia":"500.000",
        "unit":"vnd",
        "image":"../banvang/img/product_2.png",
        "sao":"../banvang/img/star.png"
    }, {
        "id":3,
        "name":"Salad Trứng",
        "mota":"Salad cho sức khỏe",
        "gia":"500.000",
        "unit":"vnd",
        "image":"../banvang/img/product_3.png",
        "sao":"../banvang/img/star.png"
    }, {
        "id":4,
        "name":"Hambogo",
        "mota":"hambo với thịt bò",
        "gia":"500.000",
        "unit":"vnd",
        "image":"../banvang/img/product_4.png",
        "sao":"../banvang/img/star.png"
    }, {
        "id":5,
        "name":"Bánh Kếp",
        "mota":"bánh kếp với thịt",
        "gia":"500.000",
        "unit":"vnd",
        "image":"../banvang/img/product_5.png",
        "sao":"../banvang/img/star.png"
    }, {
        "id":6,
        "name":"Cá hồi sốt",
        "mota":"Thơm ngon lành",
        "gia":"500.000",
        "unit":"vnd",
        "image":"../banvang/img/product_6.png",
        "sao":"../banvang/img/star.png"
    }
];

function setInfoProduct(productDetail){
    var element=` <a href="./foods.html">
        <div class="itemcate" id="itemcateid" title="${productDetail.tittle}" data-aos="fade-down-right"  data-aos-duration="1000">
        <div class="anh">
            <img src="${productDetail.image}" alt="">
         </div>
         <div class="sao">
           <span>
            <img src="${productDetail.sao}" alt="">
           </span>
           <span>
            <img src="${productDetail.sao}" alt="">
           </span>
           <span>
            <img src="${productDetail.sao}" alt="">
           </span>
           <span>
            <img src="${productDetail.sao}" alt="">
           </span>
           <span>
            <img src="${productDetail.sao}" alt="">
           </span>
         </div>
         <div class="name">
            <a href="">
              ${productDetail.name}
            </a>
         </div>
         <div class="mota">
            <a href="">
            ${productDetail.mota}
        </a>
         </div>
         <div class="gia">
            <a href="">
             ${productDetail.gia} <sup>${productDetail.unit}</sup>
            </a>
         </div>
    </div>
</a>`;

    setHtml(element);
}
function setHtml(html){
    $("#listid").append(html);
}

function setListProduct(array){
    for(var i = 0; i < array.length ; i++){
        setInfoProduct(array[i]);
    }
}
$(document).ready(function(){
    setListProduct(listProducts);
})
*/





function addProductOrder(number){
    var num = parseInt($(".btn-item-" + number).siblings(".item-quality").attr("data-quality"));
    console.log("so luong hien tai: ",num);
    num=num+1;
    $(".btn-item-" +number).siblings(".item-quality").attr("data-quality",num);
    console.log("so luong sau khi tang:", num);
    $(".btn-item-" + number).siblings(".item-quality").text(num);
  
    var pricetemp=$(".btn-item-" + number).siblings(".item-quality").attr("data-price");
    var price=parseInt(pricetemp);
    var total=$("#sum").attr("data-sum");
    var sum=parseInt(total)+price;
    var viewSum = sum.toLocaleString('it-IT', {style : 'currency', currency : 'VND'}) //chuyen tien thanh vnd
    $("#sum").attr("data-sum", sum);
    $("#sum").text(viewSum);
  
  }

  function subProductOrder(number){
    var num=parseInt($(".btn-item-" + number).siblings(".item-quality").attr("data-quality"));
    console.log("so luong hien tai:",num);
    num= num - 1;
    if(num < 0){
        alert("so luong khong cho phep");
    }else{
        $(".btn-item-" +number).siblings(".item-quality").attr("data-quality",num);
        console.log("so luong hien tai la:",num);
        $(".btn-item-" +number).siblings(".item-quality").text(num);
       
        var pricetemp=$(".btn-item-"+number).siblings(".item-quality").attr("data-price");
        var price=parseInt(pricetemp);
        var pricetemp=$(".btn-item-"+number).siblings(".item-quality").attr("data-price");
        var price=parseInt(pricetemp);
        var total=$("#sum").attr("data-sum");
        var sum=parseInt(total)-price;
        var viewSum = sum.toLocaleString('it-IT', {style : 'currency', currency : 'VND'}) //chuyen tien thanh vnd
        $("#sum").attr("data-sum", sum);
        $("#sum").text(viewSum);
    }

  }
   
   var mycard=new Array();
    $(".itemcf").on("click",".i", function(){  
      var cuzz=$(this).parent();
      var namesp=cuzz.children("p").eq(0).text();
      var giasp=cuzz.children("span").eq(0).text();
      var sl=1;
      for (let i =0; i < mycard.length; i++) { 
        if(mycard[i][0]==namesp){
            sl=mycard[i][2] + 1;
            mycard[i][2]=sl;
            break;
        }
    }
            if(sl==1){
                var item=new Array(namesp,giasp,sl);   
                mycard.push(item);
            }
        
    
    
      var item=new Array(namesp,giasp,sl);   
      mycard.push(item);
      console.log(mycard);
      var count=mycard.length;
      $(".cart").text(count);
      showcart();
      showtotal();
    });
    
    function showcart(){
        var str="";
        for (let i =0; i < mycard.length; i++) {           
         str+="<tr><td>"+ mycard[i][0] +"</td>"+
         "<tr><td>"+ mycard[i][1] +"</td>"+
         "<td>"+ mycard[i][2] +"</td></tr>";
        }
        $(".cartshow").html(str);
    }
    function showtotal(){
        var total=0;
        for (let i =0; i < mycard.length; i++) {           
            total+=parseFloat(mycard[i][1])*parseInt(mycard[i][2]);
           }
           $(".total").text(total);
         
    }
 // jquery
/*
var listProducts = [
    {
        "id":1,
        "name":"Cá hồi nấu rượu",
        "mota":"  Dùng cá hồi chưng với rượu",
        "gia":"500.000",
        "unit":"vnd",
        "image":"../banvang/img/product_1.png",
        "sao":"../banvang/img/star.png",
        "tittle":"Cá hồi nấu rượu"

    }, {
        "id":2,
        "name":"Trứng hoàng kim",
        "mota":"Trứng luộc với lá trà ngon",
        "gia":"500.000",
        "unit":"vnd",
        "image":"../banvang/img/product_2.png",
        "sao":"../banvang/img/star.png"
    }, {
        "id":3,
        "name":"Salad Trứng",
        "mota":"Salad cho sức khỏe",
        "gia":"500.000",
        "unit":"vnd",
        "image":"../banvang/img/product_3.png",
        "sao":"../banvang/img/star.png"
    }, {
        "id":4,
        "name":"Hambogo",
        "mota":"hambo với thịt bò",
        "gia":"500.000",
        "unit":"vnd",
        "image":"../banvang/img/product_4.png",
        "sao":"../banvang/img/star.png"
    }, {
        "id":5,
        "name":"Bánh Kếp",
        "mota":"bánh kếp với thịt",
        "gia":"500.000",
        "unit":"vnd",
        "image":"../banvang/img/product_5.png",
        "sao":"../banvang/img/star.png"
    }, {
        "id":6,
        "name":"Cá hồi sốt",
        "mota":"Thơm ngon lành",
        "gia":"500.000",
        "unit":"vnd",
        "image":"../banvang/img/product_6.png",
        "sao":"../banvang/img/star.png"
    }
];

function setInfoProduct(productDetail){
    var element=`  <div class="product-order d-flex" id="product-no-1">
    <div class="oder-img">
        <img src="${productDetail.image}" alt="">
    </div>
    <div class="order-infor">
        <div class="item-title">
            <h6>${productDetail.name}</h6>
        </div>
        <div class="item-type">
            <p>
                <span class="item-color">bac-den</span>
                <span> / </span>
                <span class="item-width"> 90/105 </span>
            </p>
        </div>
        <div class="item-number">
            <div class="d-flex item-cal">
               <div class="btn-sub" onclick="subProductOrder(1)">
                    - 
               </div>
               <div class="item-quality" data-price="${productDetail.gia}" data-quality="1">
                    1
               </div>
               <div class="btn-add btn-item-${productDetail.id}" onclick="addProductOrder(1)">
                    + 
               </div>
            </div>
        </div>

        <div class="item-action">
            <button type="button" onclick="deleteProductOrder(1)"> Xóa </button>
        </div>
    </div>

    <div class="order-price">
        <div>
            <h6 class="price">${productDetail.gia}<sup>${productDetail.unit}</sup></h6>
        </div>
    </div>
</div>`;

    setHtml(element);
}
function setHtml(html){
    $("#listbody").append(html);
}

function setListProduct(array){
    for(var i = 0; i < array.length ; i++){
        setInfoProduct(array[i]);
    }
}
$(document).ready(function(){
    setListProduct(listProducts);
})*/

