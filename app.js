// var arr = [1,9,4,7,5,10];
// let arr_1 = arr.sort(function(a,b){
//     return a - b;
// });
// let arr_2 = arr_1.filter(function(num){
//     return num % 2 == 0;
// });
// console.log(arr_2);

// bài 2 cho biến x giá trị đầu chỉ có thể 0 hoặc 1
// nếu x=1 -> false, x=0 =>true
//nếu x=1 --> in ra0
// x =0--> in ra 1
// let x = prompt('Nhập số x')
// let obj ={
//     1: false,
//     0:true
// }
// return obj[x]
// test1(x)
// test2(x)
// function test1(x){
//     console.log(x == 0);
// }
// function test2(x){
//     console.log(1-x);
// }
let $yes = document.getElementById("yes")
let $no = document.getElementById("no");
let $answers = document.getElementById('answers')
$yes.onclick = function(){
    alert('Mai đi chơi nhá');
}
//ghi đè sự kiện onmouseenter
// $no.onmouseenter = function(){
//     alert('bbb')
// }

// thêm hàm xử lý sự kiện
$no.addEventListener('mouseenter',function(){
    $answers.classList.toggle('reverse')
});
// $no.removeEventListener('mouseenter');