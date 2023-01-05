document.getElementById("showspc").style.display="none";

var giohang= new Array();

function addsp(x){
    var boxsp=x.parentElement.children;
    var image=boxsp[0].children[0].src;
    var namesp=boxsp[1].innerText;
    var giasp=boxsp[2].innerText;
    var soluong=boxsp[3].value;
    var sp=new Array(image,namesp,giasp,soluong);
giohang.push(sp);
console.log(giohang);
showcount();

    

//luu gio hang
localStorage.setItem("giohang",JSON.stringify(giohang));
}

function showcount(){
    document.getElementById("slcart").innerHTML=giohang.length;

}
var luugh=showmycart();
function showcart(){
   var y=document.getElementById("showspc");
    if(y.style.display=="block"){
       y.style.display="none"
    }else{
        y.style.display="block"
    }
    showmycart();
 
}

function showmycart(){
    var ttgh="";
    var tong=0;
    for (let i = 0; i< giohang.length; i++) {
       var tt=parseInt(giohang[i][2])*parseInt(giohang[i][3]);
       tong +=tt;
       ttgh+= '<tr>'+
       '<td>'+ (i + 1) +'</td>'+
       '<td><img src="'+giohang[i][0]+'" alt=""></td>'+
       '<td class="ss">'+ giohang[i][1] + '</td>'+
       '<td>'+giohang[i][2]+'</td>'+
       '<td>'+giohang[i][3]+'</td>'+
       '<td>'+
           '<div>'+tt+'</div>'+
       '</td>'+
       '</tr>';
        
    }
   ttgh+='<tr>'+
   '<th colspan="5">tong cong</th>'+
   '<th>'
       '<div>'+tt+'</div>'+
   '</th>'+
'</tr>';
document.getElementById("mycarts").innerHTML=ttgh;
}

function showgiohang_trangthanhtoan(){
var gh=localStorage.getItem("giohang");
var giohang=JSON.parse(gh);
var ttgh="";
var tong=0;
for (let i = 0; i< giohang.length; i++) {
    var tt=parseInt(giohang[i][2])*parseInt(giohang[i][3]);
    tong +=tt;
    ttgh+= '<tr>'+
    '<td>'+ (i + 1) +'</td>'+
    '<td><img src="'+giohang[i][0]+'" alt=""></td>'+
    '<td>'+ giohang[i][1] + '</td>'+
    '<td>'+giohang[i][2]+'</td>'+
    '<td>'+giohang[i][3]+'</td>'+
    '<td>'+
        '<div>'+tt+'</div>'+
    '</td>'+
    '</tr>';
     
 }
ttgh+='<tr>'+
'<th colspan="5">tong cong</th>'+
'<th>'
    '<div>'+tt+'</div>'+
'</th>'+
'</tr>';
document.getElementById("mycart").innerHTML=ttgh;
}

