import { $ } from '@dna-platform/chemistry';
import { opened } from '../../../opened';
import $Book from '../../../../../../.claude/.conversations/claude--georgia-residency-requirements-for-unmarried-couples--35ac3078/.book';
import Cover from '../../../../../../.claude/.conversations/claude--georgia-residency-requirements-for-unmarried-couples--35ac3078/.cover';
import Synopsis from '../../../../../../.claude/.conversations/claude--georgia-residency-requirements-for-unmarried-couples--35ac3078/.synopsis';
import Table from '../../../../../../.claude/.conversations/claude--georgia-residency-requirements-for-unmarried-couples--35ac3078/.table';
import February1020261 from '../../../../../../.claude/.conversations/claude--georgia-residency-requirements-for-unmarried-couples--35ac3078/1-february-10-2026';

const Book = $($Book);

export const book = () => (
    <Book>
        {Cover()}
        {Synopsis()}
        {Table()}
        {February1020261()}
    </Book>
);

if (import.meta.hot) import.meta.hot.accept(next => { if (next !== undefined) opened.open(next.book); });
