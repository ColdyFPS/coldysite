const perguntas = [
  {
    pergunta: "Qual é a função principal do sistema circulatório humano?",
    respostas: [
      "Transportar oxigênio para as células do corpo",
      "Filtrar o sangue para remover impurezas",
      "Ajudar na digestão de alimentos",
    ],
    correta: 0
  },
  {
    pergunta: "O que é a mitose?",
    respostas: [
      "Um processo de divisão celular que resulta em duas células geneticamente idênticas",
      "Um tipo de célula especializada em transporte de nutrientes",
      "Um órgão do sistema reprodutor masculino",
    ],
    correta: 0
  },
  {
    pergunta: "Qual é a unidade básica da hereditariedade?",
    respostas: [
      "O gene",
      "O cromossomo",
      "A célula",
    ],
    correta: 0
  },
  {
    pergunta: "O que é a fotossíntese?",
    respostas: [
      "O processo pelo qual as plantas convertem luz solar em energia química",
      "A produção de esporos em plantas",
      "A absorção de nutrientes pelas raízes das plantas",
    ],
    correta: 0
  },
  {
    pergunta: "Oque fazer quando um homem vir falar com você?",
    respostas: [
      "Dar um tapa na cara dele dizendo que ja é casada depois fura os olhos com as unha",
      "Responder ele com simpatia",
      "Dizer que é solteira e dar pegar o zap",
    ],
    correta: 0
  },
  {
    pergunta: "O que é meiose",
    respostas: [
      "Um processo de divisão celular que reduz o número de cromossomos pela metade, resultando em células sexuais",
      "Um tipo de célula sanguínea",
      "Uma estrutura encontrada no núcleo das células vegetais",
    ],
    correta: 0
  },
  {
    pergunta: "Qual sua opinião sobre conversar com outro homem?",
    respostas: [
      "Eu adoro conversar com outros homens",
      "Algo muito feio não pode se fazer nunca",
      "Uma coisa legal pra ter outras experiências",
    ],
    correta: 1
  },
  {
    pergunta: "O que são os fatores abióticos?",
    respostas: [
      "Componentes não vivos de um ecossistema, como luz solar, temperatura e água",
      "Organismos microscópicos",
      "O mesmo que bióticos, mas em um contexto diferente",
    ],
    correta: 0
  },
  {
    pergunta: "O que é você acha de traição?",
    respostas: [
      "Concordo plenamente e sou de acordo",
      "Uma coisa que eu faria muito",
      "Muito errado não faria nunca pois amo o meu marido",
    ],
    correta: 2
  },
  {
    pergunta: "Qual é o principal componente das células?",
    respostas: [
      "A membrana celular",
      "O núcleo",
      "O citoplasma",
    ],
    correta: 0
  }
];

  const quiz = document.querySelector('#quiz')
  const template = document.querySelector('template')
  
  const corretas = new Set()
  const totalDePerguntas = perguntas.length
  const mostrarTotal = document.querySelector('#acertos span')
  mostrarTotal.textContent = corretas.size + ' de ' + totalDePerguntas
  
  for(const item of perguntas) {
    const quizItem = template.content.cloneNode(true)
    quizItem.querySelector('h3').textContent = item.pergunta
  
    for(let resposta of item.respostas) {
      const dt = quizItem.querySelector('dl dt').cloneNode(true)
      dt.querySelector('span').textContent = resposta
      dt.querySelector('input').setAttribute('name', 'perunta-' + perguntas.indexOf(item))
      dt.querySelector('input').value = item.respostas.indexOf(resposta)
      dt.querySelector('input').onchange = (event) => {
       const estaCorreta = event.target.value == item.correta
  
       corretas.delete(item)
       if(estaCorreta) {
        corretas.add(item)
       }
       mostrarTotal.textContent = corretas.size + ' de ' + totalDePerguntas
      }
  
      quizItem.querySelector('dl').appendChild(dt)
    }
   
    quizItem.querySelector('dl dt').remove()
  
    quiz.appendChild(quizItem)
  }
  
