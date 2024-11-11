# Usa a imagem oficial do Python versão 3.6 como a imagem base
FROM python:3.6

# Define o mantenedor da imagem, útil para identificar quem criou ou mantém
LABEL maintainer 'Felipe Leal aluno Cod3r'

# Configura o Python para rodar em modo unbuffered, o que é recomendado em ambientes de containers
ENV PYTHONUNBUFFERED 1

# Instala o pacote redis usando pip
RUN pip install redis

# Define o ponto de entrada padrão do container; isso faz com que qualquer container iniciado a partir desta imagem execute o Python
ENTRYPOINT [ "/usr/local/bin/python" ]
