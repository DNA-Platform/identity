import { $ } from '@dna-platform/chemistry';
import { opened } from '../../../opened';
import $Book from '../../../../../../.claude/.conversations/claude--telegrams-cryptocurrency-infrastructure-play--d7da5541/.book';
import Cover from '../../../../../../.claude/.conversations/claude--telegrams-cryptocurrency-infrastructure-play--d7da5541/.cover';
import Synopsis from '../../../../../../.claude/.conversations/claude--telegrams-cryptocurrency-infrastructure-play--d7da5541/.synopsis';
import Table from '../../../../../../.claude/.conversations/claude--telegrams-cryptocurrency-infrastructure-play--d7da5541/.table';
import February220261 from '../../../../../../.claude/.conversations/claude--telegrams-cryptocurrency-infrastructure-play--d7da5541/1-february-2-2026';

const Book = $($Book);

export const book = () => (
    <Book>
        {Cover()}
        {Synopsis()}
        {Table()}
        {February220261()}
    </Book>
);

if (import.meta.hot) import.meta.hot.accept(next => { if (next !== undefined) opened.open(next.book); });
