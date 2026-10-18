import { $ } from '@dna-platform/chemistry';
import { opened } from '../../../opened';
import $Book from '../../../../../../.claude/.conversations/claude--first-time-irs-penalty-abatement-options--8d505eb2/.book';
import Cover from '../../../../../../.claude/.conversations/claude--first-time-irs-penalty-abatement-options--8d505eb2/.cover';
import Synopsis from '../../../../../../.claude/.conversations/claude--first-time-irs-penalty-abatement-options--8d505eb2/.synopsis';
import Table from '../../../../../../.claude/.conversations/claude--first-time-irs-penalty-abatement-options--8d505eb2/.table';
import May2620261 from '../../../../../../.claude/.conversations/claude--first-time-irs-penalty-abatement-options--8d505eb2/1-may-26-2026';
import May2720262 from '../../../../../../.claude/.conversations/claude--first-time-irs-penalty-abatement-options--8d505eb2/2-may-27-2026';

const Book = $($Book);

export const book = () => (
    <Book>
        {Cover()}
        {Synopsis()}
        {Table()}
        {May2620261()}
        {May2720262()}
    </Book>
);

if (import.meta.hot) import.meta.hot.accept(next => { if (next !== undefined) opened.open(next.book); });
