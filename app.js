function pesquisar() {
  let input = document.getElementById("input-pesquisa").value;
  let resultados = "";
  let sectionPesquisa = document.getElementById("resultados-pesquisa");

  if (input == "") {
    sectionPesquisa.innerHTML = `
        <div class="item-resultado">
                <p class="descricao-meta">Nada encontrado</p>
        </div>    
    `;
    return;
  }

  input = input.toLowerCase();

  for (let dado of dados) {
    if (dado.id.includes(input)) {
      resultados += `
        <div class="item-resultado">
                <h2>
                        <a href="#" target="_blank">${dado.nome}</a>
                </h2>
                <p class="descricao-meta">${dado.descricao}</p>
                <a href=${dado.link} target="_blank">Mais informações</a>
        </div>
        `;
    }
  }
  sectionPesquisa.innerHTML = resultados;
}
