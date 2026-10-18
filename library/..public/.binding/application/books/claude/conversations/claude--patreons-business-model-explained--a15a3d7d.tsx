import { $ } from '@dna-platform/chemistry';
import { opened } from '../../../opened';
import $Book from '../../../../../../.claude/.conversations/claude--patreons-business-model-explained--a15a3d7d/.book';
import Cover from '../../../../../../.claude/.conversations/claude--patreons-business-model-explained--a15a3d7d/.cover';
import Synopsis from '../../../../../../.claude/.conversations/claude--patreons-business-model-explained--a15a3d7d/.synopsis';
import Table from '../../../../../../.claude/.conversations/claude--patreons-business-model-explained--a15a3d7d/.table';
import March2920261 from '../../../../../../.claude/.conversations/claude--patreons-business-model-explained--a15a3d7d/1-march-29-2026';

const Book = $($Book);

export const book = () => (
    <Book>
        {Cover()}
        {Synopsis()}
        {Table()}
        {March2920261()}
    </Book>
);

if (import.meta.hot) import.meta.hot.accept(next => { if (next !== undefined) opened.open(next.book); });
