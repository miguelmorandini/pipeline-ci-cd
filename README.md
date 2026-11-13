# 🏀 Contador de Basquete — Pipeline CI/CD

![Node.js CI](https://github.com/miguelmorandini/pipeline-ci-cd/actions/workflows/ci.yml/badge.svg)
![GitHub Pages](https://github.com/miguelmorandini/pipeline-ci-cd/actions/workflows/pages.yml/badge.svg)
![License: ISC](https://img.shields.io/badge/License-ISC-blue.svg)

Aplicação web simples e responsiva de **Contador de Basquete** desenvolvida com HTML, CSS e JavaScript puro, estruturada para demonstrar um fluxo completo de **Integração Contínua (CI)** e **Entrega Contínua (CD)** utilizando **GitHub Actions**, **Jest** e **GitHub Pages**.

🔗 **Demo ao vivo:**
- **GitHub Pages (público):** [miguelmorandini.github.io/pipeline-ci-cd](https://miguelmorandini.github.io/pipeline-ci-cd/)
- **Vercel:** [pipeline-ci-cd-miguel-morandinis-projects.vercel.app](https://pipeline-ci-cd-miguel-morandinis-projects.vercel.app/)

---

## ✨ Funcionalidades

- **Placar em tempo real:** Contagem individual de pontuação para dois times (**Time A** e **Time B**).
- **Nomes personalizáveis:** Campos de texto para definir o nome de cada equipe durante a partida.
- **Pontuação rápida:** Botões dedicados para adicionar **+1 ponto** (lance livre) e **+3 pontos** (arremesso de três).
- **Testes automatizados:** Suíte de testes unitários com **Jest** validando a lógica de pontuação.
- **Pipeline CI/CD:** Execução automática de testes em cada `push` ou `pull_request` e publicação automática no **GitHub Pages**.

---

## 🛠️ Tecnologias Utilizadas

- **Front-end:** HTML5, CSS3, JavaScript (ES6+)
- **Testes:** [Jest](https://jestjs.io/)
- **CI/CD:** [GitHub Actions](https://github.com/features/actions)
- **Hospedagem:** [GitHub Pages](https://pages.github.com/)

---

## 📁 Estrutura do Projeto

```text
pipeline-ci-cd/
├── .github/
│   └── workflows/
│       ├── ci.yml          # Workflow de Integração Contínua (instala dependências e roda testes)
│       └── pages.yml       # Workflow de Deploy Contínuo no GitHub Pages
├── src/
│   └── index.js            # Lógica do placar e manipulação do DOM
├── tests/
│   └── index.test.js       # Testes unitários com Jest
├── index.html              # Estrutura da página web
├── style.css               # Estilização da interface
├── package.json            # Configurações e scripts do projeto
└── README.md               # Documentação do projeto
```

---

## 🚀 Como Executar Localmente

### Pré-requisitos
- [Node.js](https://nodejs.org/) (v14 ou superior)
- Navegador web moderno

### Passo a passo

1. **Clone o repositório:**
   ```bash
   git clone https://github.com/miguelmorandini/pipeline-ci-cd.git
   cd pipeline-ci-cd
   ```

2. **Abra a aplicação no navegador:**
   Basta abrir o arquivo `index.html` diretamente no seu navegador ou usar uma extensão como o *Live Server*.

3. **Instale as dependências e execute os testes:**
   ```bash
   npm install
   npm test
   ```

---

## ⚙️ Pipeline CI/CD

O projeto conta com dois workflows configurados em `.github/workflows/`:

1. **Node.js CI (`ci.yml`)**:
   - Disparado automaticamente em eventos de `push` e `pull_request`.
   - Instala as dependências com `npm install` e executa os testes unitários com `npm test`.
2. **Deploy to GitHub Pages (`pages.yml`)**:
   - Disparado em cada `push` na branch `main`.
   - Empacota os arquivos estáticos e publica automaticamente no GitHub Pages.

---

## 👤 Autor

**Miguel Morandini**
- GitHub: [@miguelmorandini](https://github.com/miguelmorandini)
- E-mail: miguel_mmorandini@outlook.com

---

## 📄 Licença

Este projeto está sob a licença **ISC**.
