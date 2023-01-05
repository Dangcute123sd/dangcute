var giohang=new Array();
const btns=document.querySelectorAll(".het .addtocart")
console.log(btns)
btns.forEach(function(button,index){
button.addEventListener("click",function(event){
    var btnitems=event.target
    var products=btnitems.parentElement
    var pros = {
      "img" : "",
      "name": "",
      "gia" : 0,
    };
    pros.imgs=products.querySelector(".anh img").src
    pros.names=products.querySelector(".name").innerText
    pros.gias=products.querySelector(".giatien span").innerHTML
    console.log("pro:sssss",pros)
    addcarts(pros.imgs,pros.names,pros.gias)
    giohang.push(pros);
    localStorage.setItem('card',JSON.stringify(giohang));
    console.log("san pham: ", giohang);
})

})
function addcarts(imgs,names,gias){
    var addd=document.createElement("tr")
    var cartitem=document.querySelectorAll("#mycart tr")
    for(var i=0;i<cartitem.length;i++){
        var productss=document.querySelectorAll(".selet")
        if(productss[i].innerHTML==names){
            alert("Sản phẩm đã có trong giỏ hàng")
            return
        }
    }
    var trcontents='<tr><th><img src="'+imgs+'" alt=""></th> <th><span class="selet">'+names+'</span></th><th><span class="giajss">'+gias+'</span><sup>vnd</sup></th><th><input type="number" style="width:58%" value="1"></th><th><select name="" id=""> <option value="s">s</option><option value="m">M</option></select></th><th style="cursor:pointer;"><span class="delet">Xóa</span></th></tr>'
     addd.innerHTML=trcontents
     var cartttablle=document.querySelector("#mycart")
     cartttablle.append(addd)
     var edds=document.querySelector("#slcart i")
     edds.innerHTML=cartitem.length
     deletecarts()
     totalcarts()

     
}

 function deletecarts(){
     var cartitems=document.querySelectorAll("#mycart tr")
     for(var i=0;i<cartitems.length;i++){
       var productdeles=document.querySelectorAll(".delet")
       productdeles[i].addEventListener("click",function(event){
         var cartdeles=event.target
         var cartitemss=cartdeles.parentElement.parentElement
         cartitemss.remove()
       totalcarts()
       })   
     }
   }
function totalcarts(){
 var cartitems=document.querySelectorAll("#mycart tr")
 var totcalc=0
 for(var i=0;i<cartitems.length;i++){
    var soluong=cartitems[i].querySelector("input").value
    console.log(soluong)
    var giatri=cartitems[i].querySelector(".giajss").innerHTML

console.log(giatri)    //console.log(giatri)
    totacla=soluong*giatri*1000
    console.log(totacla)
    totcalc=totcalc+totacla
 }
var view=document.querySelector(".totalgh span")
 view.innerHTML=totcalc.toLocaleString('de-DE')
 inputchanges()
}

function showcart(){
  var y=document.getElementById("showsp");
   if(y.style.right=="0%"){
      y.style.right="-1000%"
   }else{
       y.style.right="0%"
   }
}
  
  function inputchanges(){
    var cartitems=document.querySelectorAll("#mycart tr")
    for(var i=0;i<cartitems.length;i++){
      var inputss=cartitems[i].querySelector("input")
       inputss.addEventListener("change",function(){
        totalcarts()
       })
    
    }
  }

  function showsp2(){
    var gh=localStorage.getItem("card");
    var giohang=JSON.parse(gh);
    console.log("sdsdsdsds",giohang);
    var ttgh="";
    for(let i=0;i<giohang.length;i++){
      ttgh+='<tr>'+
      '<th>'+ (i + 1) +'</th>'+
      '<th><img src="'+giohang[i].imgs+'" alt=""></th>'+
      '<th><span class="selet">'+giohang[i].names+'</span></th>'+
      '<th><span class="giajs">'+giohang[i].gias+'</span><sup>vnd</sup></th>'+
      '</tr>';
    
     
    }
    
    document.getElementById("mycarts").innerHTML=ttgh;
  
    }
  