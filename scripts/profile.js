function validateForm() {
    var form = document.getElementById('form');
    var fname = document.getElementById('fname');
    var lname = document.getElementById('lname');
    var email = document.getElementById('email');
    var mnum = document.getElementById('mnum');
    var country = document.getElementById('country');
    var city = document.getElementById('city');
    var street = document.getElementById('street');
    var pcode = document.getElementById('pcode');

    var flag = 1;

    form.addEventListener('submit', function (e) {
        e.preventDefault();

        if (fname.value === '' || fname.value == null) {
            alert("Please Enter First Name");
            flag = 0;
        }

        if (lname.value === '' || lname.value == null) {
            alert("Please Enter Last Name");
            flag = 0;
        }

        if (email.value === '' || email.value == null) {
            alert("Please Enter Email Address");
            flag = 0;
        }

        if (mnum.value === '' || mnum.value == null) {
            alert("Please Enter Mobile Number");
            flag = 0;
        }
        else {
            if (!mnum.value.match(/^\(?([0-9]{3})\)?[-.]?([0-9]{3})[-.]?([0-9]{4})$/)) {
                alert("Please Enter Valid Mobile Number");
                flag = 0;
            }
        }

        if (country.value === '' || country.value == null) {
            alert("Please Enter Country Name");
            flag = 0;
        }

        if (city.value === '' || city.value == null) {
            alert("Please Enter City Name");
            flag = 0;
        }

        if (street.value === '' || street.value == null) {
            alert("Please Enter Street Name");
            flag = 0;
        }

        if (pcode.value === '' || pcode.value == null) {
            alert("Please Enter Postal Code");
            flag = 0;
        }
        else{
            if (!pcode.value.match(/^[A-Z]\d[A-Z][ ]?\d[A-Z]\d$/)){
                alert("Please Enter Valid Postal Code");
                flag = 0;
            }
        }

        if (flag == 1) {
            alert("Data Changed Successfully");
            return true;
        } else {
            return false;
        }
    })
}