function sendEmail() {
    var name = document.getElementById("name").value;
    var email = document.getElementById("email").value;
    var phone = document.getElementById("phone").value;
    var message = document.getElementById("message").value;
    Email.send({
        Host: "smtp.gmail.com",
        Username: "halonghome.z2021z@gmail.com",
        Password: "adminhalong",
        To: email,
        From: "halonghome.z2021z@gmail.com",
        Subject: "Thông báo đăng ký nhận thông tin thành công",
        Body: '<div>Chào bạn : ' + name +
            '</div><p> Thông báo bạn đã đăng ký nhận thông tin mới thành công </b><ul><li>Email:'
            + email + '</li><li>Phone:' + phone +
            '</li></ul><div>Chúng tôi sẽ gửi thông tin những đợt giảm giá dịch vụ và sản phẩm nhằm chi ân đến bạn.</div>',
    }).then(
        message => alert("mail sent successfully")
    );
}