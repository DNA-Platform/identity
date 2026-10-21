import { $ } from '@dna-platform/chemistry';
import { opened } from '../../../opened';
import $Book from '../../../../../../.claude/.conversations/claude--ai-automation-frameworks-for-windows-beyond-mcp--a0bc19de/.book';
import Cover from '../../../../../../.claude/.conversations/claude--ai-automation-frameworks-for-windows-beyond-mcp--a0bc19de/.cover';
import Synopsis from '../../../../../../.claude/.conversations/claude--ai-automation-frameworks-for-windows-beyond-mcp--a0bc19de/.synopsis';
import Table from '../../../../../../.claude/.conversations/claude--ai-automation-frameworks-for-windows-beyond-mcp--a0bc19de/.table';
import Conversation1 from '../../../../../../.claude/.conversations/claude--ai-automation-frameworks-for-windows-beyond-mcp--a0bc19de/1-conversation';

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
