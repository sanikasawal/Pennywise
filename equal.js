let nameInput = document.querySelector("#name");
let amountInput = document.querySelector("#amount");
let friendsInput = document.querySelector("#friends");
let errorText = "";
let result = "";

let resultText = document.querySelector("#resultText");
let messageDiv = document.querySelector(".message");

function calc() {
	if (amountInput.value !== "" && friendsInput.value !== "") {
		result = eval(`${amountInput.value} / ${friendsInput.value}`);

		resultText.textContent = `Rs ${result} per person`;

		messageDiv.classList.remove("error");

		messageDiv.classList.add("success");

		// console.log(result);
	} else if (amountInput.value === "" && friendsInput.value === "") {
		errorText = "Amount and Number of members needs to be filled in...";

		resultText.textContent = errorText;

		messageDiv.classList.remove("success");

		messageDiv.classList.add("error");

		// console.log(errorText);
	} else if (friendsInput.value == "") {
		errorText = "Number of members  needs to be filled in...";

		resultText.textContent = errorText;

		messageDiv.classList.remove("success");

		messageDiv.classList.add("error");

		// console.log(errorText);
	} else {
		errorText = "Amount needs to be filled in...";

		resultText.textContent = errorText;

		messageDiv.classList.remove("success");

		messageDiv.classList.add("error");

		// console.log(errorText);
	}

	// console.log(amountInput.value);
	// console.log(friendsInput.value);
}
