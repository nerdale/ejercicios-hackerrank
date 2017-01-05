function main(n) {
	var n = prompt("Ingrese un número");
		for (i = 1; i <= n; i++) {
    		document.write(" ".repeat(n-i) + "</br>" + "#".repeat(i));
		}
}
/*

Función realizada en hackerrank

function main() {
   var n = parseInt(readLine());
   for (i = 1; i <= n; i++) {
       console.log(" ".repeat(n-i) + "#".repeat(i));
   }
}
*/