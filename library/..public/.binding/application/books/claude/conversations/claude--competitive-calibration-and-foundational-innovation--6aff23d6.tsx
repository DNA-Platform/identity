import { $ } from '@dna-platform/chemistry';
import { opened } from '../../../opened';
import $Book from '../../../../../../.claude/.conversations/claude--competitive-calibration-and-foundational-innovation--6aff23d6/.book';
import Cover from '../../../../../../.claude/.conversations/claude--competitive-calibration-and-foundational-innovation--6aff23d6/.cover';
import Synopsis from '../../../../../../.claude/.conversations/claude--competitive-calibration-and-foundational-innovation--6aff23d6/.synopsis';
import Table from '../../../../../../.claude/.conversations/claude--competitive-calibration-and-foundational-innovation--6aff23d6/.table';
import January3120261 from '../../../../../../.claude/.conversations/claude--competitive-calibration-and-foundational-innovation--6aff23d6/1-january-31-2026';

const Book = $($Book);

export const book = () => (
    <Book>
        {Cover()}
        {Synopsis()}
        {Table()}
        {January3120261()}
    </Book>
);

if (import.meta.hot) import.meta.hot.accept(next => { if (next !== undefined) opened.open(next.book); });
