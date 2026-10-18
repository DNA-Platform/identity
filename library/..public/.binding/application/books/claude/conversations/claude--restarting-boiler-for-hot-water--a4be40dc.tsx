import { $ } from '@dna-platform/chemistry';
import { opened } from '../../../opened';
import $Book from '../../../../../../.claude/.conversations/claude--restarting-boiler-for-hot-water--a4be40dc/.book';
import Cover from '../../../../../../.claude/.conversations/claude--restarting-boiler-for-hot-water--a4be40dc/.cover';
import Synopsis from '../../../../../../.claude/.conversations/claude--restarting-boiler-for-hot-water--a4be40dc/.synopsis';
import Table from '../../../../../../.claude/.conversations/claude--restarting-boiler-for-hot-water--a4be40dc/.table';
import February1920261 from '../../../../../../.claude/.conversations/claude--restarting-boiler-for-hot-water--a4be40dc/1-february-19-2026';

const Book = $($Book);

export const book = () => (
    <Book>
        {Cover()}
        {Synopsis()}
        {Table()}
        {February1920261()}
    </Book>
);

if (import.meta.hot) import.meta.hot.accept(next => { if (next !== undefined) opened.open(next.book); });
