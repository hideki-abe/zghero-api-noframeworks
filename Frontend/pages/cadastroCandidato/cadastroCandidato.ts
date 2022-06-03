import PessoaFisica from '../../pessoas/pessoaFisica.js'
import ListaDePessoas from '../../pessoas/listaDePessoas.js'

const nome = <HTMLSelectElement>document.querySelector('#nome')
const email = <HTMLSelectElement>document.querySelector('#email')
const cpf = <HTMLSelectElement>document.querySelector('#cpf')
const idade = <HTMLSelectElement>document.querySelector('#idade')
const estado = <HTMLSelectElement>document.querySelector('#estado')
const cep = <HTMLSelectElement>document.querySelector('#cep')
const descricao = <HTMLSelectElement>document.querySelector('#descricao')
let botaoCadastra = <HTMLElement>document.querySelector('.botao_cadastrar')
let link = document.querySelector('#link') as HTMLAnchorElement

console.log(link)

botaoCadastra.addEventListener('click', () => {
  cadastraUsuario()
})

async function cadastraUsuario() {
  let response
  let json
  try{
    event?.preventDefault()
    let url = "http://localhost:8080/candidatos"

    const valida = validaCandidato(
      nome.value,
      email.value,
      cpf.value,
      idade.value,
      estado.value,
      cep.value,
      descricao.value,
    )

    const body = {
      name: nome.value,
      email: email.value,
      cpf: cpf.value,
      estado: estado.value,
      cep: cep.value,
      descricao: descricao.value
    }

    response = await fetch(url, {
      method: 'POST',
      headers: {
        'Content-type': 'application/json; charset=utf-8',
      },
      body: JSON.stringify(body),
    })

    json = await response.json()

    console.log(body)
  }catch(error){
    json = null
    console.log(error)
  }

}


function validaCandidato (
  novoNome: string,
  novoEmail: string,
  novoCpf: string,
  novaIdade: string,
  novoEstado: string,
  novoCep: string,
  novaDescricao: string,
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
    alert('Nome inválido!')
    return false
  } else if (!regexEmail.test(novoEmail)) {
    alert('Email inválido!')
    return false
  } else if (!regexCpf.test(novoCpf)) {
    alert('Cpf inválido!')
    return false
  } else if (!regexIdade.test(novaIdade)) {
    alert('Idade inválida!')
    return false
  } else if (!regexEstado.test(novoEstado)) {
    alert('Estado inválido!')
    return false
  } else if (!regexCep.test(novoCep)) {
    alert('Cep inválido!')
    return false
  } else if (!regexDescricao.test(novaDescricao)) {
    alert('Descrição inválida!')
  } else {
    link.href = '../perfilCandidato/perfilCandidato.html'
    return true
  }
}


