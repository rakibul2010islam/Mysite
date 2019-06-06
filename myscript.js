//Copy Buttons on Contact Page
function copyFunc(element) {
  var $temp = $("<input>");
  $("body").append($temp);
  $temp.val($(element).text()).select();
  document.execCommand("copy");
  $temp.remove();
  if(element==='.email'){
  	$('.emailButton').text('✓Copied');
  	var x = {
  	'background-color':'green',
  	'color':'white',		
  	}
  	$('.emailButton').css(x);	
  }else{
  	$('.skypeButton').text('✓Copied');
  	var x = {
  	'background-color':'green',
  	'color':'white'		
  	}
  	$('.skypeButton').css(x);
  }
   
}
