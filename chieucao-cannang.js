function KiemTra() {
    let canNang = document.getElementById("cannang").value
    let chieuCao = document.getElementById("chieucao").value
    let bmi = canNang / (Math.pow(chieuCao, 2));
    let kiemtra= "";
    if (bmi < 15)
        ketQua = "Gầy độ 3"
    else if (bmi < 16)
        ketQua = "Gầy độ 2"
    else if (bmi < 17.5)
        ketQua = "Gầy độ 1"
    else if (bmi < 24)
        ketQua = "Bình Thường"
    else if (bmi < 30)
        ketQua = "Thừa cân"
    else if (bmi < 35)
        ketQua = "Béo phì độ 1"
    else if (bmi < 40)
        ketQua = "Béo phì độ 2"
    else
        ketQua = "Beo phì độ 3"
    document.getElementById("ketqua").innerHTML = "Chỉ số BMI của bạn là:" + bmi + "Bạn" + ketQua;
}