import { browser, by, element } from 'protractor';

export class UserPage{
    navegarParaUsuarios(){
        return browser.get('/pagamento');
    }

    obterTextoTituloPaginaUsuario(){
        return element(by.css('app-pagamento h5')).getText() as Promise<string>;
    }

    obterListaUsuarios(){
        return element(by.css('app-user-card h3'));
    }

    existemUsuariosCadastrados(){
        return element(by.css('app-user-card img')).isPresent();
    }
}