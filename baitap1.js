function bai1() {
let a = parseFloat(prompt("nhập điểm môm vật lý:"));
let b = parseFloat(prompt("nhập điểm môn hóa học:"));
let c = parseFloat(prompt("nhập điểm môn sinh học"));
let tongdiem  = a + b +c
alert("tongdiem" + tongdiem)
let trungbinh = tongdiem / 3
alert("trungbinh" + trungbinh);

}
function bai2() {
let r = parseFloat(prompt("nhập khoảng cách từ tâm đến đường tròn"));
let dientichhinhtron = Math.PI * (r*r)
    alert("dientichhinhtron" + dientichhinhtron)
}
function bai3() {
    let chuvi;
    let luachon = prompt("Bạn muốn nhập bán kính (nhập 1) hay đường kính (nhập 2)?");
    if (luachon === "1"){
let r = parseFloat(prompt("nhập bán kính hình tròn"));
     chuvi = r * 2 * Math.PI;}
    else if (luachon === "2"){
let d = parseFloat(prompt("nhập đường kính hình tròn"));
    chuvi = d * Math.PI;}
    else {
        alert("lựa chọn không hợp lệ!");
        return;}
        alert("chu vi hình tròn là:" + chuvi);
}