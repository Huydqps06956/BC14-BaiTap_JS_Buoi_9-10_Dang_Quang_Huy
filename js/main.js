document.getElementById("btnThemNV").addEventListener("click", themNhanVien);
document.getElementById("btnCapNhat").addEventListener("click", capNhatNhanVien);
document.getElementById("tableDanhSach").addEventListener("click", delegationTable);
document.getElementById("btnTimNV").addEventListener("click",timKiemNhanVien)
var qlnv = new QuanLyNhanVien();
qlnv.khoiTao();
hienThi(qlnv.dsnv);


function themNhanVien() {
    var taiKhoan =  document.getElementById("tknv").value;
    var hoTen = document.getElementById("name").value;
    var email = document.getElementById("email").value;
    var matKhau = document.getElementById("password").value;
    var ngayLam = document.getElementById("datepicker").value;
    var luongCB = +document.getElementById("luongCB").value;
    var chucVu =  document.getElementById("chucvu").value;
    var gioLam = document.getElementById("gioLam").value;

  
    var nhanVien = new NhanVien(
      taiKhoan,
      hoTen,
      email,
      matKhau,
      ngayLam,
      luongCB,
      chucVu,
      gioLam,
    );
  
    var isValid = xacThucDuLieu(nhanVien)
  
    if(!isValid) {
      return
    }
  
    qlnv.themNhanVien(nhanVien);
    hienThi(qlnv.dsnv);
    resetForm();
  }
  function capNhatNhanVien() {
    var taiKhoan =  document.getElementById("tknv").value;
    var hoTen = document.getElementById("name").value;
    var email = document.getElementById("email").value;
    var matKhau = document.getElementById("password").value;
    var ngayLam = document.getElementById("datepicker").value;
    var luongCB = +document.getElementById("luongCB").value;
    var chucVu =  document.getElementById("chucvu").value;
    var gioLam = document.getElementById("gioLam").value;
  
    var nhanVien = new NhanVien(
        taiKhoan,
        hoTen,
        email,
        matKhau,
        ngayLam,
        luongCB,
        chucVu,
        gioLam,
    );
  
    var isValid = xacThucDuLieu(nhanVien)
  
    if(!isValid) {
      return
    }
  
    qlnv.capNhatNhanVien(nhanVien);
    hienThi(qlnv.dsnv);
    resetForm();
  }
  function delegationTable(event) {
    console.log(event.target);
    var taiKhoan = event.target.getAttribute("data-taikhoan");
    var action = event.target.getAttribute("data-action");
  
    if (action === "select") {
      chonNhanVien(taiKhoan);
    }
  
    if (action === "delete") {
      xoaNhanVien(taiKhoan);
    }
  }
  function chonNhanVien(taiKhoan) {
    var nhanVien = qlnv.chonNhanVien(taiKhoan);
    document.getElementById("tknv").disabled = true;
  
    updateForm(nhanVien);
  }
  function xoaNhanVien(taiKhoan) {
    qlnv.xoaNhanVien(taiKhoan);
    hienThi(qlnv.dsnv);
  } 
function hienThi(dsnv) {
    var tbody = document.getElementById("tableDanhSach");
    var html = "";
    for (var i = 0; i < dsnv.length; i += 1) {
      var nv = dsnv[i];
      html += `
        <tr>
          <td>${nv.taiKhoan}</td>
          <td>${nv.hoTen}</td>
          <td>${nv.email}</td>
          <td>${nv.ngayLam}</td>
          <td>${nv.chucVu}</td>
          <td>${nv.tinhLuong().toFixed()}</td>
          <td>${nv.xepLoai()}</td>
          <td>
            <button class="btn btn-primary" data-toggle="modal"
            data-target="#myModal" data-action="select" data-taikhoan="${
              nv.taiKhoan
            }">Update</button>
            <button class="btn btn-danger" data-action="delete" data-taikhoan="${
              nv.taiKhoan
            }">Delete</button>
          </td>
        </tr>
      `;
    }
  
    tbody.innerHTML = html;
  }
function resetForm() {
    updateForm({});
    document.getElementById("tknv").disabled = false;
  }
function updateForm(nhanVien) {
    document.getElementById("tknv").value = nhanVien.taiKhoan || "";
    document.getElementById("name").value = nhanVien.hoTen || "";
    document.getElementById("email").value = nhanVien.email || "";
    document.getElementById("password").value = nhanVien.matKhau || "";
    document.getElementById("datepicker").value = nhanVien.ngayLam || "";
    document.getElementById("luongCB").value = nhanVien.luongCB || "";
    document.getElementById("chucvu").value = nhanVien.chucVu || "";
    document.getElementById("gioLam").value = nhanVien.gioLam || "";
  }
  function timKiemNhanVien() {
    var search = document.getElementById("searchName").value;
    var newDsnv = qlnv.timKiemNhanVien(search);
    hienThi(newDsnv);
  }

  function xacThucDuLieu(nhanVien) {
    var validator = new Validator();
    var isValid = validator.isRequired("tbTKNV", nhanVien.taiKhoan)&&
                validator.taiKhoan("tbTKNV" , nhanVien.taiKhoan);
    isValid &= validator.isRequired("tbTen", nhanVien.hoTen) &&
                validator.hoTen("tbTen",nhanVien.hoTen);
    isValid &=
      validator.isRequired("tbEmail", nhanVien.email) &&
      validator.email("tbEmail", nhanVien.email);
    isValid &= validator.isRequired("tbMatKhau", nhanVien.matKhau)&&
    validator.password("tbMatKhau", nhanVien.matKhau);
    isValid &= validator.isRequired("tbNgay", nhanVien.ngayLam)&&
    validator.ngayLam("tbNgay", nhanVien.ngayLam);
    isValid &= validator.isRequired("tbLuongCB", nhanVien.luongCB)&&
    validator.luongCB("tbLuongCB", nhanVien.luongCB);
    isValid &= validator.isRequired("tbChucVu", nhanVien.chucVu)&&
    validator.chucVu("tbChucVu", nhanVien.chucVu);
    isValid &= validator.isRequired("tbGiolam", nhanVien.gioLam)&&
    validator.gioLam("tbGiolam", nhanVien.gioLam);
  
    if (!isValid) {
      for (var key in validator.errors) {
        if (validator.errors[key]) {
          document.getElementById(key).innerHTML = validator.errors[key];
          document.getElementById(key).style.display ="block";
        }
      }
      return false 
    }
    return true
  }




