import { $ } from '@dna-platform/chemistry';
import { opened } from '../../../opened';
import $Book from '../../../../../../.claude/.conversations/claude--telegram-accessibility-anomaly-in-russia/.book';
import Cover from '../../../../../../.claude/.conversations/claude--telegram-accessibility-anomaly-in-russia/.cover';
import Synopsis from '../../../../../../.claude/.conversations/claude--telegram-accessibility-anomaly-in-russia/.synopsis';
import Table from '../../../../../../.claude/.conversations/claude--telegram-accessibility-anomaly-in-russia/.table';
import April1720261 from '../../../../../../.claude/.conversations/claude--telegram-accessibility-anomaly-in-russia/1-april-17-2026';

const Book = $($Book);

export const book = () => (
    <Book>
        {Cover()}
        {Synopsis()}
        {Table()}
        {April1720261()}
    </Book>
);

if (import.meta.hot) import.meta.hot.accept(next => { if (next !== undefined) opened.open(next.book); });
