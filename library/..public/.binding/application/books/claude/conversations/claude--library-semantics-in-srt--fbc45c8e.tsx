import { $ } from '@dna-platform/chemistry';
import { opened } from '../../../opened';
import $Book from '../../../../../../.claude/.conversations/claude--library-semantics-in-srt--fbc45c8e/.book';
import Cover from '../../../../../../.claude/.conversations/claude--library-semantics-in-srt--fbc45c8e/.cover';
import Synopsis from '../../../../../../.claude/.conversations/claude--library-semantics-in-srt--fbc45c8e/.synopsis';
import Table from '../../../../../../.claude/.conversations/claude--library-semantics-in-srt--fbc45c8e/.table';
import Conversation1 from '../../../../../../.claude/.conversations/claude--library-semantics-in-srt--fbc45c8e/1-conversation';

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
