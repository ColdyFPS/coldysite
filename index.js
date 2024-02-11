const perguntas = [
    {
      pergunta: "O que é JavaScript?",
      respostas: [
        "Uma linguagem de programação de alto nível",
        "Um tipo de café",
        "Um sistema operacional",
      ],
      correta: 0
    },
    {
      pergunta: "Qual é o símbolo para comentários de uma única linha em JavaScript?",
      respostas: [
        "//",
        "/* */",
        "#",
      ],
      correta: 0
    },
    {
      pergunta: "Qual é a função do operador '===' em JavaScript?",
      respostas: [
        "Compara dois valores para igualdade de valor e tipo",
        "Atribui um valor a uma variável",
        "Multiplica dois valores",
      ],
      correta: 0
    },
    {
      pergunta: "O que é uma variável em JavaScript?",
      respostas: [
        "Um contêiner para armazenar dados",
        "Uma função que retorna um valor",
        "Um tipo de loop",
      ],
      correta: 0
    },
    {
      pergunta: "Qual é a função da declaração 'const' em JavaScript?",
      respostas: [
        "Declara uma variável de somente leitura",
        "Define uma constante matemática",
        "Cria uma nova classe",
      ],
      correta: 0
    },
    {
      pergunta: "O que é uma função em JavaScript?",
      respostas: [
        "Um bloco de código reutilizável que executa uma tarefa específica",
        "Um tipo de loop",
        "Um tipo de variável",
      ],
      correta: 0
    },
    {
      pergunta: "Qual é a função do operador '&&' em JavaScript?",
      respostas: [
        "Operador lógico E",
        "Operador de concatenação de strings",
        "Operador de incremento",
      ],
      correta: 0
    },
    {
      pergunta: "Qual é a função do operador '+' em JavaScript?",
      respostas: [
        "Adição e concatenação de strings",
        "Subtração",
        "Multiplicação",
      ],
      correta: 0
    },
    {
      pergunta: "O que é uma estrutura condicional em JavaScript?",
      respostas: [
        "Uma instrução que executa diferentes ações com base em uma condição",
        "Um tipo de loop",
        "Um tipo de variável",
      ],
      correta: 0
    },
    {
      pergunta: "O que é o DOM em JavaScript?",
      respostas: [
        "Document Object Model, uma interface de programação para documentos HTML e XML",
        "Diretriz Oficial de Manutenção",
        "Data Object Model, uma estrutura de dados",
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
  