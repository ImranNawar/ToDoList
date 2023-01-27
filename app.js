$(document).ready(function () {
  var date = new Date();
  var today = new Date(date.getFullYear(), date.getMonth(), date.getDate());
  var end = new Date(date.getFullYear(), date.getMonth(), date.getDate());

  $("#datepicker1").datepicker({
    format: "mm/dd/yyyy",
    todayHighlight: true,
    startDate: today,
    endDate: end,
    autoclose: true,
  });

  $("#datepicker1").datepicker("setDate", today);
});
