import { $ } from '@dna-platform/chemistry';
import { opened } from '../../../opened';
import $Book from '../../../../../../.claude/.conversations/stablecoin-architecture-origins-and-tethers-conceptual-linea/.book';
import Cover from '../../../../../../.claude/.conversations/stablecoin-architecture-origins-and-tethers-conceptual-linea/.cover';
import Synopsis from '../../../../../../.claude/.conversations/stablecoin-architecture-origins-and-tethers-conceptual-linea/.synopsis';
import Table from '../../../../../../.claude/.conversations/stablecoin-architecture-origins-and-tethers-conceptual-linea/.table';
import August420261 from '../../../../../../.claude/.conversations/stablecoin-architecture-origins-and-tethers-conceptual-linea/1-august-4-2026';

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
