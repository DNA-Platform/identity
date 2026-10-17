import { $ } from '@dna-platform/chemistry';
import { opened } from '../../../opened';
import $Book from '../../../../../../.claude/.conversations/claude--stablecoin-architecture-origins-and-tethers-conceptual-linea--fea3a58f/.book';
import Cover from '../../../../../../.claude/.conversations/claude--stablecoin-architecture-origins-and-tethers-conceptual-linea--fea3a58f/.cover';
import Synopsis from '../../../../../../.claude/.conversations/claude--stablecoin-architecture-origins-and-tethers-conceptual-linea--fea3a58f/.synopsis';
import Table from '../../../../../../.claude/.conversations/claude--stablecoin-architecture-origins-and-tethers-conceptual-linea--fea3a58f/.table';
import August420261 from '../../../../../../.claude/.conversations/claude--stablecoin-architecture-origins-and-tethers-conceptual-linea--fea3a58f/1-august-4-2026';

const Book = $($Book);

export const book = () => (
    <Book>
        {Cover()}
        {Synopsis()}
        {Table()}
        {August420261()}
    </Book>
);

if (import.meta.hot) import.meta.hot.accept(next => { if (next !== undefined) opened.open(next.book); });
