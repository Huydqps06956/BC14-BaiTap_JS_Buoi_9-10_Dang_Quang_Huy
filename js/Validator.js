function Validator() {
  this.errors = {};
}

Validator.prototype.isRequired = function (name, value) {
  if (!value) {
    this.errors[name] = "Vui lòng nhập vào trường này";
    return false;
  }

  return true;
};
Validator.prototype.taiKhoan = function (name, value) {
  if (!(value.length <= 6)) {
    this.errors[name] = "Tài khoản tối đa 4 - 6 ký số,";
    return false;
  }

  return true;
};
Validator.prototype.hoTen = function (name, value) {
  if (!isNaN(value)) {
    this.errors[name] = "Tên nhân viên phải là chữ";
    return false;
  }

  return true;
};
Validator.prototype.email = function (name, value) {
  if (!/[a-z0-9._%+-]+@[a-z0-9.-]+\.[a-z]{2,}$/.test(value)) {
    this.errors[name] = "Email không đúng định dạng";
    return false;
  }

  return true;
};

Validator.prototype.password = function (name, value) {
  if (!/^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@$!%*?&])[A-Za-z\d@$!%*?&]{8,10}$/.test(value)) {
    this.errors[name] = "mật Khẩu từ 6-10 ký tự (chứa ít nhất 1 ký tự số, 1 ký tự in hoa, 1 ký tự đặc biệt)";
    return false;
  }

  return true;
};
Validator.prototype.ngayLam = function (name, value) {
  if (!/^(0?[1-9]|[12][0-9]|3[01])[\/\-](0?[1-9]|1[012])[\/\-]\d{4}$/.test(value)) {
    this.errors[name] = "ngày làm không đúng định dạng";
    return false;
  }

  return true;
};
Validator.prototype.luongCB = function (name, value) {
  if (!(value >= 1000000 && value <= 20000000)) {
    this.errors[name] = "Lương cơ bản 1 000 000 - 20 000 000";
    return false;
  }
  return true;
};
Validator.prototype.chucVu = function (name, value) {
  if (!(value == "giamDoc" || value =="truongPhong" || value =="nhanVien")) {
    this.errors[name] = "Chức vụ không hợp lệ";
    return false;
  }
  return true;
};
Validator.prototype.gioLam = function (name, value) {
  if (!(value >= 80 && value <= 200)) {
    this.errors[name] = "Số giờ làm trong tháng 80 - 200 giờ";
    return false;
  }
  return true;
};