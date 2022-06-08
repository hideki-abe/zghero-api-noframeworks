import PessoaJuridica from "../../pessoas/pessoaJuridica.js"
import ListaDePessoas from "../../pessoas/listaDePessoas.js"

const nome = <HTMLSelectElement>document.querySelector("#nome")
const email = <HTMLSelectElement>document.querySelector("#email")
const cnpj = <HTMLSelectElement>document.querySelector("#cnpj")
const pais = <HTMLSelectElement>document.querySelector("#pais")
const estado = <HTMLSelectElement>document.querySelector("#estado")
const cep = <HTMLSelectElement>document.querySelector("#cep")
const descricao = <HTMLSelectElement>document.querySelector("#descricao")
const competencias = <HTMLSelectElement>document.querySelector("#competencias")
let botaoCadastra = <HTMLElement>document.querySelector(".botao_cadastrar")
let link = document.querySelector("#link") as HTMLAnchorElement


botaoCadastra.addEventListener('click', () => {
    cadastraEmpresa()
    setTimeout(function() {
        location.href="../vagas/cadastraVaga.html"
      }, 500)
})

async function cadastraEmpresa () {

    let response
    let json
    try {
      event?.preventDefault
      let url = "http://localhost:3000/zghero/empresas" + 
      `?name=${nome.value}&email=${email.value}&cnpj=${cnpj.value}&pais=${pais.value}&estado=${estado.value}&cep=${cep.value}&descricao=${descricao.value}`
    
      response = await fetch(url, {
        method: 'POST',
        headers: {
          Mode: 'no-cors',
          'Content-type': 'application/json; charset=utf-8'
        }
      })
  
      json = await response.json()
  
      validaEmpresa(
        nome.value,
        email.value,
        cnpj.value,
        pais.value,
        estado.value,
        cep.value,
        descricao.value
      )
  
    } catch (error) {
      //json = null
      console.log(error)
    }
  }

function validaEmpresa(novoNome:string, novoEmail:string, novoCnpj:string, 
    novoPais:string, novoEstado:string, novoCep:string, novaDescricao:string){

        const regexNome =  /(?=^.{2,60}$)^[A-Z][a-z]+(?:[ ][A-Z][a-z]+)*$/ // /[A-Z]{1}[a-z]{2,10} [A-Z]{1}[a-z]{2,10}/
        const regexEmail = /(\S+@\w+\.\w{2,6}(\.\w{2})?)/g
        const regexCnpj = /\d{3}\.?\d{3}\.?\d{3}-?\d{2}/
        const regexPais = /(?=^.{2,60}$)^[A-Z][a-z]+(?:[ ](?:das?|dos?|de|e|[A-Z][a-z]+))*$/
        const regexEstado = /(?=^.{2,60}$)^[A-Z][a-z]+(?:[ ](?:das?|dos?|de|e|[A-Z][a-z]+))*$/
        const regexCep = /^[0-9]{5}-?[0-9]{3}$/
        const regexDescricao = /\w{1,15}/g
        
        link.href = "./cadastroEmpresa.html"
        if(!regexNome.test(novoNome)){
            alert("Nome inválido!")
            return false
        }else if(!regexEmail.test(novoEmail)){
            alert("Email inválido!")
            return false
        }else if(!regexCnpj.test(novoCnpj)){
            alert("Cpf inválido!")
            return false
        }else if(!regexPais.test(novoPais)){
            alert("Idade inválida!")
            return false
        }else if(!regexEstado.test(novoEstado)){
            alert("Estado inválido!")
            return false
        }else if(!regexCep.test(novoCep)){
            alert("Cep inválido!")
            return false
        }else if(!regexDescricao.test(novaDescricao)){
            alert("Descrição inválida!")
        }
        else{
            link.href = "../perfilEmpresa/perfilEmpresa.html"
            return true
        }
    }