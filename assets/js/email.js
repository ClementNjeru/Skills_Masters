

function SendMail() {

    const params = {
        from_name : document.getElementById("fullName").value,
        email_id : document.getElementById("email_id").value,
        message : document.getElementById("message").value,
    }
    emailjs.send("service_6e7ide7", "template_rq84utg", params).then(function (res) {
        alert("Email Sent Successfully!" + res.status);
        document.getElementById("myForm").reset();
    })

}