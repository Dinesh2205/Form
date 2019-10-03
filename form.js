<!DOCTYPE html>
<html>
    <head>
        <title>Form validation</title>
        <meta name="viewport" content="width=device-width, initial-scale=1">
        <link rel="stylesheet" href="https://maxcdn.bootstrapcdn.com/bootstrap/3.4.0/css/bootstrap.min.css">
        <script src="https://ajax.googleapis.com/ajax/libs/jquery/3.4.1/jquery.min.js"></script>
        <script src="https://maxcdn.bootstrapcdn.com/bootstrap/3.4.0/js/bootstrap.min.js"></script> 
        <style>
        table {
  border-collapse: collapse;
}

table, th, td {
  border: 1px solid black;
  padding: 15px;
  text-align: left;
}
#f1,#f2,#f3,#f4,#f5,#f6{
    color: red;
}
        </style>
    </head>
<script>
$(document).ready(function(){
    $("#submit").click(function(){
        var name = $('#name').val();
        var email = $('#email').val();
        var phone = $('#phone').val();
        var password = $('#pass').val();
        var pwd = $('#cpass').val();
        var name_regex = /^[a-zA-Z]+$/;
        var reg = /^([A-Za-z0-9_\-\.])+\@([A-Za-z0-9_\-\.])+\.([A-Za-z]{2,4})$/;
        var passw = /^(?=.*\d)(?=.*[!@#$%^&*])(?=.*[a-z])(?=.*[A-Z]).{8,}$/;
        //var passw=  /^[A-Za-z0-9!@#$%^&*]{6,16}$/;
        var phoneno = /^\d{10}$/;
        if(name.length == 0){
            //console.log("ghfdg")
            $('#f1').text("All fields are mandatory");
            $('#name').focus();
            return false;
        }
        else{
            $('#f1').text("");

        }
         if(!name.match(name_regex)){
            console.log("name");
            $('#f2').text("Enter correct name");
            $('#name').focus();
            return false;
        }
        else{
            $('#f2').text("");
        }
         if(!email.match(reg) ){
            $('#f3').text("Enter correct email");
            $('#email').focus();
            return false;
        }
        else{
            $('#f3').text("");
        }
        if(!phone.match(phoneno) ){
            $('#f4').text("Enter valid phone number");
            $('#phone').focus();
            return false;
        }
        else{
            $('#f4').text("");
        }
        if(!password.match(passw) ){
            $('#f5').text("Enter valid password");
            $('#pass').focus();
            return false;
        }
        else{
            $('#f5').text("");
        }
         if(password != pwd){
            $('#f6').text("passwords don't match");
            $('#cpass').focus();
            return false;
        }
        else{
            $('#f6').text("");
        }
            $('#demo').html("<table><tr><th>Name</th><th>email</th><th>phone</th><th>password</th></tr><tr><td>"+name+"</td>"+ "<td>"+email+"</td>"+ "<td>"+phone+"</td>"+ "<td>"+password+"</td>"+ "</tr></table>");
            //document.getElementById("demo").innerHTML+=
           // "<table><tr><th>Name</th><th>email</th><th>phone</th><th>password</th></tr><tr><td>"+name+"</td>"+ "<td>"+email+"</td>"+ "<td>"+phone+"</td>"+ "<td>"+password+"</td>"+ "</tr></table>";
        
    });
});
</script>
<!--<script>
    function display(){
        var name = document.getElementById("name").value;
        var email = document.getElementById("email").value;
        var phone = document.getElementById("phone").value;
        var password = document.getElementById("pass").value;
        var pwd = document.getElementById("cpass").value;
        var reg = /^([A-Za-z0-9_\-\.])+\@([A-Za-z0-9_\-\.])+\.([A-Za-z]{2,4})$/;
        var passw = /^(?=.*\d)(?=.*[!@#$%^&*])(?=.*[a-z])(?=.*[A-Z]).{8,}$/;
        //var passw=  /^[A-Za-z0-9!@#$%^&*]{6,16}$/;
        var phoneno = /^\d{10}$/;
        if(name==null || name==""){
           // console.log("enter");
            document.getElementById("f1").innerHTML="Please fill name field";
            form.name.focus();
            return false;
        }
        else if(reg.test(document.form.email.value) == false) 
        {
            document.getElementById("f1").innerHTML="enter correct email address";
            form.email.focus();
            //alert('Invalid Email Address');
            return false;
        }
        else if(!form.phone.value.match(phoneno)){
            document.getElementById("f1").innerHTML="enter valid phone number";
            form.phone.focus();
        }  
        else if(!form.pass.value.match(passw)){
            document.getElementById("f1").innerHTML="incorrect password format";
            form.pass.focus();
            //alert("enter new password");
            return false;
        }
        else if(password != pwd){
            document.getElementById("f1").innerHTML="passwords dont match";
            form.cpass.focus();
            //alert("passwords dont match");
            return false;
        }
        else{
            //var result = name + '  ' + email+ '  ' + phone+ '  ' + password;
            //document.getElementById("demo").innerHTML = result;
            //document.write(result);
            document.getElementById("demo").innerHTML+=
            "<table><tr><th>Name</th><th>email</th><th>phone</th><th>password</th></tr><tr><td>"+name+"</td>"+ "<td>"+email+"</td>"+ "<td>"+phone+"</td>"+ "<td>"+password+"</td>"+ "</tr></table>";
        }
        }
    </script>-->
    <body>
        <div class="container">
        <h1 align="center">Form</h1>
        <form name="form" method="POST">
            <div class="form-group">
                <label for="name">Name</label>
                <input type="text" class="form-control" placeholder="Enter Name" id="name" required>
                <div id="f2"> </div>
            </div>
            <div class="form-group">
                <label for="email">Email</label>
                <input type="email" class="form-control" placeholder="Enter Email" id="email" required>
                <div id="f3"> </div>
            </div>
            <div class="form-group">
                <label for="phone">phone</label>
                <input type="text" class="form-control" placeholder="Enter phone" id="phone" required>
                <div id="f4"> </div>
            </div>
            <div class="form-group">
                    <label for="password">password</label>
                    <input type="text" class="form-control" placeholder="Enter password" id="pass" required>
                    <div id="f5"> </div>
            </div>
            
            <div class="form-group">
                    <label for="password">Confirm password</label>
                    <input type="text" class="form-control" placeholder="Confirm Password" id="cpass" required>
                    <div id="f6"> </div>
            </div>
            <div class="checkbox">
                    <label><input type="checkbox"> Remember me</label>
            </div>  
            <div id="f1"> </div>
            <button type="button" id="submit" class="btn btn-primary">Submit</button>          
        </form>
        </div><hr>
    <div class="container">
        <h1 align="center">Form data</h1><br><br>   
        <p id="demo"></p>
    </div>
    </body>
</html>
