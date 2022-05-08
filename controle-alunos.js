
const entrada = require("readline-sync");

let alunosPresentes = parseInt(entrada.question("Informe os alunos presentes na aula hoje: "));

for (let alunos =0; alunos <= alunosPresentes; alunos++) {

    if (alunos == 0) {
        console.log ('Zero : ' + alunos);
    } else {
        if (alunos % 2 == 0) {
            console.log ('Par  : ' + alunos);
        } else {
            console.log ('Impar: ' + alunos)
        }
    }
}