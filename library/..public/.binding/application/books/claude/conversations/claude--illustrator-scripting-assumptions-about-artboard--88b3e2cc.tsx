import { $ } from '@dna-platform/chemistry';
import { opened } from '../../../opened';
import $Book from '../../../../../../.claude/.conversations/claude--illustrator-scripting-assumptions-about-artboard--88b3e2cc/.book';
import Cover from '../../../../../../.claude/.conversations/claude--illustrator-scripting-assumptions-about-artboard--88b3e2cc/.cover';
import Synopsis from '../../../../../../.claude/.conversations/claude--illustrator-scripting-assumptions-about-artboard--88b3e2cc/.synopsis';
import Table from '../../../../../../.claude/.conversations/claude--illustrator-scripting-assumptions-about-artboard--88b3e2cc/.table';
import Conversation1 from '../../../../../../.claude/.conversations/claude--illustrator-scripting-assumptions-about-artboard--88b3e2cc/1-conversation';

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
