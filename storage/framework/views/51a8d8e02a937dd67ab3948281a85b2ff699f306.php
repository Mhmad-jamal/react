<!DOCTPE html>
<html>
<head>
<title>View Student Records</title>
</head>
<body>
<table border = "1">
<tr>
<td>Id</td>
<td></td>
</tr>
<?php $__currentLoopData = $users; $__env->addLoop($__currentLoopData); foreach($__currentLoopData as $user): $__env->incrementLoopIndices(); $loop = $__env->getLastLoop(); ?>
<tr>
<td><?php echo e($user->id); ?></td>
<td><?php echo e($user->Full_Name); ?></td>

</tr>
<?php endforeach; $__env->popLoop(); $loop = $__env->getLastLoop(); ?>
</table>
<br>
<br>
<hr>
<br>

</body>
</html>
<?php /**PATH D:\laravel3\insertProgram\resources\views/getdata.blade.php ENDPATH**/ ?>