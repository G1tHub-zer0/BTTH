// Thêm dòng mới vào bảng danh sách bài hát
function themBaiHat() {
  var table = document.getElementById(
    "danh_sach_bai_hat"
  );
  var rowCount = table.rows.length;
  var row = table.insertRow(rowCount);

  var cell1 = row.insertCell(0);
  var cell2 = row.insertCell(1);
  var cell3 = row.insertCell(2);

  cell1.innerHTML =
    '<input type="text" name="ten_bai_hat[]" placeholder="Nhập tên bài hát">';
  cell2.innerHTML =
    '<input type="text" name="tac_gia[]" placeholder="Nhập tác giả">';
  cell3.innerHTML =
    '<button type="button" class="btn-xoa" onclick="xoaBaiHat(this)">Xóa</button>';
}

// Xóa dòng khỏi bảng danh sách bài hát
function xoaBaiHat(btn) {
  var row = btn.parentNode.parentNode;
  row.parentNode.removeChild(row);
}
