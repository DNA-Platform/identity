import { $ } from '@dna-platform/chemistry';
import { opened } from '../../../opened';
import $Book from '../../../../../../.claude/.conversations/claude--moving-to-batumi-practical-considerations-for-families--8fe5082e/.book';
import Cover from '../../../../../../.claude/.conversations/claude--moving-to-batumi-practical-considerations-for-families--8fe5082e/.cover';
import Synopsis from '../../../../../../.claude/.conversations/claude--moving-to-batumi-practical-considerations-for-families--8fe5082e/.synopsis';
import Table from '../../../../../../.claude/.conversations/claude--moving-to-batumi-practical-considerations-for-families--8fe5082e/.table';
import Conversation1 from '../../../../../../.claude/.conversations/claude--moving-to-batumi-practical-considerations-for-families--8fe5082e/1-conversation';

const Book = $($Book);

export const book = () => (
    <Book>
        {Cover()}
        {Synopsis()}
        {Table()}
        {Conversation1()}
    </Book>
);

if (import.meta.hot) import.meta.hot.accept(next => { if (next !== undefined) opened.open(next.book); });
