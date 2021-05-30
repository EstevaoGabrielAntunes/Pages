var botao = document.querySelector('#botao')
var result = document.querySelector('.dados')
botao.addEventListener('click', function(e){
    var nome = document.querySelector('.nome').value
    var email = document.querySelector('.email').value
    var telefone = document.querySelector('.telefone').value
    var rua = document.querySelector('.rua').value
    var numeroCasa = document.querySelector('.number').value
    var cidade = document.querySelector('.cidade').value
    var cep= document.querySelector('.cep').value
    e.preventDefault()
    /* limpaCampos() */
    imprima(nome,email,telefone,rua,cidade,cep, numeroCasa)
})


function limpaCampos() {
    var elements = document.getElementsByName("inputform");
    elements.forEach(element => {
      element.value = '';
    })
}
function imprima(nome,email,telefone,rua,cidade,cep,numeroCasa){
    var dados = [nome,email,telefone,rua,cidade,cep, numeroCasa]
    var imprimir = dados.reduce((acumulador, dado_atual)=>{
        acumulador = `
            <li>
                <h1>SEUS DADOS:</h1>
                <p>NOME:${nome}</p>
                <p>EMAIL:${email}</p>
                <p>TELEFONE:${telefone}</p>
                <p>RUA:${rua}</p>
		<p>NUMERO:${numeroCasa}</p>
                <p>CIDADE:${cidade}</p>
                <p>CEP:${cep}</p>          
            <li> 
        `
        return acumulador
    },'')
    console.log(imprimir);
    result.innerHTML = imprimir
}

