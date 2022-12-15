class Alunos {
    constructor(nome, faltas, notas){
        this.nome = nome;
        this.qtdfaltas = faltas;
        this.notas = notas;
    }
    faltas(){
        this.qtdfaltas += 1;
    }
    calculaMedia(){
        let soma = 0;
        this.notas.forEach(notas => {
            soma += notas;
        });
        return soma / this.notas.length
    }

}

const lucas = new Alunos('Lucas', 0,[5, 7 ,6])
const julia = new Alunos('Julia', 7,[0, 2 ,7])
const bruno = new Alunos('Lucas', 2,[10, 4 ,9])

console.log(lucas, julia, bruno);

const curso = {
    nome: "Biologia",
    notaAprovacao: 5,
    maxFaltas: 5,
    estudantes: [],
    adicionarAlunos(alunos){
        this.estudantes.push(alunos)
    },
    statusAlunos(alunos){
        const media = alunos.calculaMedia();
        if(media >= this.notaAprovacao && alunos.qtdfaltas < this.maxFaltas){
            return true;
        } else if(alunos.qtdfaltas === this.maxFaltas && media >= this.notaAprovacao * 1.1){
            return true;
        }
        return false
    },
    listaStatus(){
       return this.estudantes.map((alunos) => this.statusAlunos(alunos));
    }
}
console.log(curso.statusAlunos(julia));
curso.adicionarAlunos(lucas);
curso.adicionarAlunos(julia);
curso.adicionarAlunos(bruno);
console.log(curso.estudantes)