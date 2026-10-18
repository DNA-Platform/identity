import { $ } from '@dna-platform/chemistry';
import { opened } from '../../../opened';
import $Book from '../../../../../../.claude/.conversations/claude--benzodiazepines-vs-gabaergic-anesthetics--db8ba18b/.book';
import Cover from '../../../../../../.claude/.conversations/claude--benzodiazepines-vs-gabaergic-anesthetics--db8ba18b/.cover';
import Synopsis from '../../../../../../.claude/.conversations/claude--benzodiazepines-vs-gabaergic-anesthetics--db8ba18b/.synopsis';
import Table from '../../../../../../.claude/.conversations/claude--benzodiazepines-vs-gabaergic-anesthetics--db8ba18b/.table';
import April520261 from '../../../../../../.claude/.conversations/claude--benzodiazepines-vs-gabaergic-anesthetics--db8ba18b/1-april-5-2026';

const Book = $($Book);

export const book = () => (
    <Book>
        {Cover()}
        {Synopsis()}
        {Table()}
        {April520261()}
    </Book>
);

if (import.meta.hot) import.meta.hot.accept(next => { if (next !== undefined) opened.open(next.book); });
