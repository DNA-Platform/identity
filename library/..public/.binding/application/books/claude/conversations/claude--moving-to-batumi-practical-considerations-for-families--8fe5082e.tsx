import { $ } from '@dna-platform/chemistry';
import { opened } from '../../../opened';
import $Book from '../../../../../../.claude/.conversations/claude--moving-to-batumi-practical-considerations-for-families--8fe5082e/.book';
import Cover from '../../../../../../.claude/.conversations/claude--moving-to-batumi-practical-considerations-for-families--8fe5082e/.cover';
import Synopsis from '../../../../../../.claude/.conversations/claude--moving-to-batumi-practical-considerations-for-families--8fe5082e/.synopsis';
import Table from '../../../../../../.claude/.conversations/claude--moving-to-batumi-practical-considerations-for-families--8fe5082e/.table';
import January1120261 from '../../../../../../.claude/.conversations/claude--moving-to-batumi-practical-considerations-for-families--8fe5082e/1-january-11-2026';

const Book = $($Book);

export const book = () => (
    <Book>
        {Cover()}
        {Synopsis()}
        {Table()}
        {January1120261()}
    </Book>
);

if (import.meta.hot) import.meta.hot.accept(next => { if (next !== undefined) opened.open(next.book); });
