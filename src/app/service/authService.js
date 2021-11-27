import LocalStorageService from './localstrorageService';

export const COORDENADOR_LOGADO = '_coordenador_logado';

export default class AuthService{

    static isCoordenadorAutenticado(){
        const coordenador = LocalStorageService.obterItem(COORDENADOR_LOGADO);
        return coordenador && coordenador.id
    }

    static removerUsuarioAutenticado(){
        LocalStorageService.removerItem(COORDENADOR_LOGADO);        
    }

    static logar(coordenador){
        LocalStorageService.adicionarItem(COORDENADOR_LOGADO, coordenador);
    }

    static obterCoordenadorAutentica() {
        return LocalStorageService.obterItem(COORDENADOR_LOGADO);
    }
}

