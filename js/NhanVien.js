function NhanVien(
   taiKhoan,
   hoTen,
   email,
   matKhau,
   ngayLam,
   luongCB,
   chucVu,
   gioLam
  ) {
    this.taiKhoan = taiKhoan;
    this.hoTen = hoTen;
    this.email = email;
    this.matKhau = matKhau;
    this.ngayLam = ngayLam;
    this.luongCB = luongCB;
    this.chucVu = chucVu;
    this.gioLam =gioLam;
  }
  
  NhanVien.prototype.tinhLuong = function () {
    if(this.chucVu == "giamDoc"){
        return this.luongCB*3
    }
    if(this.chucVu == "truongPhong"){
        return this.luongCB*2
    }
    return this.luongCB
  };
  NhanVien.prototype.xepLoai = function () {
      if(this.gioLam >=192){
          return "nhân viên xuất sắc"
      }
      if(this.gioLam >=176){
        return "nhân viên giỏi"
    }
    if(this.gioLam >=160){
        return "nhân viên khá"
    }
    return "nhân viên trung bình"
  }
  

