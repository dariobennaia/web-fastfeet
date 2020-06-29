# Estagio de build
FROM node:12-slim as build
# faz da pasta 'app' o diretório atual para trabalho
WORKDIR /app
# copia os arquivos 'package.json' e 'package-lock.json' (se disponível)
COPY package*.json ./
COPY yarn* ./
# instala dependências da api
RUN yarn install
# copia arquivos e pastas para o diretório atual de trabalho (pasta 'app')
COPY . .
# Builda o projeto
RUN yarn build


# Estagio de execução da aplicação
FROM nginx:stable-alpine
# Copia a aplicação buildada
COPY --from=build /app/build /usr/share/nginx/html
# Arquivo de configuração do nginx
COPY ./nginx/nginx.conf /etc/nginx/conf.d/default.conf
# Inicia a aplicação
CMD ["nginx", "-g", "daemon off;"]