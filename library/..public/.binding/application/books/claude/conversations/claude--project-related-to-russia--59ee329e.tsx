import { $ } from '@dna-platform/chemistry';
import { opened } from '../../../opened';
import $Book from '../../../../../../.claude/.conversations/claude--project-related-to-russia--59ee329e/.book';
import Cover from '../../../../../../.claude/.conversations/claude--project-related-to-russia--59ee329e/.cover';
import Synopsis from '../../../../../../.claude/.conversations/claude--project-related-to-russia--59ee329e/.synopsis';
import Table from '../../../../../../.claude/.conversations/claude--project-related-to-russia--59ee329e/.table';
import July720261 from '../../../../../../.claude/.conversations/claude--project-related-to-russia--59ee329e/1-july-7-2026';
import July820262 from '../../../../../../.claude/.conversations/claude--project-related-to-russia--59ee329e/2-july-8-2026';

const Book = $($Book);

export const book = () => (
    <Book>
        {Cover()}
        {Synopsis()}
        {Table()}
        {July720261()}
        {July820262()}
    </Book>
);

if (import.meta.hot) import.meta.hot.accept(next => { if (next !== undefined) opened.open(next.book); });
