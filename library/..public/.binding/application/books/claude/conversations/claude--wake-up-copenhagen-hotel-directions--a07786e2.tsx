import { $ } from '@dna-platform/chemistry';
import { opened } from '../../../opened';
import $Book from '../../../../../../.claude/.conversations/claude--wake-up-copenhagen-hotel-directions--a07786e2/.book';
import Cover from '../../../../../../.claude/.conversations/claude--wake-up-copenhagen-hotel-directions--a07786e2/.cover';
import Synopsis from '../../../../../../.claude/.conversations/claude--wake-up-copenhagen-hotel-directions--a07786e2/.synopsis';
import Table from '../../../../../../.claude/.conversations/claude--wake-up-copenhagen-hotel-directions--a07786e2/.table';
import October1020261 from '../../../../../../.claude/.conversations/claude--wake-up-copenhagen-hotel-directions--a07786e2/1-october-10-2026';
import October1120262 from '../../../../../../.claude/.conversations/claude--wake-up-copenhagen-hotel-directions--a07786e2/2-october-11-2026';
import October1220263 from '../../../../../../.claude/.conversations/claude--wake-up-copenhagen-hotel-directions--a07786e2/3-october-12-2026';
import October1320264 from '../../../../../../.claude/.conversations/claude--wake-up-copenhagen-hotel-directions--a07786e2/4-october-13-2026';

const Book = $($Book);

export const book = () => (
    <Book>
        {Cover()}
        {Synopsis()}
        {Table()}
        {October1020261()}
        {October1120262()}
        {October1220263()}
        {October1320264()}
    </Book>
);

if (import.meta.hot) import.meta.hot.accept(next => { if (next !== undefined) opened.open(next.book); });
