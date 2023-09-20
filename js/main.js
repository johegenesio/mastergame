function matriz() {
    const a1 = document.getElementById('a1').value
    const a2 = document.getElementById('a2').value
    const a3 = document.getElementById('a3').value
    const b1 = document.getElementById('b1').value
    const b2 = document.getElementById('b2').value
    const b3 = document.getElementById('b3').value
    const c1 = document.getElementById('c1').value
    const c2 = document.getElementById('c2').value
    const c3 = document.getElementById('c3').value
    const matriz = document.getElementById('matriz')
    const resultado = document.getElementById('resultado')
    const title = document.getElementById('title')
    const btn_C = document.getElementById('btn_C')
    const btn_V = document.getElementById('btn_V')

    const calculoAdicao = (a1 * b2 * c3) + (a2 * b3 * c1) + (a3 * b1 * c2)
    const calculoSubtracao = (a3 * b2 * c1) - (a2 * b1 * c3) - (a1 * b3 * c2)
    const calcular = calculoAdicao + calculoSubtracao
    matriz.style.display = 'none'
    resultado.style.display = 'flex'
    title.style.display = 'none'
    resultado.innerHTML = `<h1 class="titulo3">RESULTADO!</h1><h2 class="text-subt">O VALOR FINAL DO SEU CÁLCULO É:</h2><h1 class="titulo2">${calcular}</h1>`
    btn_C.style.display = 'none'
    btn_V.style.display = 'flex'
}

function voltar() {
    window.location.reload(true);
}