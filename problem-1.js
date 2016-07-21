var total = 10;
var sum = 0;

for (i = total-1; i > 0; i--) {
    if ((i % 3 == 0) || (i % 5 == 0)) {
  		sum += i;
  	}
}

console.log(sum);
