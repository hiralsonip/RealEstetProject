function validate() {
    var form = document.getElementById('form');
    var name = document.getElementById('fullnameC');
    var email = document.getElementById('emailC');
    var subject = document.getElementById('subject');
    var message = document.getElementById('message');

    var flag = 1;

    form.addEventListener('submit', function (e) {
        e.preventDefault();

        if (name.value === '' || name.value == null) {
            alert("Please Enter Name");
            flag = 0;
        }

        if (email.value === '' || email.value == null) {
            alert("Please Enter Email Address");
            flag = 0;
        }

        if (subject.value === '' || subject.value == null) {
            alert("Please Enter Subject");
            flag = 0;
        }

        if (message.value === '' || message.value == null) {
            alert("Please Enter Message");
            flag = 0;
        }

        if (flag == 1) {
            alert("Thanks for sending message! We will respond as soon as possible.");
            return true;
        } else {
            return false;
        }
    })
}