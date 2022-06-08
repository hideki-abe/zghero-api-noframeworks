const nome = <HTMLSelectElement>document.querySelector('#nome')
const lugar = <HTMLSelectElement>document.querySelector('#lugar')
const descricao = <HTMLSelectElement>document.querySelector('#descricao')
const botaoCadastra = <HTMLElement>document.querySelector('.botao_cadastrar')

botaoCadastra.addEventListener('click', () => {
    console.log("cadastrando nova vaga!")
    cadastraVaga()
    /*
    setTimeout(function() {
      location.href="../perfilEmpresa/perfilEmpresa.html"
    }, 500)
   */
  })
  
  async function cadastraVaga () {

    let response
    let json
    try {
      event?.preventDefault
      let url = "http://localhost:3000/zghero/vagas" + 
      `?name=${nome.value}&lugar=${lugar.value}&descricao=${descricao.value}`

      response = await fetch(url, {
        method: 'POST',
        headers: {
          Mode: 'no-cors',
          'Content-type': 'application/json; charset=utf-8'
        },
      })
  
      json = await response.json()

    } catch (error) {
   
    }
}