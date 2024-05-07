$(".tab-button").click(function(e) { 
  e.preventDefault();
  $(".tab-button").removeClass("tab-button-active");
  $(".w-tab-link:contains(" + e.target.innerText + ")").click();
  $(e.target).addClass("tab-button-active");
})

document.getElementById('button-00').addEventListener('click', function() {
  var select = document.getElementById('select-course');
  select.value = 'Devs'; // Change the selected option to value 2
  select.dispatchEvent(new Event('change')); // Trigger the change event
});

document.getElementById('button-01').addEventListener('click', function() {
  var select = document.getElementById('select-course');
  select.value = 'DevOps'; // Change the selected option to value 2
  select.dispatchEvent(new Event('change')); // Trigger the change event
});

document.getElementById('button-02').addEventListener('click', function() {
  var select = document.getElementById('select-course');
  select.value = 'Ops'; // Change the selected option to value 2
  select.dispatchEvent(new Event('change')); // Trigger the change event
});

document.getElementById('button-03').addEventListener('click', function() {
  var select = document.getElementById('select-course');
  select.value = 'Management'; // Change the selected option to value 2
  select.dispatchEvent(new Event('change')); // Trigger the change event
});

document.getElementById('button-04').addEventListener('click', function() {
  var select = document.getElementById('select-course');
  select.value = 'Product'; // Change the selected option to value 2
  select.dispatchEvent(new Event('change')); // Trigger the change event
});

document.getElementById('button-05').addEventListener('click', function() {
  var select = document.getElementById('select-course');
  select.value = 'Project'; // Change the selected option to value 2
  select.dispatchEvent(new Event('change')); // Trigger the change event
});

document.getElementById('button-00-bottom').addEventListener('click', function() {
	var select = document.getElementById('select-course');
	select.value = 'Devs'; // Change the selected option to value 2
	select.dispatchEvent(new Event('change')); // Trigger the change event
  });
  
  document.getElementById('button-01-bottom').addEventListener('click', function() {
	var select = document.getElementById('select-course');
	select.value = 'DevOps'; // Change the selected option to value 2
	select.dispatchEvent(new Event('change')); // Trigger the change event
  });
  
  document.getElementById('button-02-bottom').addEventListener('click', function() {
	var select = document.getElementById('select-course');
	select.value = 'Ops'; // Change the selected option to value 2
	select.dispatchEvent(new Event('change')); // Trigger the change event
  });
  
  document.getElementById('button-03-bottom').addEventListener('click', function() {
	var select = document.getElementById('select-course');
	select.value = 'Management'; // Change the selected option to value 2
	select.dispatchEvent(new Event('change')); // Trigger the change event
  });
  
  document.getElementById('button-04-bottom').addEventListener('click', function() {
	var select = document.getElementById('select-course');
	select.value = 'Product'; // Change the selected option to value 2
	select.dispatchEvent(new Event('change')); // Trigger the change event
  });
  
  document.getElementById('button-05-bottom').addEventListener('click', function() {
	var select = document.getElementById('select-course');
	select.value = 'Project'; // Change the selected option to value 2
	select.dispatchEvent(new Event('change')); // Trigger the change event
  });