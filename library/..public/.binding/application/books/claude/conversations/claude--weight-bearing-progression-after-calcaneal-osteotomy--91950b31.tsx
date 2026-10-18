import { $ } from '@dna-platform/chemistry';
import { opened } from '../../../opened';
import $Book from '../../../../../../.claude/.conversations/claude--weight-bearing-progression-after-calcaneal-osteotomy--91950b31/.book';
import Cover from '../../../../../../.claude/.conversations/claude--weight-bearing-progression-after-calcaneal-osteotomy--91950b31/.cover';
import Synopsis from '../../../../../../.claude/.conversations/claude--weight-bearing-progression-after-calcaneal-osteotomy--91950b31/.synopsis';
import Table from '../../../../../../.claude/.conversations/claude--weight-bearing-progression-after-calcaneal-osteotomy--91950b31/.table';
import January2520261 from '../../../../../../.claude/.conversations/claude--weight-bearing-progression-after-calcaneal-osteotomy--91950b31/1-january-25-2026';

const Book = $($Book);

export const book = () => (
    <Book>
        {Cover()}
        {Synopsis()}
        {Table()}
        {January2520261()}
    </Book>
);

if (import.meta.hot) import.meta.hot.accept(next => { if (next !== undefined) opened.open(next.book); });
