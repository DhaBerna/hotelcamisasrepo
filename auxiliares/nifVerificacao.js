function verificarNIF() {
    const inputNIF = document.getElementById('nif-input');
    const botaoCatalogo = document.getElementById('link-catalogo');
    const valor = inputNIF.value;

    // 1. Caso AMARELO: Se o utilizador escreveu letras
    if (isNaN(valor) && valor !== "") {
        inputNIF.style.color = "#d4af37"; // Amarelo/Dourado (para ler bem no branco)
        botaoCatalogo.classList.remove('btn-ativo'); // Bloqueia o botão
    } 
    
    // 2. Caso VERDE: Número válido (9 dígitos e no intervalo correto)
    else if (valor.length === 9 && valor >= "111111111" && valor <= "999999999") {
        inputNIF.style.color = "#28a745"; // Verde
        botaoCatalogo.classList.add('btn-ativo'); // DESBLOQUEIA o botão
    } 
    
    // 3. Caso VERMELHO: Se forem números inválidos (ex: 000000000 ou menos de 9 dígitos)
    else if (valor !== "") {
        inputNIF.style.color = "#ff0000"; // Vermelho
        botaoCatalogo.classList.remove('btn-ativo'); // Bloqueia o botão
    }
    
    // Se estiver vazio, volta à cor padrão
    else {
        inputNIF.style.color = "black";
        botaoCatalogo.classList.remove('btn-ativo');
    }
}