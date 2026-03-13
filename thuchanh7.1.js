function bai1(){
    let i = 100
    let f = 20.5
    let b = true
    let s = 'Hà Nội'

    document.write('i = ' + i)
    document.write('<br/>')
    document.write('f = ' + f)
    document.write('<br/>')
    document.write('b = ' + b)
    document.write('<br/>')
    document.write('s = ' + s)
    document.write('<br>')
    let width = 20
    let height = 10
    let area = width * height
    document.write('Area=' + area)
}
function bai2(){
let a = Number(prompt("Nhập số a:"));
let b = Number(prompt("Nhập số b:"));

if (a % b === 0) {
    alert(a + " là bội số của " + b);
} else {
    alert(a + " không phải là bội số của " + b);
}}

