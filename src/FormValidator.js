import validador from 'validator';

/**
 *
 * @constructor validacoes é um array específico do formulário com regras de validação
 */
class FormValidator {
    constructor(validacoes) {
        this.validacoes = validacoes;
    }
    /**
     * itera pelo array de regras de validação e constrói um objeto validacao e retorna-o
     *
     * @param {*} state
     */
    valida(state) {

        let validacao = this.valido();

        this.validacoes.forEach(({ campo, args = [], metodo, validoQuando, message }) => {
            if (!validacao[campo].isInvalid) {
                const campoValor = state[campo.toString()];
                const metodoValidacao = typeof metodo === 'string' ? validador[metodo] : metodo;

                if (metodoValidacao(campoValor, ...args, state) !== validoQuando) {
                    validacao[campo] = {
                        isInvalid: true,
                        message
                    }
                    validacao.isValid = false;
                }
            }
        });

        return validacao;
    }
    /**
     * cria um objeto validaçao para um form válido
     */
    valido() {
        const validacao = {};

        for (const { campo } of this.validacoes) {
            validacao[campo] = { isInvalid: false, message: '' };
        }
        return { isValid: true, ...validacao };
    }
}
export default FormValidator;
