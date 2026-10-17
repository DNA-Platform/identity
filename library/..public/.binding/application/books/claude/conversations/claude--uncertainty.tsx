import { $ } from '@dna-platform/chemistry';
import { opened } from '../../../opened';
import $Book from '../../../../../../.claude/.conversations/claude--uncertainty/.book';
import Cover from '../../../../../../.claude/.conversations/claude--uncertainty/.cover';
import Synopsis from '../../../../../../.claude/.conversations/claude--uncertainty/.synopsis';
import Table from '../../../../../../.claude/.conversations/claude--uncertainty/.table';
import January720261 from '../../../../../../.claude/.conversations/claude--uncertainty/1-january-7-2026';
import January820262 from '../../../../../../.claude/.conversations/claude--uncertainty/2-january-8-2026';
import January1020263 from '../../../../../../.claude/.conversations/claude--uncertainty/3-january-10-2026';
import January1120264 from '../../../../../../.claude/.conversations/claude--uncertainty/4-january-11-2026';

const Book = $($Book);

export const book = () => (
    <Book>
        {Cover()}
        {Synopsis()}
        {Table()}
        {January720261()}
        {January820262()}
        {January1020263()}
        {January1120264()}
    </Book>
);

if (import.meta.hot) import.meta.hot.accept(next => { if (next !== undefined) opened.open(next.book); });
