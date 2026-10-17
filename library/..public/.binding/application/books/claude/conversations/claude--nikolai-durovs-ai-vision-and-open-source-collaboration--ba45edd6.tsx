import { $ } from '@dna-platform/chemistry';
import { opened } from '../../../opened';
import $Book from '../../../../../../.claude/.conversations/claude--nikolai-durovs-ai-vision-and-open-source-collaboration--ba45edd6/.book';
import Cover from '../../../../../../.claude/.conversations/claude--nikolai-durovs-ai-vision-and-open-source-collaboration--ba45edd6/.cover';
import Synopsis from '../../../../../../.claude/.conversations/claude--nikolai-durovs-ai-vision-and-open-source-collaboration--ba45edd6/.synopsis';
import Table from '../../../../../../.claude/.conversations/claude--nikolai-durovs-ai-vision-and-open-source-collaboration--ba45edd6/.table';
import January1420261 from '../../../../../../.claude/.conversations/claude--nikolai-durovs-ai-vision-and-open-source-collaboration--ba45edd6/1-january-14-2026';
import February620262 from '../../../../../../.claude/.conversations/claude--nikolai-durovs-ai-vision-and-open-source-collaboration--ba45edd6/2-february-6-2026';

const Book = $($Book);

export const book = () => (
    <Book>
        {Cover()}
        {Synopsis()}
        {Table()}
        {January1420261()}
        {February620262()}
    </Book>
);

if (import.meta.hot) import.meta.hot.accept(next => { if (next !== undefined) opened.open(next.book); });
