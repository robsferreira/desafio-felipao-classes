class Heroi {
    constructor(nome, idade, tipo) {
        this.nome = nome;
        this.idade = idade;
        this.tipo = tipo;
    }

    atacar() {
        let ataque = "";
        switch (this.tipo) {
            case "mago":
                ataque = "magia";
                break;
            case "guerreiro":
                ataque = "espada";
                break;
            case "monge":
                ataque = "artes marciais";
                break;
            case "ninja":
                ataque = "shuriken";
                break;
            default:
                ataque = "o conhecimento";
                break;
        }

        console.log(`o ${this.tipo} atacou usando ${ataque}`);
    }
}

// Exemplo de uso da classe
const heroi1 = new Heroi("MagoGandalf", 1000, "mago");
const heroi2 = new Heroi("GuerreiroConan", 35, "guerreiro");
const heroi3 = new Heroi("NinjaJiraia", 38, "ninja");
const heroi4 = new Heroi("MongeJedai", 503, "monge");
const heroi5 = new Heroi("Aluno", 503, "Aprendiz");

heroi1.atacar();
heroi2.atacar();
heroi3.atacar();
heroi4.atacar();
heroi5.atacar();