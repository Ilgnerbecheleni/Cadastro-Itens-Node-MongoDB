const btninicio = $('#btn-inicio');
const btnfrmcliente = $('#btn-frm-cliente');
const btnfrmitem = $('#btn-frm-item');
const btnconsulta = $('#btn-consulta');

const abaInicio = $('#aba-inicio');
const abacliente = $('#aba-frm-cliente');
const abaitem = $('#aba-frm-item');
const abaconsulta = $('#aba-consulta');


let user = $('#user-name');
let botoes = document.querySelectorAll('.side-items > .nav-item');
let abas = document.querySelectorAll('#section-abas > div');
console.log(botoes);

btninicio.click(() => {
    alternarAba(0);
    alternarbtn(0)
});

btnfrmcliente.click(() => {
    alternarAba(1);
    alternarbtn(1)
});

btnfrmitem.click(() => {
    alternarAba(2);
    alternarbtn(2)
});

btnconsulta.click(() => {
    alternarAba(3);
    alternarbtn(3)
});



function alternarAba(id) {

    abas.forEach((item, index) => {
        if (index == id) {
            item.classList.remove('hidden');
        } else {
            item.classList.add('hidden');
        }
        console.log(item)
    })

}


function alternarbtn(id) {

    botoes.forEach((item, index) => {
        if (index == id) {
            item.classList.add('selected');
        } else {
            item.classList.remove('selected');
        }
        console.log(item)
    })


}

