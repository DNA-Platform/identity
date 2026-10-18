import { $ } from '@dna-platform/chemistry';
import { opened } from '../../../opened';
import $Book from '../../../../../../.claude/.conversations/claude--experiment-specification-framework-for-wiki-based-market-res--6ad6437b/.book';
import Cover from '../../../../../../.claude/.conversations/claude--experiment-specification-framework-for-wiki-based-market-res--6ad6437b/.cover';
import Synopsis from '../../../../../../.claude/.conversations/claude--experiment-specification-framework-for-wiki-based-market-res--6ad6437b/.synopsis';
import Table from '../../../../../../.claude/.conversations/claude--experiment-specification-framework-for-wiki-based-market-res--6ad6437b/.table';
import February1920261 from '../../../../../../.claude/.conversations/claude--experiment-specification-framework-for-wiki-based-market-res--6ad6437b/1-february-19-2026';

const Book = $($Book);

export const book = () => (
    <Book>
        {Cover()}
        {Synopsis()}
        {Table()}
        {February1920261()}
    </Book>
);

if (import.meta.hot) import.meta.hot.accept(next => { if (next !== undefined) opened.open(next.book); });
