# Use a imagem oficial do Cypress com Node.js
FROM cypress/included:12.17.4

# Crie o diretório de trabalho
WORKDIR /app

# Copie os arquivos do projeto
COPY . .

# Instale as dependências
RUN npm install

# Comando padrão: execute os testes em modo headless
CMD ["npx", "cypress", "run"]