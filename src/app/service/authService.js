import LocalStorageService from "./localstorageService";

import jwt from "jsonwebtoken";
import ApiService from "../apiservice";

export const COORDENADOR_LOGADO = "_coordenador_logado";
export const TOKEN = "access_token";

export default class AuthService {
  static isCoordenadorAutenticado() {
    const token = LocalStorageService.obterItem(TOKEN);
    if (!token) {
      return false;
    }
    const decodedToken = jwt.decode(token);
    const expiration = decodedToken.exp

    const isTokenInvalido = Date.now() >= expiration * 1000;

    return !isTokenInvalido;
  }

  static removerUsuarioAutenticado() {
    LocalStorageService.removerItem(COORDENADOR_LOGADO);
    LocalStorageService.removerItem(TOKEN);
  }

  static logar(coordenador, token) {
    LocalStorageService.adicionarItem(COORDENADOR_LOGADO, coordenador);
    LocalStorageService.adicionarItem(TOKEN, token);
    ApiService.registrarToken(token);
  }

  static obterCoordenadorAutenticado() {
    return LocalStorageService.obterItem(COORDENADOR_LOGADO);
  }

  static refreshSession() {
    const token = LocalStorageService.obterItem(TOKEN);
    const coordenador = AuthService.obterCoordenadorAutenticado();
    AuthService.logar(coordenador, token);    
    return coordenador;
  }
}
