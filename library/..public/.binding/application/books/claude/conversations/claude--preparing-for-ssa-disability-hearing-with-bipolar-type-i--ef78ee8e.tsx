import { $ } from '@dna-platform/chemistry';
import { opened } from '../../../opened';
import $Book from '../../../../../../.claude/.conversations/claude--preparing-for-ssa-disability-hearing-with-bipolar-type-i--ef78ee8e/.book';
import Cover from '../../../../../../.claude/.conversations/claude--preparing-for-ssa-disability-hearing-with-bipolar-type-i--ef78ee8e/.cover';
import Synopsis from '../../../../../../.claude/.conversations/claude--preparing-for-ssa-disability-hearing-with-bipolar-type-i--ef78ee8e/.synopsis';
import Table from '../../../../../../.claude/.conversations/claude--preparing-for-ssa-disability-hearing-with-bipolar-type-i--ef78ee8e/.table';
import April2920261 from '../../../../../../.claude/.conversations/claude--preparing-for-ssa-disability-hearing-with-bipolar-type-i--ef78ee8e/1-april-29-2026';

const Book = $($Book);

export const book = () => (
    <Book>
        {Cover()}
        {Synopsis()}
        {Table()}
        {April2920261()}
    </Book>
);

if (import.meta.hot) import.meta.hot.accept(next => { if (next !== undefined) opened.open(next.book); });
