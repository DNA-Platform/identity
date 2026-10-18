import { $ } from '@dna-platform/chemistry';
import { opened } from '../../../opened';
import $Book from '../../../../../../.claude/.conversations/claude--2026-social-security-disability-earnings-limit--0ccacc8b/.book';
import Cover from '../../../../../../.claude/.conversations/claude--2026-social-security-disability-earnings-limit--0ccacc8b/.cover';
import Synopsis from '../../../../../../.claude/.conversations/claude--2026-social-security-disability-earnings-limit--0ccacc8b/.synopsis';
import Table from '../../../../../../.claude/.conversations/claude--2026-social-security-disability-earnings-limit--0ccacc8b/.table';
import April2820261 from '../../../../../../.claude/.conversations/claude--2026-social-security-disability-earnings-limit--0ccacc8b/1-april-28-2026';

const Book = $($Book);

export const book = () => (
    <Book>
        {Cover()}
        {Synopsis()}
        {Table()}
        {April2820261()}
    </Book>
);

if (import.meta.hot) import.meta.hot.accept(next => { if (next !== undefined) opened.open(next.book); });
