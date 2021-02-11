 
function gera(){
    var desc = document.getElementById("desc").value
    var dev = document.getElementById("dev").value
    var patreon = document.getElementById("patreon").value
    var cliente = document.getElementById("cliente").value
    var gerente = document.getElementById("gerente").value
    var data = document.getElementById("data").value
    var g = document.getElementById("g").value

    var janela = window.open('', '', 'width=800,heigth=600')
    janela.document.write('<html><head>')
    janela.document.write('<title>PDF</title></head>')
    janela.document.write('<body>')
    janela.document.write('<h2><center>TAP (TERMO DE ABERTURA DO PROJETO)</center></h2></br></br>')
    janela.document.write('<strong>Título do Projeto ou Resumo do Objetivo:</strong></br>')
    janela.document.write(desc + '</br></br></br>')
    janela.document.write('<strong>Patrocinadores : </strong></br>')
    janela.document.write( patreon )
    
    janela.document.write('<table  border-collapse: "collapse" border=:" 1px solid black"')
    janela.document.write('<tr><td  style="padding: 55px;"><strong >Desenvolvedores :</strong></td>')
    janela.document.write('<td><center>'+ dev + '</center></td></br>')
    janela.document.write('</tr>')
   
    janela.document.write('<tr>')
    janela.document.write('<td style="padding: 15px";><strong><center>Gerente :</center></strong></td>')
    janela.document.write('<td><center>'+ gerente + '<center></td></br>')
    janela.document.write('</tr>')

    janela.document.write('<tr>')
    janela.document.write('<td style="padding: 15px";><strong><center>Cliente :</center></strong></td>')
    janela.document.write('<td><center>'+ cliente + '<center></td></br>')
    janela.document.write('</tr>')

    janela.document.write('<tr>')
    janela.document.write('<td style="padding: 15px";><strong><center>Data :</center></strong></td>')
    janela.document.write('<td><strong><center>'+ data + '<center></strong></td></br>')
    janela.document.write('</tr>')

    janela.document.write('</br>')
    janela.document.write('</table>')
   
    janela.document.write(g)
    janela.document.write('</body></html>')
    janela.document.close()
    janela.downloads()
    
}