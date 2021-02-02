import { UserPage } from './user.po';


describe('workspace-project usuários', () => {
    let pagina: UserPage;

    beforeEach(() => {
        pagina = new UserPage;
    });

    it('deve navegar pelos usuários', () => {
        pagina.navegarParaUsuarios();

        expect(pagina.obterTextoTituloPaginaUsuario()).toEqual('Pagamentos');
    });

    it('deve existir card usuários', () => {
        expect(pagina.obterListaUsuarios().isPresent()).toEqual(true);
    })

    it('existem usuários', () => {
        expect(pagina.existemUsuariosCadastrados()).toBe(true);
    })
})