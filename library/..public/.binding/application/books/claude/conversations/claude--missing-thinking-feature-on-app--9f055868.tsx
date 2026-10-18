import { $ } from '@dna-platform/chemistry';
import { opened } from '../../../opened';
import $Book from '../../../../../../.claude/.conversations/claude--missing-thinking-feature-on-app--9f055868/.book';
import Cover from '../../../../../../.claude/.conversations/claude--missing-thinking-feature-on-app--9f055868/.cover';
import Synopsis from '../../../../../../.claude/.conversations/claude--missing-thinking-feature-on-app--9f055868/.synopsis';
import Table from '../../../../../../.claude/.conversations/claude--missing-thinking-feature-on-app--9f055868/.table';
import January720261 from '../../../../../../.claude/.conversations/claude--missing-thinking-feature-on-app--9f055868/1-january-7-2026';

const Book = $($Book);

export const book = () => (
    <Book>
        {Cover()}
        {Synopsis()}
        {Table()}
        {January720261()}
    </Book>
);

if (import.meta.hot) import.meta.hot.accept(next => { if (next !== undefined) opened.open(next.book); });
