import { $ } from '@dna-platform/chemistry';
import { opened } from '../../opened';
import $Book from '../../../../../.claude/.resume/.book';
import Cover from '../../../../../.claude/.resume/.cover';
import Synopsis from '../../../../../.claude/.resume/.synopsis';
import Table from '../../../../../.claude/.resume/.table';
import TheProject1 from '../../../../../.claude/.resume/1-the-project';
import ClaudeNewResume714974ab2 from '../../../../../.claude/.resume/2-claude-new-resume-714974ab';

const Book = $($Book);

export const book = () => (
    <Book>
        {Cover()}
        {Synopsis()}
        {Table()}
        {TheProject1()}
        {ClaudeNewResume714974ab2()}
    </Book>
);

if (import.meta.hot) import.meta.hot.accept(next => { if (next !== undefined) opened.open(next.book); });
