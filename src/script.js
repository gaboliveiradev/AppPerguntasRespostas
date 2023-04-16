var perguntas = [
    {
        pergunta: 'Qual a linguagem de programação que é utilizada em 75% da internet?',
        a1: 'php',
        a2: 'javascript',
        a3: 'c#',
        a4: 'html',
        correta: 'php',
        id: '0'
    },
    {
        pergunta: 'Em que ano foi desenvolvido a linguagem de programação PHP?',
        a1: '2020',
        a2: '1995',
        a3: '1980',
        a4: '1870',
        correta: '1995',
        id: '1'
    },
    {
        pergunta: 'Quem foi oficialmente o criador da internet?',
        a1: 'tim berners-lee.',
        a2: 'tim Maia',
        a3: 'bolsonaro',
        a4: 'lula',
        correta: 'tim berners-lee.',
        id: '2'
    },
    {
        pergunta: 'Qual foi a primeira linguagem de programação desenvolvida no mundo?',
        a1: 'fortran',
        a2: 'node js',
        a3: 'c++',
        a4: 'basic',
        correta: 'fortran',
        id: '3'
    }
];

exibirPerguntas();

function exibirPerguntas() {    
    perguntas.map((p)=>{
        var elemento = document.querySelector('main');
        
        elemento.innerHTML += `
        <div class="pergunta">
            <h3>${p.pergunta}</h3>
            <div class="alternativas">
                <input type="radio" value="${p.a1}" name="${p.id}"> ${p.a1.toUpperCase()} <br>
                <input type="radio" value="${p.a2}" name="${p.id}"> ${p.a2.toUpperCase()} <br>
                <input type="radio" value="${p.a3}" name="${p.id}"> ${p.a3.toUpperCase()} <br>
                <input type="radio" value="${p.a4}" name="${p.id}"> ${p.a4.toUpperCase()} <br>
            </div>
        </div>
        `;
    });
}

const radios = document.querySelectorAll('[type=radio]');

for(var i = 0; i < radios.length; i++){
    radios[i].addEventListener('change', (e)=>{
        var selecionada = e.target.value;
        var index_selecionada = e.target.getAttribute('name');
        verificarAlternativas(perguntas[index_selecionada].correta, selecionada);
    });
}

async function verificarAlternativas(correta, selecionada) {
    if(selecionada == correta) {
        await alert('Você acertou!');
    } else {
        await alert('Você errou!');
    }
};