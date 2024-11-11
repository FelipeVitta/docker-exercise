# construindo uma imagem a partir de outra
FROM nginx:latest
# echo está sendo usado para gerar uma saída de texto, e estamos redirecionando ela para um arquivo (sobrescrevendo o index.html)
RUN echo '<h1>Hello World !</h1>' > /usr/share/nginx/html/index.html

# Depois disso no terminal fiz os seguintes comandos no diretorio atual (/primeiro-build):
# docker image build -t ex-simple-build .
# docker container run -p 80:80 ex-simple-build
# Foi criada uma imagem e ela está rodando em localhost:80