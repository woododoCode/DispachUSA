$('.datapicker').datepicker({
  autoclose: true,
  todayHighlight: true,
  toggleActive: true
});
$(document).ready(function () {
  $('#myTable').DataTable({
    responsive: {
      details: {
        type: 'column',
        target:-1,
        breakpoints: [
          { name: 'desktop',  width: Infinity },
          { name: 'tablet-l', width: 1024 },
          { name: 'tablet-p', width: 768 },
          { name: 'mobile-l', width: 480 },
          { name: 'mobile-p', width: 320 }
        ],
        
      }
    },
    buttons: {
        buttons: [ 'copy', 'csv', 'excel' ]
    },
    columnDefs: [{
      className: 'control',
      orderable: false,
      targets: -1
    }],
    order: [1, 'asc']
  })
});

