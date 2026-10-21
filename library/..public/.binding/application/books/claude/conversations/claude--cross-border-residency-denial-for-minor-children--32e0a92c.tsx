import { $ } from '@dna-platform/chemistry';
import { opened } from '../../../opened';
import $Book from '../../../../../../.claude/.conversations/claude--cross-border-residency-denial-for-minor-children--32e0a92c/.book';
import Cover from '../../../../../../.claude/.conversations/claude--cross-border-residency-denial-for-minor-children--32e0a92c/.cover';
import Synopsis from '../../../../../../.claude/.conversations/claude--cross-border-residency-denial-for-minor-children--32e0a92c/.synopsis';
import Table from '../../../../../../.claude/.conversations/claude--cross-border-residency-denial-for-minor-children--32e0a92c/.table';
import Conversation1 from '../../../../../../.claude/.conversations/claude--cross-border-residency-denial-for-minor-children--32e0a92c/1-conversation';

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
