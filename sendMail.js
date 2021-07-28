function sendEmail() {
    var name = document.getElementById("name").value;
    var email = 'vudiepgt1995@gmail.com';
    var phone = document.getElementById("phone").value;
    var message = document.getElementById("message").value;
    Email.send({
        Host: "smtp.gmail.com",
        Username: "halonghome.z2021z@gmail.com",
        Password: "adminhalong",
        To: email,
        From: "halonghome.z2021z@gmail.com",
        Subject: "Thông báo đăng ký nhận báo giá từ :" + name,
        Body: '<div>Chào bạn Diệp :</div><p> Bạn đã nhận được đăng ký báo giá từ : </b><ul><li>Tên:'
            + name + '</li><li>Phone:' + phone +
            '</li></ul><div>Với lời nhắn : ' + message + '.</div><div>Cuối cùng, chúng tôi cảm ơn bạn đã tin tưởng sử dụng dịch vụ và chúc bạn thành công trông công việc</div>',
    }).then(
        message => alert("Đăng ký thành công!!!")
    );
}

// suppost online
$(document).ready(function () {
    $('.support-content').hide();
    $('a.btn-support').click(function (e) {
        e.stopPropagation();
        $('.support-content').slideToggle();
    });
    $('.support-content').click(function (e) {
        e.stopPropagation();
    });
    $(document).click(function () {
        $('.support-content').slideUp();
    });
});