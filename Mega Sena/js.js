
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
    var quantidade_de_jogos = qnt.value; 
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