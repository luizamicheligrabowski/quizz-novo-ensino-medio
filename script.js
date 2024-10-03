const caixaPrincipal = document.querySelector(".caixa-principal");
const caixaPerguntas = document.querySelector(".caixa-perguntas");
const caixaAlternativas = document.querySelector(".caixa-alternativas");
const caixaResultado = document.querySelector(".caixa-resultado");
const textoResultado = document.querySelector(".texto-resultado");

const perguntas = [
    
        enunciado: "o novo ensino médio é uma reforma educacional com o aumento da carga horaria de 800h para 1000h. Também foi adicionado além das disciplinas obrigatórias como portuguẽs e matemática, os estudantes também podem escolher a trilha de aprendizagem que desejam seguir a partir do segundo ano, por meio dos itinerários formativos. O objetivo é modernizar a educação e adaptar os jovens para o mercado de trabalho.Vocẽ acha que essas mudanças são benéficas ou maléficas para os estudantes ?"
        alternativas: 
            {
                texto: "Isso é benéfico. Visto que o estudante poderá escolher em que área quer se aprofundar e então, se preparar melhor para o mercado de trabalho.",
        },
            {
                texto: "Isso é maléfico. Logo que o curriculo é muito rígido e não flexivel, então pode se arrepender de qual trilha resolvel escolher."",
            },
        ]

{
            
        enunciado: "O estudante terá maior possibilidade de escolha: A idéia era trazer uma maior variedade de opções porém,é necessario uma maior autoconciencia já no primeiro ano do ensino médio tendo em mente qual profissão deseja seguir para não errar na escolha. Você acha que um maior leque de possibilidades ajuda ou atrapalha a escolha do estudante ?"
        alternativas: [
            
                texto: "Ajuda. Visto que é uma preparaçao para o mercado de trabalho , pois já terá um, maior conhecimento na aréa que irá futuramente trabalhar."
        {
                texto: "Atrapalha. Logo que gera uma pressão no estudante que ao escolher sua carreira podem mudar de idéia e então ter perdido tempo de estudo.",
            }
        ]
    },
{
        enunciado: "o novo ensino médio e o ENEM: apesarde ter muitas possibilidades de escolha dos itinerários, uma preocupação copm relação a preparação dos alunos para o Exame Nacional do Ensino Médio, que atualmente é a maior porta de entrada para o ensino superior. Como você classifíca esse impacto?",
        alternativas: [
            
                texto: "Positivo. Trás uma profundidade maior em conhecimentos expecíficos, que podem ajudar na hora de fazer a  prova.",
                
            {
                texto: "Negativo. Porque gera uma lacuna onde deixa a desejar muito em alguns aspectos, o que será prejudicial ao estudantes.",
                
            }
        ]
    },
    {  
        enunciado: "As plataformas: Uma das principais mudanças do novo ensino médio é a implementação de plataformas digitais que vizam melhorar a aprendizagem. porém nem tudos tem um bom acesso a tecnologia. Você considera as plataformas um bom método de ensino ?",
        alternativas: [
            {
                texto: "Sim. Os alunos passam a ter mais possibilidades de acesso a educação forado ambiente escolar.",
               
            },
            {
                texto: "Não. Já que nem todos tem o mesmo acesso a internet alguns alunos podem ser prejudicados, além de que o desempenho cai sem o auxilio de um professor para orientar os alunos!",
               
            }
        ]
    },


let atual = 0;
let perguntaAtual;
let historiaFinal = "";

function mostraPergunta() {
    if (atual >= perguntas.length) {
        mostraResultado();
        return;
    }
    perguntaAtual = perguntas[atual];
    caixaPerguntas.textContent = perguntaAtual.enunciado;
    caixaAlternativas.textContent = "";
    mostraAlternativas();
}

function mostraAlternativas(){
    for(const alternativa of perguntaAtual.alternativas) {
        const botaoAlternativas = document.createElement("button");
        botaoAlternativas.textContent = alternativa.texto;
        botaoAlternativas.addEventListener("click", () => respostaSelecionada(alternativa));
        caixaAlternativas.appendChild(botaoAlternativas);
    }
}

function respostaSelecionada(opcaoSelecionada) {
    const afirmacoes = opcaoSelecionada.afirmacao;
    historiaFinal += afirmacoes + " ";
    atual++;
    mostraPergunta();
}

function mostraResultado() {
    caixaPerguntas.textContent = "O novo ensino médio é uma tentativa de modernizar a educação, buscando preparar o jovem para o mercado de trabalho, primorando suas competências e o melhor desenvolvimento dos jovens. Existem vantágens e pontos positivos, como a possibilidade de escolha autonoma de qual rumo profissional o jovem quer seguir. Há um grande potêncial de melhoria na educação brasileira, poŕem necessitam de investimentosem treinamento e capacitação dos professores, já que nem todas as escolas possuem infraestrutura para receber essas mudanças. Para obt4er exito nessa reforma,ainda exige muitos esforço por parte dos alunos e educadores, o que acarreta em um furo na educação e no conhecimento dos jovens. ";
    textoResultado.textContent = historiaFinal;
    caixaAlternativas.textContent = "";
}

mostraPergunta();