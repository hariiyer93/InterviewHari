var principal = parseFloat(prompt("Enter the loan amount:"));
var term = parseInt(prompt("Enter the term years:"));
var roi = parseInt(prompt("Enter Interest Rate:"));
var monthlyPayment = parseInt(prompt("Enter Your Monthly Payment:"));

document.write("Your total Loan amount: $" + principal + "<br>");
document.write("Your total term:" + term + "<br>");
document.write("Your rate of Interest:" + roi + "<br>");
document.write("Your monthly payment: $" + monthlyPayment + "<br>");
document.write("<br>");

// For first month
var totalInterest = principal * (3 / 100);
var totalRepayment = principal + totalInterest;

var monthlyInterest = totalInterest / 12;
var monthlyPrincipal = monthlyPayment - monthlyInterest;
var remainingAmount = totalRepayment - monthlyPrincipal;
document.write("For 1<sup>st</sup> month... <br>");
document.write(
  "Your monthly Principal payment: $" + monthlyPrincipal.toFixed(2) + "<br>"
);
document.write(
  "Your mortgage loan balance this month is:" +
    remainingAmount.toFixed(2) +
    "<br>"
);

document.write("<br>");

var m = remainingAmount;
for (m = remainingAmount; m >= 0; m--) {
  totalInterest = remainingAmount * (3 / 100);

  monthlyInterest = totalInterest / 12;
  monthlyPrincipal = monthlyPayment - monthlyInterest;

  document.write(
    "Your monthly Principal payment: $" + monthlyPrincipal.toFixed(2) + "<br>"
  );
  document.write(
    "Your mortgage loan balance this month is:" + m.toFixed(2) + "<br>"
  );

  document.write("<br>");
  m -= monthlyPayment;

  if (m <= 0) {
    document.write("<b>Loan amortization is completed...<b>");
  }
}
