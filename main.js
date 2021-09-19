
$(document).ready(function() {
    $('.bang-tinh').attr('disabled', 'true');
    $('.bang-ket-qua').attr('disabled', 'true');
    $('.phep-tinh').attr('disabled', 'true');
    $('.bang').attr('disabled', 'true');

});

$('.so').on('click', function(){
    var so = $(this).html();
    var ketQua = $('.bang-tinh').val();
    $('.bang-tinh').val(ketQua + so)
    $('.phep-tinh').removeAttr('disabled');
    $('.bang').removeAttr('disabled');
});

$('.lam-moi').on('click', function(){
    $('.bang-tinh').val('');
    $('.bang-ket-qua').attr('');
});
$('.xoa').on('click', function(){
    var bangTinh = $('.bang-tinh').val();
    $('.bang-tinh').val(bangTinh.substring(0, bangTinh.length - 1));
});
$('.cham').on('click', function() {
    var cham = $('.cham').html();
    var ketQua = $('.bang-tinh').val();
    $('.bang-tinh').val(ketQua + cham);
    $('.phep-tinh').attr('disabled', 'true')
    $('.cham').attr('disabled', 'true')
})
$('.phep-tinh').on('click', function() {
    var phepTinh = $(this).html();
    var ketQua = $('.bang-tinh').val();
    $('.bang-tinh').val(ketQua + phepTinh);
    $('.phep-tinh').attr('disabled', 'true')
    $('.cham').attr('disabled', 'true')
});
$('.bang').on('click', function() {
    $('.bang-ket-qua').val(eval($('.bang-tinh').val()));
});

