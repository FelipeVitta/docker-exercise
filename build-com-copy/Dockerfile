FROM nginx:latest
LABEL maintainer 'Aluno Cod3r'
# Esse comando cria o conteudo.hmtl se ele não existir
RUN echo '<h1>Sem conteudo</h1>' > usr/share/nginx/html/conteudo.html
# Qualquer arquivo .html que esteja na pasta do Dockerfile será enviada para >
COPY *.html /usr/share/nginx/html/