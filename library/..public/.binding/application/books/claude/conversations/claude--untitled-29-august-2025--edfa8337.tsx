import { $ } from '@dna-platform/chemistry';
import { opened } from '../../../opened';
import $Book from '../../../../../../.claude/.conversations/claude--untitled-29-august-2025--edfa8337/.book';
import Cover from '../../../../../../.claude/.conversations/claude--untitled-29-august-2025--edfa8337/.cover';
import Synopsis from '../../../../../../.claude/.conversations/claude--untitled-29-august-2025--edfa8337/.synopsis';
import Table from '../../../../../../.claude/.conversations/claude--untitled-29-august-2025--edfa8337/.table';
import August2920251 from '../../../../../../.claude/.conversations/claude--untitled-29-august-2025--edfa8337/1-august-29-2025';

const Book = $($Book);

export const book = () => (
    <Book>
        {Cover()}
        {Synopsis()}
        {Table()}
        {August2920251()}
    </Book>
);

if (import.meta.hot) import.meta.hot.accept(next => { if (next !== undefined) opened.open(next.book); });
