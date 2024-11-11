# imagem base
FROM debian
# Não altera o funcionamento do container. Adicionando metadados a imagem (documentação e informação) - é possivel ver essa informação no inspect
LABEL maintainer 'Aluno Cod3r <aluno at cod3r.com.br>'
# Argumento para passar na hora do build da imagem (valor padrão é files)
ARG S3_BUCKET=files
# Definindo variavel de ambiente disponíveis no container. Uteis pois podem ser acessadas por processos que serão executados no container
ENV S3_BUCKET=${S3_BUCKET}

# docker image build -t ex-build-arg .
# docker container run ex-build-arg bash -c 'echo $S3_BUCKET' -> rodando o container e rodando um comando no bash do container para ver a variavel de ambiente S3_BUCKET

# PARA PASSAR UM ARGUMENTO SERIA DA SEGUINTE FORMA:
# docker image build --build-arg S3_BUCKET=myapp -t ex-build-arg .