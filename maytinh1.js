function tinh_cong() {
    var ketqua;
    var input = parseInt(document.getElementById('1').value);
    var input2 = parseInt(document.getElementById('2').value);
    ketqua = input + input2;
    alert(ketqua);
}

function tinh_tru() {
    var ketqua;
    var input = parseInt(document.getElementById('1').value);
    var input2 = parseInt(document.getElementById('2').value);
    ketqua = input - input2;
    alert(ketqua);
}

function tinh_nhan() {
    var ketqua;
    var input = parseInt(document.getElementById('1').value);
    var input2 = parseInt(document.getElementById('2').value);
    ketqua = input * input2;
    alert(ketqua);
}

function tinh_chia() {
    var ketqua;
    var input = parseInt(document.getElementById('1').value);
    var input2 = parseInt(document.getElementById('2').value);
    ketqua = input / input2;
    alert(ketqua);
}