<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <meta http-equiv="X-UA-Compatible" content="ie=edge">
    <title>Document</title>
</head>
<body>
    <div class="row">

        <div class="col"></div>
        <div class="col" id="Col">Test</div>
        <div class="col"></div>
    </div>
</body>
</html>
<script src="https://code.jquery.com/jquery-3.6.0.min.js">

</script>
<script>
    console.log("hey");
    $(document).ready(function() {    
$("#Col").css("color", "red");    

$.ajax({
            type: "GET",
            url: "http://127.0.0.1:8000/getdata",
          }).done(function (response) {
            console.log(response);
            response = JSON.parse(response);
           console.log(response["data"][0]);
          });
});  
</script>
<?php /**PATH D:\laravel3\insertProgram\resources\views/Api.blade.php ENDPATH**/ ?>