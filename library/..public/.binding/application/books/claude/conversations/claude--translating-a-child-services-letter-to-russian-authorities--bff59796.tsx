import { $ } from '@dna-platform/chemistry';
import { opened } from '../../../opened';
import $Book from '../../../../../../.claude/.conversations/claude--translating-a-child-services-letter-to-russian-authorities--bff59796/.book';
import Cover from '../../../../../../.claude/.conversations/claude--translating-a-child-services-letter-to-russian-authorities--bff59796/.cover';
import Synopsis from '../../../../../../.claude/.conversations/claude--translating-a-child-services-letter-to-russian-authorities--bff59796/.synopsis';
import Table from '../../../../../../.claude/.conversations/claude--translating-a-child-services-letter-to-russian-authorities--bff59796/.table';
import December1020251 from '../../../../../../.claude/.conversations/claude--translating-a-child-services-letter-to-russian-authorities--bff59796/1-december-10-2025';
import December1120252 from '../../../../../../.claude/.conversations/claude--translating-a-child-services-letter-to-russian-authorities--bff59796/2-december-11-2025';

const Book = $($Book);

export const book = () => (
    <Book>
        {Cover()}
        {Synopsis()}
        {Table()}
        {December1020251()}
        {December1120252()}
    </Book>
);

if (import.meta.hot) import.meta.hot.accept(next => { if (next !== undefined) opened.open(next.book); });
