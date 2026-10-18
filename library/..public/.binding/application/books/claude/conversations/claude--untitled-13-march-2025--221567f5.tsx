import { $ } from '@dna-platform/chemistry';
import { opened } from '../../../opened';
import $Book from '../../../../../../.claude/.conversations/claude--untitled-13-march-2025--221567f5/.book';
import Cover from '../../../../../../.claude/.conversations/claude--untitled-13-march-2025--221567f5/.cover';
import Synopsis from '../../../../../../.claude/.conversations/claude--untitled-13-march-2025--221567f5/.synopsis';
import Table from '../../../../../../.claude/.conversations/claude--untitled-13-march-2025--221567f5/.table';
import March1320251 from '../../../../../../.claude/.conversations/claude--untitled-13-march-2025--221567f5/1-march-13-2025';

const Book = $($Book);

export const book = () => (
    <Book>
        {Cover()}
        {Synopsis()}
        {Table()}
        {March1320251()}
    </Book>
);

if (import.meta.hot) import.meta.hot.accept(next => { if (next !== undefined) opened.open(next.book); });
