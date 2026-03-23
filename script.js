const modal = document.getElementById('modal-compra');
const modalNome = document.getElementById('modal-produto-nome');
const btnConfirmar = document.getElementById('confirmar-compra');
const fecharX = document.querySelector('.fechar-modal');

// Abrir Modal
document.querySelectorAll('.btn-comprar').forEach(botao => {
    botao.addEventListener('click', () => {
        const nome = botao.getAttribute('data-nome');
        modalNome.innerText = nome;
        modal.style.display = 'flex';
    });
});

// Fechar Modal (No X ou Fora dele)
fecharX.addEventListener('click', () => modal.style.display = 'none');
window.addEventListener('click', (e) => {
    if (e.target === modal) modal.style.display = 'none';
});

// Ação de Compra
btnConfirmar.addEventListener('click', () => {
    const qtd = document.getElementById('quantidade').value;
    const metodo = document.getElementById('forma-compra').value;
    const produto = modalNome.innerText;

    if (metodo === 'whatsapp') {
        const msg = encodeURIComponent(`Olá! Quero pedir ${qtd} unidades do esmalte ${produto}.`);
        window.open(`https://wa.me/5511999999999?text=${msg}`, '_blank');
    } else {
        alert("Redirecionando para o site...");
    }
    modal.style.display = 'none';
});
document.querySelectorAll('.btn-lux').forEach(button => {
    button.addEventListener('click', (e) => {
        e.preventDefault();
        
        // Pega os dados do card que foi clicado
        const card = button.closest('.product-card');
        const nome = card.querySelector('h3').innerText;
        const imagem = card.querySelector('img').src;
        const sku = card.querySelector('span').innerText;
        const desc = card.querySelector('p').innerText;

        // Preenche o modal
        document.getElementById('titulo-modal').innerText = nome;
        document.getElementById('img-modal').src = imagem;
        document.getElementById('sku-modal').innerText = sku;
        document.getElementById('desc-modal').innerText = desc + " - Este esmalte em gel oferece brilho espelhado e fixação de até 15 dias.";
        
        // Link do WhatsApp
        const msg = encodeURIComponent(`Olá! Quero saber mais sobre o esmalte ${nome} (${sku})`);
        document.getElementById('link-whatsapp').href = `https://wa.me/5511999999999?text=${msg}`;

        // Abre o modal
        document.getElementById('modal-detalhe').style.display = 'flex';
    });
});

// Fechar Modal
document.querySelector('.fechar-modal').onclick = () => {
    document.getElementById('modal-detalhe').style.display = 'none';
};

window.onclick = (event) => {
    if (event.target == document.getElementById('modal-detalhe')) {
        document.getElementById('modal-detalhe').style.display = 'none';
    }
};