import ApiService from "../apiservice";

export default class FuncionarioService extends ApiService{

    constructor(){
        super('/api/funcionarios')
    }

    consultar(funcionarioFiltro){
        let params = '?';

        if(funcionarioFiltro.nome){
            params = `?nome=${funcionarioFiltro.nome}`
        }

        if(funcionarioFiltro.cpf){
            params = `${params}&cpf=${funcionarioFiltro.cpf}`
        }

        if(funcionarioFiltro.cep){
            params = `${params}&cep=${funcionarioFiltro.cep}`
        }

        if(funcionarioFiltro.telefone){
            params = `${params}&telefone=${funcionarioFiltro.telefone}`
        }

        if(funcionarioFiltro.coordenador){
            params = `${params}&coordenador=${funcionarioFiltro.coordenador}`
        }        
        
        return this.get(params)
    }

}