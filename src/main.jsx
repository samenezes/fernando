var btn=document.querySelector('#botao')

btn.addEventListener('click',()=>{
    mostraDados
})
          
const valores=fetch(':https://opentdb.com/api.php?amount=30&category=16').then(res=>{
    console.log(res)
    res.json().then(dados=>{
        console.log(dados);
        mostraDados(dados);
        });
}).catch(erro=>{
    console.log(erro+ "erro na requisição")
});


function mostraDados(dados){
    const legenda=document.querySelector('#legenda');
       
    dados.forEach(element => {

         legenda.innerHTML += `<tr> <td>${element.question}</td>
                                     <td>${element.correct_answer}</td> `
        
    });
}


