


function CriaPDF() {
    var d = document.getElementById("des").value;
    var r = document.getElementById("re").value;
    var p = document.getElementById("pa").value;
    var g = document.getElementById("ge").value;
    var da = document.getElementById("dat").value;
    var style = "<style>";
    style = style + "table {width: 100%;font: 20px Calibri;}";
    style = style + "table, th, td {border: solid 1px #DDD; border-collapse: collapse;";
    style = style + "padding: 2px 3px;text-align: center;}";
    style = style + "</style>";
    // CRIA UM OBJETO WINDOW
    var win = window.open('', '', 'height=700,width=700');
    win.document.write('<html><head>');
    win.document.write('<title>descrição de projeto</title>');   // <title> CABEÇALHO DO PDF.
    win.document.write(style);                                     // INCLUI UM ESTILO NA TAB HEAD
    win.document.write('</head>');
    win.document.write('<body>');
    win.document.write(d);      
    win.document.write('<br>');
    win.document.write(r);
    win.document.write('<br>');                          // O CONTEUDO DA TABELA DENTRO DA TAG BODY
    win.document.write(p);
    win.document.write('<br>');
    win.document.write(g);
    win.document.write('<br>');
    win.document.write(da);
    win.document.write('</body></html>');
    win.document.close(); 	                                         // FECHA A JANELA
    win.download();                                                            // IMPRIME O CONTEUDO
}
