import { $ } from '@dna-platform/chemistry';
import { opened } from '../../../opened';
import $Book from '../../../../../../.claude/.conversations/claude--neurons-firing-together-and-synapse-formation--50862f85/.book';
import Cover from '../../../../../../.claude/.conversations/claude--neurons-firing-together-and-synapse-formation--50862f85/.cover';
import Synopsis from '../../../../../../.claude/.conversations/claude--neurons-firing-together-and-synapse-formation--50862f85/.synopsis';
import Table from '../../../../../../.claude/.conversations/claude--neurons-firing-together-and-synapse-formation--50862f85/.table';
import May1820261 from '../../../../../../.claude/.conversations/claude--neurons-firing-together-and-synapse-formation--50862f85/1-may-18-2026';

const Book = $($Book);

export const book = () => (
    <Book>
        {Cover()}
        {Synopsis()}
        {Table()}
        {May1820261()}
    </Book>
);

if (import.meta.hot) import.meta.hot.accept(next => { if (next !== undefined) opened.open(next.book); });
