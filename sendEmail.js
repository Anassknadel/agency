(function() {
    emailjs.init("UnW_tAU8stevf6HgZ"); // Replace "your_user_id" with your actual public key
})();

function sendEmail(){
    let params = {
        email : document.getElementById("email").value,
        name : document.getElementById("name").value,
        message : document.getElementById("message").value
    }

    emailjs.send("service_v4tz4pz","template_pa7vohc", params).then(alert("Email SENT"))
}