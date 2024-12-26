import { NgDocPage } from '@ng-doc/core';
import PadroesCriacionaisCategory from '../../../categories/padroes-criacionais/ng-doc.category';

/**  Resumo básico sobre oque são os Padrões Criacionais */
const PadroesCriacionaisPage: NgDocPage = {
	title: `Padrões Criacionais`,
	route: 'padroes-criacionais',
	mdFile: './index.md',
	category: PadroesCriacionaisCategory,
	order: 1
};
export default PadroesCriacionaisPage