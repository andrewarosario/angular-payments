import { RealizarPagamento } from './pay.po';

describe('workspace-project pagamento', () => {
    let pagina: RealizarPagamento;

    beforeEach(() => {
        pagina = new RealizarPagamento();
    });
    
    it('deve navegar para pagamento', () => {
        pagina.navegarParaPagamento();
        expect(pagina.obterTextoTituloPagamento()).toEqual('Pagamentos');
    })

    it('deve preencher formulário', () => {
        pagina.campoValor.sendKeys('40');
        pagina.campoCvv.sendKeys('123');
        pagina.campoExpiry_date.sendKeys('100');
        pagina.campoDestination_user_id.sendKeys('1');
        pagina.selecionarCartao('0');

        expect(pagina.campoValor.getAttribute('value')).toEqual('40');
        expect(pagina.campoCvv.getAttribute('value')).toEqual('123');
        expect(pagina.campoExpiry_date.getAttribute('value')).toEqual('100');
        expect(pagina.campoDestination_user_id.getAttribute('value')).toEqual('1');
        expect(pagina.campoNumCartao.getAttribute('value')).toEqual('0');
    })

    it('deve realizar pagamento', () => {
        pagina.botaoPagar.click();
        pagina.esperar(2000);
        expect(pagina.campoValor.getAttribute('value')).toEqual('');
        expect(pagina.campoCvv.getAttribute('value')).toEqual('');
        expect(pagina.campoExpiry_date.getAttribute('value')).toEqual('');
        expect(pagina.campoDestination_user_id.getAttribute('value')).toEqual('');
        expect(pagina.campoNumCartao.getAttribute('value')).toEqual('');
    })

    it('pagamento realizado com sucesso', () => {
        expect(pagina.mensagemPagamentoRealizadoComSucesso().isPresent()).toBe(true);
    })
})