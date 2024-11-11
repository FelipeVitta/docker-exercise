#!/bin/sh

# Atualizar o pip para a versão mais recente
pip install --upgrade pip

# Instalar uma versão mais recente de psycopg2-binary para evitar problemas de dependência com glibc
pip install bottle==0.12.13 psycopg2-binary

# Instalando redis
pip install redis

# Executar o script Python
python -u sender.py