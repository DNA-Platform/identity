import { $ } from '@dna-platform/chemistry';
import { opened } from '../../../opened';
import $Book from '../../../../../../.claude/.conversations/understanding-perpetual-leverage-and-liquidation-risks-on-to/.book';
import Cover from '../../../../../../.claude/.conversations/understanding-perpetual-leverage-and-liquidation-risks-on-to/.cover';
import Synopsis from '../../../../../../.claude/.conversations/understanding-perpetual-leverage-and-liquidation-risks-on-to/.synopsis';
import Table from '../../../../../../.claude/.conversations/understanding-perpetual-leverage-and-liquidation-risks-on-to/.table';
import April1620261 from '../../../../../../.claude/.conversations/understanding-perpetual-leverage-and-liquidation-risks-on-to/1-april-16-2026';

const Book = $($Book);

export const book = () => (
    <Book>
        {Cover()}
        {Synopsis()}
        {Table()}
        {April1620261()}
    </Book>
);

if (import.meta.hot) import.meta.hot.accept(next => { if (next !== undefined) opened.open(next.book); });
