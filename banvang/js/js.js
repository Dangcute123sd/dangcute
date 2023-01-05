var giohangg= new Array();
 const btn=document.querySelectorAll(".contain button")
btn.forEach(function(button,index){
button.addEventListener("click",function(event){
  var btnitem=event.target
  var product=btnitem.parentElement

  
   //var arrTemp = [];
   //x.push(pro);
   giohangg.push(pro);
  //console.log(img,name,gia)
   
   localStorage.setItem('card', JSON. stringify(giohangg));
  //  localStorage.setItem('card2', x);
  // var sds= localStorage.getItem('quatroi',JSON.stringify());
  
console.log("san pham: ", giohangg);

})
})
var x = [];
//document.getElementById("showsp").style.display="none"
function addcart(gia,img,name){
  var add=document.createElement("tr")
  var cartitem=document.querySelectorAll("#mycart tr")
  for(var i=0;i<cartitem.length;i++){
    var productt=document.querySelectorAll(".selet")
    if(productt[i].innerHTML== name){
      alert("Sản phẩm đã có trong giỏ hàng")
      return
    }
  }
  var trcontent='<tr><th><img src="'+img+'" alt=""></th> <th><span class="selet">'+name+'</span></th><th><span class="giajs">'+gia+'</span><sup>vnd</sup></th><th><input type="number" style="width:58%" value="1"></th><th><select name="" id=""> <option value="s">s</option><option value="m">M</option></select></th><th style="cursor:pointer;"><span class="delet">Xóa</span></th></tr>'
  add.innerHTML=trcontent
  var carttable=document.querySelector("#mycart")
  //console.log(carttable)
  carttable.append(add)
  carttotal()
  deletecart()
  var edd=document.querySelector("#slcart i")
    edd.innerHTML=cartitem.length
}
function carttotal(){
  var cartitem=document.querySelectorAll("#mycart tr")
  var totalc=0
  //console.log(cartitem.length)
  for(var i=0;i<cartitem.length;i++){
   var inputitem=cartitem[i].querySelector("input").value
   var productprice=cartitem[i].querySelector(".giajs").innerHTML
  totala=inputitem*productprice*1000
   //totalb=totala.toLocaleString('de-DE')
   //console.log(totala)
   totalc=totalc+totala
   //totald=totalc.toLocaleString('de-DE')
  }
  var totalghview=document.querySelector(".totalgh span")
totalghview.innerHTML=totalc.toLocaleString('de-DE')
  //console.log(totalghview)
  inputchange()
}
function deletecart(){
  var cartitem=document.querySelectorAll("#mycart tr")
  for(var i=0;i<cartitem.length;i++){
    var productdele=document.querySelectorAll(".delet")
    productdele[i].addEventListener("click",function(event){
      var cartdele=event.target
      var cartitems=cartdele.parentElement.parentElement
      cartitems.remove()
      carttotal()
    })
  }
}
function inputchange(){
  var cartitem=document.querySelectorAll("#mycart tr")
  for(var i=0;i<cartitem.length;i++){
    var inputs=cartitem[i].querySelector("input")
     inputs.addEventListener("change",function(){
      carttotal()
     })
  
  }
}


function showsp1(){
var gh=localStorage.getItem("card");
var giohangg=JSON.parse(gh);
console.log("sdsdsdsds",giohangg);
var ttghh="";
for(let i=0;i<giohangg.length;i++){
  ttghh+='<tr>'+
  '<th>'+ (i + 1) +'</th>'+
  '<th><img src="'+giohangg[i].img+'" alt=""></th>'+
  '<th><span class="selet">'+giohangg[i].name+'</span></th>'+
  '<th><span class="giajs">'+giohangg[i].gia+'</span><sup>vnd</sup></th>'+
  '</tr>';
}

document.getElementById("mycarts").innerHTML=ttghh;

}