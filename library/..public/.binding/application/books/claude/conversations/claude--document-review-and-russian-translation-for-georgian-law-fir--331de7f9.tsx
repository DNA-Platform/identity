import { $ } from '@dna-platform/chemistry';
import { opened } from '../../../opened';
import $Book from '../../../../../../.claude/.conversations/claude--document-review-and-russian-translation-for-georgian-law-fir--331de7f9/.book';
import Cover from '../../../../../../.claude/.conversations/claude--document-review-and-russian-translation-for-georgian-law-fir--331de7f9/.cover';
import Synopsis from '../../../../../../.claude/.conversations/claude--document-review-and-russian-translation-for-georgian-law-fir--331de7f9/.synopsis';
import Table from '../../../../../../.claude/.conversations/claude--document-review-and-russian-translation-for-georgian-law-fir--331de7f9/.table';
import March2420261 from '../../../../../../.claude/.conversations/claude--document-review-and-russian-translation-for-georgian-law-fir--331de7f9/1-march-24-2026';

const Book = $($Book);

export const book = () => (
    <Book>
        {Cover()}
        {Synopsis()}
        {Table()}
        {March2420261()}
    </Book>
);

if (import.meta.hot) import.meta.hot.accept(next => { if (next !== undefined) opened.open(next.book); });
