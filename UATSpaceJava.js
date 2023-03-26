//starts countdown
function startCountdown() {
  console.log("Start button clicked");
  let currTme = 10;
  countdownElement.innerText = currTme;
  clearInterval(countdownInterval);
  countdownInterval = setInterval(() => {
    currTme--;
    //displays launch warning
    if (currTme < 5) {
      countdownElement.innerText = `Warning: Less than 1/2 way to launch, time left = ${currTme}`;
    } else {
      countdownElement.innerText = currTme;
    }//displays blastoff
    if (currTme === 0) {
      clearInterval(countdownInterval);
      countdownElement.innerText = "Blastoff";
    }
  }, 1000);
  <audio controls>
    <source src="us-lab-background.mp3" type="audio/mpeg"></source>  
</audio>
}
<script>
		var nameInput = document.getElementById("nameInput");
		var submitButton = document.getElementById("submitButton");

		submitButton.addEventListener("click", function() {
			alert("Hello, " + nameInput.value + "!")
		});
	</script>
