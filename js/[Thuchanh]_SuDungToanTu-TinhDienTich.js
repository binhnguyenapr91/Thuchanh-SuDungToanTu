function tinhDienTich() {

    let inputWidth;
    let inputHeight;
    let dientich;

    inputHeight = prompt("Nhap vao chieu cao:");
    inputWidth = prompt("Nhap vao chieu rong:");

    height = parseInt(inputHeight);
    width = parseInt(inputWidth);

    dientich = height*width;

    document.write("<br>Chieu cao la: " + height);
    document.write(" <br>Chieu rong la:" + width);
    document.write("<br>Dien tich la: " + dientich);
}