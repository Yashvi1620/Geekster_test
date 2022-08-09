let rev = 0;
let num = prompt("Enter the number");
num=parseInt(num);
let lastDigit;

while(num != 0){
	lastDigit = num % 10;
  rev = rev * 10 + lastDigit;
  num = Math.floor(num/10);
}

console.log(rev);