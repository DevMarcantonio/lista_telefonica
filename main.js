    // Selecione o formulário e a tabela
    const formulario = document.getElementById('formulario');
    const tabela = document.getElementById('corpo-tabela');

    // Adicione um evento de clique ao botão "Cadastrar"
    formulario.addEventListener('submit', (e) => {
    e.preventDefault();

    // Obtenha os valores do nome e telefone
    const nome = document.getElementById('nome').value;
    const telefone = document.getElementById('telefone').value;

    // Crie uma nova linha na tabela
    const linha = document.createElement('tr');
    linha.innerHTML = `
        <td>${nome}</td>
        <td>${telefone}</td>
    `;

    // Adicione a linha à tabela
    tabela.appendChild(linha);

    // Limpe os campos do formulário
    document.getElementById('nome').value = '';
    document.getElementById('telefone').value = '';
    });