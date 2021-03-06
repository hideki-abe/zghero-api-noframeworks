import PessoaFisica from '../../pessoas/pessoaFisica.js'
import ListaDePessoas from '../../pessoas/listaDePessoas.js'
import $ from "jquery";

const nome = <HTMLSelectElement>document.querySelector('#nome')
const email = <HTMLSelectElement>document.querySelector('#email')
const cpf = <HTMLSelectElement>document.querySelector('#cpf')
const idade = <HTMLSelectElement>document.querySelector('#idade')
const pais = <HTMLSelectElement>document.querySelector('#pais')
const cep = <HTMLSelectElement>document.querySelector('#cep')
const descricao = <HTMLSelectElement>document.querySelector('#descricao')
let botaoCadastra = <HTMLElement>document.querySelector('.botao_cadastrar')
let link = document.querySelector('#link') as HTMLAnchorElement

console.log(link)

botaoCadastra.addEventListener('click', () => {
  cadastraUsuario()
  setTimeout(function() {
    location.href="../competencias/competencias.html"
  }, 500)
 
})

async function cadastraUsuario () {

  /*
  const xhr = new XMLHttpRequest();
  xhr.open("POST", "http://localhost:3000/zghero/candidatos", true);
  xhr.setRequestHeader("Content-type", "application/json");
  xhr.send(`?name=${nome.value}&email=${email.value}&cpf=${cpf.value}&pais=${pais.value}&cep=${cep.value}&descricao=${descricao.value}`
    );

  console.log(`?name=${nome.value}&email=${email.value}&cpf=${cpf.value}&pais=${pais.value}&cep=${cep.value}&descricao=${descricao.value}`)

  */
  let response
  let json
  try {
    event?.preventDefault
    let url = "http://localhost:3000/zghero/candidatos" + 
    `?name=${nome.value}&email=${email.value}&cpf=${cpf.value}&idade=${idade.value}&pais=${pais.value}&cep=${cep.value}&descricao=${descricao.value}`

    const body = {
      name: nome.value,
      email: email.value,
      idade: idade.value,
      cpf: cpf.value,
      pais: pais.value,
      cep: cep.value,
      descricao: descricao.value
    }

    response = await fetch(url, {
      method: 'POST',
      headers: {
        Mode: 'no-cors',
        'Content-type': 'application/json; charset=utf-8'
      },
      body: JSON.stringify(body)
    })

    json = await response.json()

    validaCandidato(
      nome.value,
      email.value,
      cpf.value,
      idade.value,
      pais.value,
      cep.value,
      descricao.value
    )

    let myObj = {cpf: cpf.value}
    localStorage.setItem('1', JSON.stringify(myObj))

  } catch (error) {

  }
}


function validaCandidato (
  novoNome: string,
  novoEmail: string,
  novoCpf: string,
  novaIdade: string,
  novoEstado: string,
  novoCep: string,
  novaDescricao: string
) {
  const regexNome = /(?=^.{2,60}$)^[A-Z][a-z]+(?:[ ][A-Z][a-z]+)*$/ // /[A-Z]{1}[a-z]{2,10} [A-Z]{1}[a-z]{2,10}/
  const regexEmail = /(\S+@\w+\.\w{2,6}(\.\w{2})?)/g
  const regexCpf = /\d{3}\.?\d{3}\.?\d{3}-?\d{2}/
  const regexIdade = /\d{2}/
  const regexEstado = /(?=^.{2,60}$)^[A-Z][a-z]+(?:[ ](?:das?|dos?|de|e|[A-Z][a-z]+))*$/
  const regexCep = /^[0-9]{5}-?[0-9]{3}$/
  const regexDescricao = /\w{1,15}/g

  link.href = './cadastroCandidato.html'
  if (!regexNome.test(novoNome)) {
    alert('Nome inv??lido!')
    return false
  } else if (!regexEmail.test(novoEmail)) {
    alert('Email inv??lido!')
    return false
  } else if (!regexCpf.test(novoCpf)) {
    alert('Cpf inv??lido!')
    return false
  } else if (!regexIdade.test(novaIdade)) {
    alert('Idade inv??lida!')
    return false
  } else if (!regexEstado.test(novoEstado)) {
    alert('Estado inv??lido!')
    return false
  } else if (!regexCep.test(novoCep)) {
    alert('Cep inv??lido!')
    return false
  } else if (!regexDescricao.test(novaDescricao)) {
    alert('Descri????o inv??lida!')
  } else {
    link.href = '../competencias/competencias.html'
    return true
  }
}
