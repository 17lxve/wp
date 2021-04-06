function sendEmail() {
var name = document.getElementById('NAME').value;
var email = document.getElementById('EMAIL').value;
var phone = document.getElementById('PHONE').value;
var major = document.getElementById('MAJOR').value;
var total = name +':'+ email +':'+ phone +':'+ major;
Email.send({
    Host : "smtp.elasticemail.com",
    Username : "timmydavidsonkb@gmail.com",
    Password : "C4AEEF7C7012BB80E3ED822A1BAC47253296",
    To : 'kouadiobhegnino@gmail.com',
    From : "timmydavidsonkb@gmail.com",
    Subject : "Test email",
    Body : "<html><h2>New Member</h2><strong>' " + total + "'</strong><br></br><em>Italic</em></html>"
}).then(
  alert("Submission successful!")
);
}