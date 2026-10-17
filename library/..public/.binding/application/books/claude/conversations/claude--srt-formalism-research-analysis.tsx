import { $ } from '@dna-platform/chemistry';
import { opened } from '../../../opened';
import $Book from '../../../../../../.claude/.conversations/claude--srt-formalism-research-analysis/.book';
import Cover from '../../../../../../.claude/.conversations/claude--srt-formalism-research-analysis/.cover';
import Synopsis from '../../../../../../.claude/.conversations/claude--srt-formalism-research-analysis/.synopsis';
import Table from '../../../../../../.claude/.conversations/claude--srt-formalism-research-analysis/.table';
import October120251 from '../../../../../../.claude/.conversations/claude--srt-formalism-research-analysis/1-october-1-2025';
import October220252 from '../../../../../../.claude/.conversations/claude--srt-formalism-research-analysis/2-october-2-2025';

const Book = $($Book);

export const book = () => (
    <Book>
        {Cover()}
        {Synopsis()}
        {Table()}
        {October120251()}
        {October220252()}
    </Book>
);

if (import.meta.hot) import.meta.hot.accept(next => { if (next !== undefined) opened.open(next.book); });
