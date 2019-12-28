$(document).ready(function () {
    $('.registration-form fieldset:first-child').fadeIn('fast');

    $('.registration-form input[type="text"]').on('focus', function () {
        $(this).removeClass('input-error');
    });
    $('.registration-form textarea').on('focus', function () {
        $(this).removeClass('input-error');
    });
    // next step
    $('.registration-form .btn-primary').on('click', function () {
        var parent_fieldset = $(this).parents('fieldset');
        var next_step = true;
        var checked = $('input[type="checkbox"]').prop('checked');
      
        if(checked) {
          parent_fieldset.find('input[type="text"],input[type="email"], textarea').each(function () {
            if ($(this).val() == "") {
                $(this).addClass('input-error');
                next_step = false;
            } else {
                $(this).removeClass('input-error');
              
            }
        });
        }else{
          alert('You must fill all fields and agree before submitting.')
          next_step = false;
        }

        if (next_step) {
            parent_fieldset.fadeOut(100, function () {
                $(this).next().fadeIn();
            });
        }

    });

    // previous step
    $('.registration-form .btn-previous').on('click', function () {
        $(this).parents('fieldset').fadeOut(100, function () {
            $(this).prev().fadeIn();
        });
    });

    // submit
    $('.registration-form').on('submit', function (e) {

        $(this).find('input[type="text"],input[type="email"], textarea').each(function () {
            if ($(this).val() == "") {
                e.preventDefault();
                $(this).addClass('input-error');
            } else {
                $(this).removeClass('input-error');
            }
        });

    });

   
});