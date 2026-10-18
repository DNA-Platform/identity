import { $ } from '@dna-platform/chemistry';
import { opened } from '../../../opened';
import $Book from '../../../../../../.claude/.conversations/claude--a-young-boy-has-high-eosinofil--b2a50752/.book';
import Cover from '../../../../../../.claude/.conversations/claude--a-young-boy-has-high-eosinofil--b2a50752/.cover';
import Synopsis from '../../../../../../.claude/.conversations/claude--a-young-boy-has-high-eosinofil--b2a50752/.synopsis';
import Table from '../../../../../../.claude/.conversations/claude--a-young-boy-has-high-eosinofil--b2a50752/.table';
import January2420261 from '../../../../../../.claude/.conversations/claude--a-young-boy-has-high-eosinofil--b2a50752/1-january-24-2026';

const Book = $($Book);

export const book = () => (
    <Book>
        {Cover()}
        {Synopsis()}
        {Table()}
        {January2420261()}
    </Book>
);

if (import.meta.hot) import.meta.hot.accept(next => { if (next !== undefined) opened.open(next.book); });
