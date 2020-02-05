bootstrapValidate('#first_name', 'min:3:Enter at least 3 characters!', function (isValid) {
   if (isValid) {
       $(this).removeClass('is-invalid');
       
   } else {
       $(this).addClass('is-invalid');
   }
});
bootstrapValidate('#first_name', 'max:42:Please dont enter more than 42 characters!', function (isValid) {
   if (isValid) {
       $(this).removeClass('is-invalid');
       
   } else {
       $(this).addClass('is-invalid');
   }
});
bootstrapValidate('#first_name', 'alpha:You can only input latin alphabetic characters', function (isValid) {
   if (isValid) {
       $(this).removeClass('is-invalid');
       
   } else {
       $(this).addClass('is-invalid');
   }
});
bootstrapValidate('#last_name', 'min:3:Enter at least 3 characters!', function (isValid) {
   if (isValid) {
       $(this).removeClass('is-invalid');
       
   } else {
       $(this).addClass('is-invalid');
   }
});
bootstrapValidate('#last_name', 'max:42:Please dont enter more than 42 characters!', function (isValid) {
   if (isValid) {
       $(this).removeClass('is-invalid');
       
   } else {
       $(this).addClass('is-invalid');
   }
});
bootstrapValidate('#last_name', 'alpha:You can only input latin alphabetic characters', function (isValid) {
   if (isValid) {
       $(this).removeClass('is-invalid');
       
   } else {
       $(this).addClass('is-invalid');
   }
});
bootstrapValidate('#email', 'email:Enter a valid email address', function (isValid) {
   if (isValid) {
      $(this).removeClass('is-invalid');
       
   } else {
       $(this).addClass('is-invalid');
   }
});
bootstrapValidate('#confirm_email', 'email:Enter a valid email address', function (isValid) {
   if (isValid) {
       $(this).removeClass('is-invalid');
       
   } else {
       $(this).addClass('is-invalid');
   }
});
bootstrapValidate('#confirm_email', 'matches:#email:Your emails should match', function (isValid) {
   if (isValid) {
       $(this).removeClass('is-invalid');
       
   } else {
       $(this).addClass('is-invalid');
   }
});