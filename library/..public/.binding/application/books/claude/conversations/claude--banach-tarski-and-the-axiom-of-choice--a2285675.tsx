import { $ } from '@dna-platform/chemistry';
import { opened } from '../../../opened';
import $Book from '../../../../../../.claude/.conversations/claude--banach-tarski-and-the-axiom-of-choice--a2285675/.book';
import Cover from '../../../../../../.claude/.conversations/claude--banach-tarski-and-the-axiom-of-choice--a2285675/.cover';
import Synopsis from '../../../../../../.claude/.conversations/claude--banach-tarski-and-the-axiom-of-choice--a2285675/.synopsis';
import Table from '../../../../../../.claude/.conversations/claude--banach-tarski-and-the-axiom-of-choice--a2285675/.table';
import July1520261 from '../../../../../../.claude/.conversations/claude--banach-tarski-and-the-axiom-of-choice--a2285675/1-july-15-2026';
import July1620262 from '../../../../../../.claude/.conversations/claude--banach-tarski-and-the-axiom-of-choice--a2285675/2-july-16-2026';

const Book = $($Book);

export const book = () => (
    <Book>
        {Cover()}
        {Synopsis()}
        {Table()}
        {July1520261()}
        {July1620262()}
    </Book>
);

if (import.meta.hot) import.meta.hot.accept(next => { if (next !== undefined) opened.open(next.book); });
