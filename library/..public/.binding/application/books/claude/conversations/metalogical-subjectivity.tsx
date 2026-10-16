import { $ } from '@dna-platform/chemistry';
import { opened } from '../../../opened';
import $Book from '../../../../../../.claude/.conversations/metalogical-subjectivity/.book';
import Cover from '../../../../../../.claude/.conversations/metalogical-subjectivity/.cover';
import Synopsis from '../../../../../../.claude/.conversations/metalogical-subjectivity/.synopsis';
import Table from '../../../../../../.claude/.conversations/metalogical-subjectivity/.table';
import March2220251 from '../../../../../../.claude/.conversations/metalogical-subjectivity/1-march-22-2025';

const Book = $($Book);

export const book = () => (
    <Book>
        {Cover()}
        {Synopsis()}
        {Table()}
        {March2220251()}
    </Book>
);

if (import.meta.hot) import.meta.hot.accept(next => { if (next !== undefined) opened.open(next.book); });
