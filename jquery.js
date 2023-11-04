$(document).ready(function () {
    $("h1").text("Chiếc Tiệm Mộng Mơ");
    $("img").addClass("cute-image");
    $("img").attr({ src: "TiemMongMo.jpg", alt: "Tiệm Mộng Mơ" });
    $(".contact-form input:first").attr({
        type: "text",
        placeholder: "Tài Khoản",
    });
    $(".contact-form input:last").attr({
        type: "text",
        placeholder: "Mật Khẩu",
    });
    $(".contact-form button").text("Đăng Nhập");
    $(".intro").text(
        "Cảm ơn bạn đã ghé qua cửa hàng! Ở đây có rất nhiều thứ dễ thương"
    );
    $("body").css({
        "font-family": "Arial, sans-serif",
        margin: "0",
        padding: "0",
        "background-color": "pink",
        display: "flex",
        "justify-content": "center",
        "align-items": "center",
        height: "100vh",
    });
    $(".container").css({
        "text-align": "center",
        "background-color": "#fff",
        padding: "30px",
        "border-radius": "10px",
        "box-shadow": "0px 0px 20px 0px rgba(0, 0, 0, 0.1)",
    });
    $("h1").css({
        color: "#f582ae",
        "font-size": "36px",
        "margin-bottom": "20px",
    });
    $(".cute-image").css({
        width: "200px",
        "border-radius": "50%",
        "margin-bottom": "20px",
    });
    $(".intro").css({
        "font-size": "18px",
        color: "#333",
        "margin-bottom": "3px",
    });
    $(".contact-form input[type='text']").css({
        width: "100%",
        padding: "10px",
        "margin-bottom": "10px",
        border: "1px solid #ccc",
        "border-radius": "5px",
    });
    $(".contact-form button").css({
        padding: "10px 20px",
        "background-color": "#f582ae",
        color: "#fff",
        border: "none",
        "border-radius": "5px",
        cursor: "pointer",
    });
    $("button").click(function () {
        alert("Tặng bạn một bó hoa dễ thương!");
    });
});
