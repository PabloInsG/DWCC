
let numeros0y4 = /[0-4]/;
let cadenaMayus = /^[A-Z]$/;
let cadena_dw = /dw$/;
let noCeros = /[^0]*/g;

console.log(numeros0y4.test(4))
console.log(numeros0y4.test(5))

console.log("----------------------------")
console.log(cadenaMayus.test("ADDKLAADKALD"))
console.log(cadenaMayus.test("adklskd"))

console.log("----------------------------")
console.log(cadena_dw.test("acaba en dw"))
console.log(cadena_dw.test("no acaba en lo que tiene que acabar"))

console.log("----------------------------")
console.log(noCeros.test(12314))
console.log(noCeros.test(0o0))

let dni = /(^[0-9]{8}[A-Z]{1})$/;

console.log("----------------------------")
console.log(dni.test("43231673E"))

let cif = /^(A-H|J|N|P|Q|R|S|U|V|W){1}[0-9]{8}$/;

console.log("----------------------------")
console.log(cif.test("R85230311"))

let cp = /^[0-9]{5}$/

console.log("----------------------------")
console.log(cp.test("07181"))

let prohibirNumero = /^\D+$/

console.log("----------------------------")
console.log(prohibirNumero.test("ajdaksjd"))

let email = /^[a-z]{1, }@/