
const btn = document.getElementById("btn")
const slv = document.getElementById("slv")
const qnt = document.getElementById("game")
const diiv = document.getElementById("numeros")
const num = document.getElementById("qnt")


btn.addEventListener("click", () => {

    if (num.value < 6) {
        alert("Numero tem q ser maior que 6")
        num.value = 0
    } else if (num.value > 11) {
        alert("Não pode passar de 10")
        num.value = 0
    }

    var numeros_ignorados = [0, 100];
    var quantidade_de_jogos = qnt.value; // pode mudar a quantidade aqui
    var jogos = [];


    function gerarNumero(existentes) {
        var novoNumero = parseInt(Math.random() * 100) + 1;
        if (existentes.indexOf(novoNumero) != -1 || numeros_ignorados.indexOf(novoNumero) != -1) novoNumero = gerarNumero(existentes);
        return novoNumero;
    }

    function chaveExistente(chave) {
        var chaves = jogos.map(function (chv) {
            return chv.join();
        });
        return chaves.indexOf(chave.join()) != -1;
    }

    for (var i = 0; i < quantidade_de_jogos; i++) {
        var numeros = [];
        while (numeros.length < num.value) {
            numeros.push(gerarNumero(numeros));
        }
        numeros = numeros.sort();
        chaveExistente(numeros) ? quantidade_de_jogos++ : jogos.push(numeros);
    }

    diiv.innerHTML = JSON.stringify(jogos)

})

slv.addEventListener("click", () => {
    if (diiv.getElements(jogos).length > 0) {
        let a = document.createElement("a");
        a.href = "data:," + tbodyToCSV(diiv);
        a.download = "mega-sena.txt";
        a.click();
    } else {
        alert("Não há dados na tabela para serem salvos.");
    }
})



//Salvar arquivo
function salvarArquivo() {
  if (corpoTabela.getElementsByTagName("tr").length > 0) {
    let a = document.createElement("a");
    a.href = "data:," + tbodyToCSV(corpoTabela);
    a.download = "mega-sena.txt";
    a.click();
  } else {
    alert("N�o h� dados na tabela para serem salvos.");
  }
}

//Fun��o que carrega um arquivo de texto
function abrirArquivo() {
  if (window.File && window.FileReader && window.FileList && window.Blob) {
    let arquivoSelecionado = document.getElementById("abrir");
    arquivoSelecionado.addEventListener(
      "change",
      function (e) {
        let extensaoArquivo = /text.*/;
        let arquivoLido = arquivoSelecionado.files[0];
        if (arquivoLido.type.match(extensaoArquivo)) {
          let leitorDeArquivo = new FileReader();
          leitorDeArquivo.onload = function (e) {
            let linhas = leitorDeArquivo.result.split("\r\n");
            linhas.forEach((lin) => {
              let col = lin.split("()");
              lista = template.content.querySelectorAll("td");
              lista[0].textContent = col[0];
              lista[1].textContent = col[1];
              lista[2].textContent = col[2];
              lista[3].textContent = col[3];
              lista[4].textContent = col[4];
              lista[5].textContent = col[5];
              btUpdate.setAttribute("onclick", "alterarLinha(this)");
              btDelete.setAttribute("onclick", "excluirLinha(this)");
              lista[6].appendChild(btUpdate);
              lista[6].appendChild(btDelete);
              let novaLinha = document.importNode(template.content, true);
              corpoTabela.appendChild(novaLinha);
            });
          };
          leitorDeArquivo.readAsText(arquivoLido);
        } else {
          alert("Por favor selecione arquivo de texto");
        }
      },
      false
    );
  } else {
    alert("Arquivo(s) n�o suportado(s)");
  }
}

//Eventos principais
window.onload = abrirArquivo();