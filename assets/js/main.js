// image upload 
$('#file-upload').change(function() {
  var i = $(this).prev('label').clone();
  var file = $('#file-upload')[0].files[0].name;
  $(this).prev('label').text(file);
});


// FLOATING LABLE OF INPUT 
$(document).ready(function() {
  $("input").focus(function(){        
      // $(this).siblings("input").find(".active").removeClass("active");
      $(this).parent().addClass("active");   
});
  if($(this).value =='null'){
      $("input").focusout(function(){    
              $(this).parent().removeClass("active");    
          
      });
  }
})
// table pagination and search 

$(document).ready(function(){
  $(function() {
    const rowsPerPage = 6;
    const rows = $('.themeTable tbody tr');
    const rowsCount = rows.length;
    const pageCount = Math.ceil(rowsCount / rowsPerPage); // avoid decimals
    const numbers = $('#numbers');
    
    // Generate the pagination.
    for (var i = 0; i < pageCount; i++) {
      numbers.append('<li><a href="#">' + (i+1) + '</a></li>');
    }
      
    // Mark the first page link as active.
    $('#numbers li:first-child a').addClass('active');
  
    // Display the first set of rows.
    displayRows(1);
    
    // On pagination click.
    $('#numbers li a').click(function(e) {
      var $this = $(this);
      
      e.preventDefault();
      
      // Remove the active class from the links.
      $('#numbers li a').removeClass('active');
      
      // Add the active class to the current link.
      $this.addClass('active');
      
      // Show the rows corresponding to the clicked page ID.
      displayRows($this.text());
    });
    
    // Function that displays rows for a specific page.
    function displayRows(index) {
      var start = (index - 1) * rowsPerPage;
      var end = start + rowsPerPage;
      
      // Hide all rows.
      rows.hide();
      
      // Show the proper rows for this page.
      rows.slice(start, end).show();
    }
  });
  
        
});




