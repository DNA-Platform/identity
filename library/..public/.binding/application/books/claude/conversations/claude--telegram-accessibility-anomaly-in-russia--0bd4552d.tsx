import { $ } from '@dna-platform/chemistry';
import { opened } from '../../../opened';
import $Book from '../../../../../../.claude/.conversations/claude--telegram-accessibility-anomaly-in-russia--0bd4552d/.book';
import Cover from '../../../../../../.claude/.conversations/claude--telegram-accessibility-anomaly-in-russia--0bd4552d/.cover';
import Synopsis from '../../../../../../.claude/.conversations/claude--telegram-accessibility-anomaly-in-russia--0bd4552d/.synopsis';
import Table from '../../../../../../.claude/.conversations/claude--telegram-accessibility-anomaly-in-russia--0bd4552d/.table';
import April1720261 from '../../../../../../.claude/.conversations/claude--telegram-accessibility-anomaly-in-russia--0bd4552d/1-april-17-2026';

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
