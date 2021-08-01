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

// Tiktok ads
// !function (w, d, t) {
//     w.TiktokAnalyticsObject = t; var ttq = w[t] = w[t] || []; ttq.methods = ["page", "track", "identify", "instances", "debug", "on", "off", "once", "ready", "alias", "group", "enableCookie", "disableCookie"], ttq.setAndDefer = function (t, e) { t[e] = function () { t.push([e].concat(Array.prototype.slice.call(arguments, 0))) } }; for (var i = 0; i < ttq.methods.length; i++)ttq.setAndDefer(ttq, ttq.methods[i]); ttq.instance = function (t) { for (var e = ttq._i[t] || [], n = 0; n < ttq.methods.length; n++)ttq.setAndDefer(e, ttq.methods[n]); return e }, ttq.load = function (e, n) { var i = "https://analytics.tiktok.com/i18n/pixel/events.js"; ttq._i = ttq._i || {}, ttq._i[e] = [], ttq._i[e]._u = i, ttq._t = ttq._t || {}, ttq._t[e] = +new Date, ttq._o = ttq._o || {}, ttq._o[e] = n || {}; var o = document.createElement("script"); o.type = "text/javascript", o.async = !0, o.src = i + "?sdkid=" + e + "&lib=" + t; var a = document.getElementsByTagName("script")[0]; a.parentNode.insertBefore(o, a) };

//     ttq.load('C4364QEI9NESIEHLJF20');
//     ttq.page();
// }(window, document, 'ttq');



!function (w, d, t) {
    w.TiktokAnalyticsObject = t; var ttq = w[t] = w[t] || []; ttq.methods = ["page", "track", "identify", "instances", "debug", "on", "off", "once", "ready", "alias", "group", "enableCookie", "disableCookie"], ttq.setAndDefer = function (t, e) { t[e] = function () { t.push([e].concat(Array.prototype.slice.call(arguments, 0))) } }; for (var i = 0; i < ttq.methods.length; i++)ttq.setAndDefer(ttq, ttq.methods[i]); ttq.instance = function (t) { for (var e = ttq._i[t] || [], n = 0; n < ttq.methods.length; n++)ttq.setAndDefer(e, ttq.methods[n]); return e }, ttq.load = function (e, n) { var i = "https://analytics.tiktok.com/i18n/pixel/events.js"; ttq._i = ttq._i || {}, ttq._i[e] = [], ttq._i[e]._u = i, ttq._t = ttq._t || {}, ttq._t[e] = +new Date, ttq._o = ttq._o || {}, ttq._o[e] = n || {}; var o = document.createElement("script"); o.type = "text/javascript", o.async = !0, o.src = i + "?sdkid=" + e + "&lib=" + t; var a = document.getElementsByTagName("script")[0]; a.parentNode.insertBefore(o, a) };

    ttq.load('C436UBMI9NESIEHLJKAG');
    ttq.page();
}(window, document, 'ttq');


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



