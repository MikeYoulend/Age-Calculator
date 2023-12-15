let userInput = document.getElementById("date");
userInput.max = new Date().toISOString().split("T")[0]; //per non andare oltre nella scelta della data
