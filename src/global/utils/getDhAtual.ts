import { format } from 'date-fns'
import pt from 'date-fns/locale/pt-BR'

function getDhAtual() {
	const dhAtual = format(new Date(), 'dd/MM/yyyy HH:mm:ss', { locale: pt })

	return dhAtual
}

export {
	getDhAtual
}