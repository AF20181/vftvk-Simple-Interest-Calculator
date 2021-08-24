//* Simple js for "Simple Interest Calculator"
<<<<<<< HEAD
=======
//* © Armin Fuhrmann
//
///////
>>>>>>> 9dc8b4f3aaaad0fcb4f3b3b95934483ee0237b5d
function compute() {
  var principal = document.getElementById("principal").value;
  var rate = document.getElementById("rate").value;
  var years = document.getElementById("years").value;
<<<<<<< HEAD
  var interest = principal * years * rate / 100;
=======
  var interest = principal * years * rate /100;
>>>>>>> 9dc8b4f3aaaad0fcb4f3b3b95934483ee0237b5d
  var year = new Date().getFullYear()+parseInt(years);
  var result = document.getElementById("result");
  if (principal <= 0) {
      alert("Enter a positive number");
      document.getElementById("principal").focus();
      return;
  }
  result.innerHTML="If you deposit \<mark\>"+principal+"\</mark\>,\<br\>at an interest rate of \<mark\>"+rate+"%\</mark\>.\<br\>You will receive an amount of \<mark\>"+interest+"\</mark\>,\<br\>in the year \<mark\>"+year+"\</mark\>.\<br\>";
}
function updateRate(rate_val) {
  var rateval = document.getElementById("rate").value;
  document.getElementById("rate_val").innerText=rateval;
}
