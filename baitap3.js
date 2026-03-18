function tinhtoan(pheptinh) {
let thunhat = parseFloat(document.getElementById("thunhat").value);
let thuhai = parseFloat(document.getElementById("thuhai").value);
if (isNaN(thunhat) || isNaN(thuhai))
{document.getElementById('ketqua').innerText = "Vui lòng nhập cả hai số!";
document.getElementById('ketqua').style.color = "orange";
return}
let ketqua = 0
if (pheptinh === "cong"){ ketqua = thunhat + thuhai;}
else if ( pheptinh === "tru"){ ketqua = thunhat - thuhai;}
document.getElementById('ketqua').innerText = ketqua;}