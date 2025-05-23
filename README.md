
# React Search List

Este projeto é uma aplicação em React que exibe uma lista de dados de banda e músicas com **funcionalidade de busca** em tempo real. À medida que o usuário digita no campo de pesquisa, a lista é filtrada automaticamente com base no texto informado.

## 🧩 Funcionalidades

- Busca dinâmica em uma lista de dados.
- Filtragem instantânea sem necessidade de recarregar a página.
- Interface simples e responsiva.

## 🚀 Tecnologias Utilizadas

- [React](https://reactjs.org/)
- [JavaScript (ES6+)](https://developer.mozilla.org/en-US/docs/Web/JavaScript)
- [Yarn](https://yarnpkg.com/)
- [react-scripts](https://www.npmjs.com/package/react-scripts)

## 📦 Como rodar o projeto

### Pré-requisitos

- **Node.js 16 ou 18 (com `--openssl-legacy-provider`)**
- **Yarn** instalado globalmente

### 1. Clone o repositório

```bash
git clone https://github.com/ivannatech/react-search-list.git
cd react-search-list
```

### 2. Instale as dependências

```bash
yarn install
```

### 3. Inicie o servidor de desenvolvimento

#### Se estiver usando o **PowerShell**, execute:

```powershell
$env:NODE_OPTIONS="--openssl-legacy-provider"
yarn start
```

#### Se estiver usando o **Prompt de Comando (cmd.exe)**:

```cmd
set NODE_OPTIONS=--openssl-legacy-provider && yarn start
```

O projeto será iniciado em: [http://localhost:3000](http://localhost:3000)

---

## 🧯 Erros comuns e soluções

### ❌ `ERR_PACKAGE_PATH_NOT_EXPORTED` ao iniciar

**Causa**: Versão do Node.js muito nova (ex: 22+).

**Solução**: Use Node.js 18 ou 16 via [nvm](https://github.com/coreybutler/nvm-windows/releases) (Node Version Manager para Windows).

### ❌ `error:0308010C:digital envelope routines::unsupported`

**Causa**: O Webpack tem problemas com OpenSSL no Node.js 17+.

**Soluções**:

- Defina a variável `NODE_OPTIONS` com `--openssl-legacy-provider`:
  - PowerShell: `$env:NODE_OPTIONS="--openssl-legacy-provider"`
  - CMD: `set NODE_OPTIONS=--openssl-legacy-provider`
- Ou use Node.js 16 com `nvm`.

---

## 🤝 Contribuições

Contribuições são bem-vindas! Sinta-se à vontade para abrir issues ou pull requests com melhorias, correções ou novas funcionalidades.

---

## 📄 Licença

Este projeto está licenciado sob a [MIT License](LICENSE).

---

## ✨ Desenvolvido por

Ivanna • [GitHub](https://github.com/ivannatech)
