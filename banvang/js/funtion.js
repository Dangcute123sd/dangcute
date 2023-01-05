var drink=taodoituong('image.https://aeonmall-binhduongcanary.com.vn/wp-content/uploads/2022/01/intro-1621538826.jpg','stabuck','200000','hà Nội');

var food=taodoituong('https://aeonmall-binhduongcanary.com.vn/wp-content/uploads/2022/01/intro-1621538826.jpg','banh','324000','hà Nội');



console.log(drink);
console.log(food);
console.log('gia gốc của nước: ' + drink.giagoc + ' giá gốc đồ ăn: ' + drink.tinhgiaban());




/*tạo ra đói tượng dựa vào thuộc tínhư
input:các thuộc tính
output :một dối tượng*/
function taodoituong(img,ten,giagoc,khuvuc){
var sanpham=new Object();
//tao thuoc tinh phuong thuc//
//b1 tạo gắn thuộc tính cho đối tượng//
sanpham.img=img;
sanpham.ten=ten;
sanpham.giagoc=giagoc;
sanpham.khuvuc=khuvuc;
//b2: viết phương thức//
sanpham.tinhgiaban=function(){
    var giaban=this.giagoc*1;

    return giaban;
}
return sanpham;
}


//tao danh sach mảng//
var danhsach=new Array();
var food=taodoituong('https://aeonmall-binhduongcanary.com.vn/wp-content/uploads/2022/01/intro-1621538826.jpg','banh','324000','hà Nội');
danhsach.push(food);

var drink=taodoituong('image.https://aeonmall-binhduongcanary.com.vn/wp-content/uploads/2022/01/intro-1621538826.jpg','stabuck','200000','hà Nội');
danhsach.push(drink);

console.log(danhsach);
//tạo dối tượng đưa vào danh sách//
//chạy vòng lặp//
for(var i=0;i<danhsach.length;i++){
   var sanphamvitri=danhsach[i];
   console.log('tên sản phẩm là: ' + sanphamvitri.ten + ' sản phẩm giá bán: ' + sanphamvitri.tinhgiaban());
}
