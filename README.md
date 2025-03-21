# Finance System

Projeto de controle financeiro simples, que permite gerenciar receitas, despesas, categorias e visualizar um resumo em forma de gráfico.

## Índice
- [Visão Geral](#visão-geral)
- [Funcionalidades](#funcionalidades)
- [Tecnologias Utilizadas](#tecnologias-utilizadas)
- [Como Executar](#como-executar)
- [Estrutura de Pastas](#estrutura-de-pastas)
- [Contribuição](#contribuição)
- [Licença](#licença)

---

## Visão Geral
Este projeto **Finance System** foi desenvolvido para controlar receitas e despesas de forma simples, permitindo que o usuário, adicione transações (com data, título, valor, status de pagamento), visualize um gráfico de resumo e salve tudo no **localStorage**.

---

## Funcionalidades
1. **Cadastro de Transações**  
   - Adicionar despesas e receitas.  
   - Escolher data, categoria, título e valor.

2. **Resumo Financeiro**  
   - Exibição de total de receitas, despesas e balanço.  
   - Gráfico de barras para visualizar comparativo entre receitas e despesas.

3. **Persistência de Dados**  
   - Todos os dados são salvos no `localStorage`, garantindo que não sejam perdidos ao recarregar a página.

4. **Tabela de Transações**  
   - Listagem de todas as transações filtradas por mês.  
   - Marcar transações como pagas (checkbox).

---

## Tecnologias Utilizadas
- **React** (Hooks, Context API, Components)  
- **TypeScript** (tipagem estática)  
- **styled-components** (estilização)  
- **Chart.js** + **react-chartjs-2** (gráficos)  
- **localStorage** (persistência de dados no navegador)

---

## Como Executar
1. **Clonar o Repositório**  
   ```bash
   git clone https://github.com/usuario/finance-system.git
   cd finance-system
2. **Instalar Dependências**
  npm install
  # ou
  yarn
3. **Iniciar o projeto**
  npm run dev
  # ou
  yarn dev
4.**Acessar no Navegador**
Abra http://localhost:3000 para ver a aplicação rodando.

## Contribuição
1. Faça um fork do repositório.
2. Crie uma branch para sua feature (git checkout -b feature/nova-feature).
3. Faça commit das suas alterações (git commit -m 'Adiciona nova feature').
4. Faça push da sua branch (git push origin feature/nova-feature).
5. Abra um Pull Request para o repositório principal.

# Licença
# Este projeto está licenciado sob a licença *MIT*.
