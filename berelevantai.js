// Switch tabs on click
$(".tab-button").click(function (e) {
	e.preventDefault();
	$(".tab-button").removeClass("tab-button-active");
	$(".w-tab-link:contains(" + e.target.innerText + ")").click();
	$(e.target).addClass("tab-button-active");
});

let new_titleRegister = document.getElementById("titleRegister");
const aiCourses = [
	"AI for IT Devs",
	"AI for IT DevOps",
	"AI for IT Ops",
	"AI for Management",
	"AI for Product Management",
	"AI for Project Management",
];

document
	.getElementById("button-00")
	.addEventListener("click", function () {
		var select = document.getElementById("select-course");
		select.value = "Devs"; // Change the selected option to value 2
		select.dispatchEvent(new Event("change")); // Trigger the change event
		new_titleRegister.innerHTML = aiCourses[0];
	});

document
	.getElementById("button-01")
	.addEventListener("click", function () {
		var select = document.getElementById("select-course");
		select.value = "DevOps"; // Change the selected option to value 2
		select.dispatchEvent(new Event("change")); // Trigger the change event
		new_titleRegister.innerHTML = aiCourses[1];
	});

document
	.getElementById("button-02")
	.addEventListener("click", function () {
		var select = document.getElementById("select-course");
		select.value = "Ops"; // Change the selected option to value 2
		select.dispatchEvent(new Event("change")); // Trigger the change event
		new_titleRegister.innerHTML = aiCourses[2];
	});

document
	.getElementById("button-03")
	.addEventListener("click", function () {
		var select = document.getElementById("select-course");
		select.value = "Management"; // Change the selected option to value 2
		select.dispatchEvent(new Event("change")); // Trigger the change event
		new_titleRegister.innerHTML = aiCourses[3];
	});

document
	.getElementById("button-04")
	.addEventListener("click", function () {
		var select = document.getElementById("select-course");
		select.value = "Product"; // Change the selected option to value 2
		select.dispatchEvent(new Event("change")); // Trigger the change event
		new_titleRegister.innerHTML = aiCourses[4];
	});

document
	.getElementById("button-05")
	.addEventListener("click", function () {
		var select = document.getElementById("select-course");
		select.value = "Project"; // Change the selected option to value 2
		select.dispatchEvent(new Event("change")); // Trigger the change event
		new_titleRegister.innerHTML = aiCourses[5];
	});

document
	.getElementById("button-00-bottom")
	.addEventListener("click", function () {
		var select = document.getElementById("select-course");
		select.value = "Devs"; // Change the selected option to value 2
		select.dispatchEvent(new Event("change")); // Trigger the change event
		new_titleRegister.innerHTML = aiCourses[0];
	});

document
	.getElementById("button-01-bottom")
	.addEventListener("click", function () {
		var select = document.getElementById("select-course");
		select.value = "DevOps"; // Change the selected option to value 2
		select.dispatchEvent(new Event("change")); // Trigger the change event
		new_titleRegister.innerHTML = aiCourses[1];
	});

document
	.getElementById("button-02-bottom")
	.addEventListener("click", function () {
		var select = document.getElementById("select-course");
		select.value = "Ops"; // Change the selected option to value 2
		select.dispatchEvent(new Event("change")); // Trigger the change event
		new_titleRegister.innerHTML = aiCourses[2];
	});

document
	.getElementById("button-03-bottom")
	.addEventListener("click", function () {
		var select = document.getElementById("select-course");
		select.value = "Management"; // Change the selected option to value 2
		select.dispatchEvent(new Event("change")); // Trigger the change event
		new_titleRegister.innerHTML = aiCourses[3];
	});

document
	.getElementById("button-04-bottom")
	.addEventListener("click", function () {
		var select = document.getElementById("select-course");
		select.value = "Product"; // Change the selected option to value 2
		select.dispatchEvent(new Event("change")); // Trigger the change event
		new_titleRegister.innerHTML = aiCourses[4];
	});

document
	.getElementById("button-05-bottom")
	.addEventListener("click", function () {
		var select = document.getElementById("select-course");
		select.value = "Project"; // Change the selected option to value 2
		select.dispatchEvent(new Event("change")); // Trigger the change event
		new_titleRegister.innerHTML = aiCourses[5];
	});
