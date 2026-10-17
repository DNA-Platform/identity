import { $ } from '@dna-platform/chemistry';
import { opened } from '../../../opened';
import $Book from '../../../../../../.claude/.conversations/claude--allbirds-gpu-pivot-and-ton-cocoon-connection/.book';
import Cover from '../../../../../../.claude/.conversations/claude--allbirds-gpu-pivot-and-ton-cocoon-connection/.cover';
import Synopsis from '../../../../../../.claude/.conversations/claude--allbirds-gpu-pivot-and-ton-cocoon-connection/.synopsis';
import Table from '../../../../../../.claude/.conversations/claude--allbirds-gpu-pivot-and-ton-cocoon-connection/.table';
import April1620261 from '../../../../../../.claude/.conversations/claude--allbirds-gpu-pivot-and-ton-cocoon-connection/1-april-16-2026';

const Book = $($Book);

export const book = () => (
    <Book>
        {Cover()}
        {Synopsis()}
        {Table()}
        {April1620261()}
    </Book>
);

if (import.meta.hot) import.meta.hot.accept(next => { if (next !== undefined) opened.open(next.book); });
