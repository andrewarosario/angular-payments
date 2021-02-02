import { browser, by, element, protractor, $ } from 'protractor';

export class RealizarPagamento{
    
    navegarParaPagamento(){
        return browser.get('/pagamento');
    }

    obterTextoTituloPagamento(){
        return element(by.css('app-pagamento h5')).getText() as Promise<string>;
    }

    campoValor = element(by.name('valuePay'));
    campoCvv = element(by.name('cvv'));
    campoExpiry_date = element(by.name('expiry_date'));
    campoDestination_user_id= element(by.name('destination_user_id'));
    campoNumCartao = element(by.id('dataCard'));
    selecionarCartao(opcao: string){
        this.campoNumCartao.all(by.css('option[value="' + opcao + '"]')).click();
    }

    botaoPagar = element(by.css('app-transaction-btn a'));

    obterElementoSelecionado = () => browser.driver.switchTo().activeElement();

    esperar = (milisegundos: number) => {
        browser.sleep(milisegundos);
    }

    mensagemPagamentoRealizadoComSucesso(){
        var alertaSucesso = element(by.css('app-transaction-btn h4'));
        return alertaSucesso;
    }
}