function tabelaMultiplicacao(n) {
    let tabela = [];
    for (let i = 0; i <= n; i++) {
            tabela[i] = []
        for (let a = 0; a <= n; a++) {
            tabela[i][a] = a*i
        }
    }
    console.table(tabela)
}