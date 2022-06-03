import ListaDePessoas from '../../pessoas/listaDePessoas.js'

const nome = <HTMLSelectElement>document.querySelector('.nome')
const email = <HTMLSelectElement>document.querySelector('.email')
const cnpj = <HTMLSelectElement>document.querySelector('.cnpj')
const pais = <HTMLSelectElement>document.querySelector('.pais')
const cep = <HTMLSelectElement>document.querySelector('.cep')
const descricao = <HTMLSelectElement>document.querySelector('.descricao')
const botaoLike = <HTMLSelectElement>document.querySelector('.botao_like')
const botaoDeslike = <HTMLSelectElement>document.querySelector('.botao_deslike')

const lista: any = []

botaoLike.addEventListener('click', () => trocaEmpresa())
botaoDeslike.addEventListener('click', () => trocaEmpresa())

async function getContent () {
  let lista: {
    name: string
    email: string
    cnpj: string
    pais: string
    cep: string
    descricao: string
  }[] = []

  try {
    const response = await fetch('http://localhost:8080/zghero/empresas')
    const data = await response.json()

    data.forEach(
      (empresa: {
        name: string
        email: string
        cnpj: string
        pais: string
        cep: string
        descricao: string
      }) => {
        lista.push(empresa)

      }
    )
  } catch (error) {
    console.log(error)
  }
  return lista
}

function trocaEmpresa () {
  getContent().then(empresa => {
    var numAleatorio: number = Math.floor(Math.random() * empresa.length)

    nome.textContent = 'Nome: ' + empresa[numAleatorio].name
    email.textContent = 'Email: ' + empresa[numAleatorio].email
    cnpj.textContent = 'Cnpj: ' + empresa[numAleatorio].cnpj
    pais.textContent = 'Pais: ' + empresa[numAleatorio].pais
    //cep.textContent = 'Cep: ' + empresa[numAleatorio].cep
    descricao.textContent = 'Descrição: ' + empresa[numAleatorio].descricao
  })
}

trocaEmpresa()
