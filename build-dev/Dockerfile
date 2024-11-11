FROM python:3.6
LABEL maintainer 'Aluno Cod3r'
# Contatenando vários comandos para criar uma layer apenas 
RUN useradd www && \
    mkdir /app && \
    mkdir /log && \
    chown www /log 

USER www
VOLUME /log
WORKDIR /app
EXPOSE 8000

ENTRYPOINT ["/usr/local/bin/python"]
CMD ["run.py"]

# COMANDOS EXECUTADOS:
    # docker image build -t ex-build-dev .
    # docker container run -it -v ${PWD}:/app -p 80:8000 --name python-server ex-build-dev

# useradd -> cria um novo usuário. Isso melhora a segurança, evitando que a aplicação seja executada com privilégios de root.
# mkdir /app -> cria o diretório /app, que geralmente é para armazenar codigos da aplicação
# mkdir /log -> cria o diretório /log, destinado a armazenar arquivos de log da aplicação.
# chown www /log -> altera a propriedade do diretório /log para o usuário www, garantindo que apenas esse usuário possa escrever logs.
# USER www -> define o usuário padrão para executar os comandos subsequentes
# VOLUME /log -> indica que o diretorio log deve ser montado como um volume
# WORKDIR /app -> define o diretório de trabalho dentro do contêiner. Estabelece /app como o diretório atual onde os comandos subsequentes serão executados

# ENTRYPOINT ["/usr/local/bin/python"] -> define o ponto de entrada do contêiner. Especifica que o comando padrão a ser executado quando o contêiner iniciar é o interpretador Python localizado em /usr/local/bin/python
# CMD ["run.py"] -> fornece argumentos padrão para o comando definido no ENTRYPOINT. Indica que, por padrão, o script run.py será passado como argumento para o Python. Ou seja, quando o contêiner iniciar, ele executará python run.py

# OBS: O servidor python criado serve automaticamente paginas html no diretorio atual ao acessar localhost