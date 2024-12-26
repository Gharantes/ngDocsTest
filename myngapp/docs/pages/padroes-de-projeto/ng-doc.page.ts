import { NgDocPage } from '@ng-doc/core';
import PadroesProjetoCategory from '../../categories/padroes-projeto/ng-doc.category';

/**  Testing Page Description */
const PadroesDeProjetoPage: NgDocPage = {
	title: `O que são Padrões de Projeto`,
	route: 'padroes-projeto',
	mdFile: './index.md',
	category: PadroesProjetoCategory,
	order: 1
};
export default PadroesDeProjetoPage