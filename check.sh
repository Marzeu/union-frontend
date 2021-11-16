#!/bin/bash

verifica_mysql() 
{
    #service mysql status        
    ativo="Active: active (running)"
    status=$(service mysql status | grep "Active: active (running)")    

    if [[ $status = *"$ativo"* ]]; then
        
        echo -e "Active: \033[0;32m active (running) "

    else

        echo -e "Status: \033[0;31m  "Server shutdown" "
        echo "Iniciando MYSQL"
        $(sudo service mysql start)
        service mysql status

    fi
}

verifica_node()
{
    echo "Node:"
    node --version
}

verifica_yarn()
{
    echo "Yarn:"
    yarn --version
}

verifica_npm()
{
    echo "Npm:"
    npm --version
}

verifica_mysql
verifica_node
verifica_yarn
verifica_npm
