
$(document).ready(function () {
  //Mutiselect form
  $('#demo').multiselect();
  //multiends
  $('#myTable').DataTable({
    responsive: {
      details: {
        type: 'column',
        target: -1,
        breakpoints: [{
            name: 'desktop',
            width: Infinity
          },
          {
            name: 'tablet-l',
            width: 1024
          },
          {
            name: 'tablet-p',
            width: 768
          },
          {
            name: 'mobile-l',
            width: 480
          },
          {
            name: 'mobile-p',
            width: 320
          }
        ],

      }
    },
    columnDefs: [{
      className: 'control',
      orderable: false,
      targets: -1
    }],
    order: [1, 'asc']
  });
  
});
$(".imgAdd").click(function () {
    $(this).closest(".row").find('.imgAdd').before('<div class="col-12 col-sm-6 col-md-4 col-lg-4 col-xl-2 imgUp"><div class="imagePreview"></div><label class="btn btn-primary">Upload<input type="file" class="uploadFile img" value="Upload Photo" style="width:0px;height:0px;overflow:hidden;"></label><i class="fa fa-times del"></i></div>');
  });
  $(document).on("click", "i.del", function () {
    $(this).parent().remove();
  });
  $(function () {
    $(document).on("change", ".uploadFile", function () {
      var uploadFile = $(this);
      var files = !!this.files ? this.files : [];
      if (!files.length || !window.FileReader) return; // no file selected, or no FileReader support

      if (/^image/.test(files[0].type)) { // only image file
        var reader = new FileReader(); // instance of the FileReader
        reader.readAsDataURL(files[0]); // read the local file

        reader.onloadend = function () { // set image data as background of div
          //alert(uploadFile.closest(".upimage").find('.imagePreview').length);
          uploadFile.closest(".imgUp").find('.imagePreview').css("background-image", "url(" + this.result + ")");
        }
      }

    });
  });