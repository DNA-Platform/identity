import { $ } from '@dna-platform/chemistry';
import { opened } from '../../../opened';
import $Book from '../../../../../../.claude/.conversations/claude--domi-payment--857c0398/.book';
import Cover from '../../../../../../.claude/.conversations/claude--domi-payment--857c0398/.cover';
import Synopsis from '../../../../../../.claude/.conversations/claude--domi-payment--857c0398/.synopsis';
import Table from '../../../../../../.claude/.conversations/claude--domi-payment--857c0398/.table';
import July420261 from '../../../../../../.claude/.conversations/claude--domi-payment--857c0398/1-july-4-2026';
import October1520262 from '../../../../../../.claude/.conversations/claude--domi-payment--857c0398/2-october-15-2026';

const Book = $($Book);

export const book = () => (
    <Book>
        {Cover()}
        {Synopsis()}
        {Table()}
        {July420261()}
        {October1520262()}
    </Book>
);

if (import.meta.hot) import.meta.hot.accept(next => { if (next !== undefined) opened.open(next.book); });
