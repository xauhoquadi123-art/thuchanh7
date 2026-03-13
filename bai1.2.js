document.querySelector("button").addEventListener("click",function (){
    let giatriC = document.querySelector("input").value;
    if (giatriC === "") {
        console.log("Vui lòng nhập độ C!");
        return;
    }
    let C = parseFloat(giatriC);
    let F = (C * 9 / 5) + 32;
     console.log(`Kết quả: ${C} độ C = ${F} độ F.`);
     alert(`Kết quả : ${C} độ C = ${F} độ F.`);

    let hiddenT1 = document.getElementById("hiddenT1")
    hiddenT1.innerHTML =`Kết quả: ${C} độ C = ${F} độ F.`;

});
// document.querySelector("button").addEventListener("click", function() {
//
//     // Lấy giá trị từ ô input
//     let giaTriC = document.querySelector("input").value;
//
//     // Kiểm tra xem người dùng đã nhập liệu chưa
//     if (giaTriC === "") {
//         console.log("Vui lòng nhập độ C!");
//         return;
//     }
//
//     // Chuyển kiểu chữ sang số thực và tính toán
//     let C = parseFloat(giaTriC);
//     let F = (C * 9 / 5) + 32;
//
//     // Hiển thị kết quả (bạn có thể thay console.log bằng alert để hiện popup)
//     console.log(`Kết quả: ${C} độ C = ${F} độ F.`);
//     // alert(`Kết quả: ${C} độ C = ${F} độ F.`);
// });