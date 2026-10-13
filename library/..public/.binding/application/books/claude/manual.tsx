import { $ } from '@dna-platform/chemistry';
import { opened } from '../../opened';
import $Book from '../../../../../.claude/.manual/.book';
import Cover from '../../../../../.claude/.manual/.cover';
import Synopsis from '../../../../../.claude/.manual/.synopsis';
import Table from '../../../../../.claude/.manual/.table';
import TheActionAndTheResult1 from '../../../../../.claude/.manual/1-the-action-and-the-result';
import TheArtifactAndTheAttachment2 from '../../../../../.claude/.manual/2-the-artifact-and-the-attachment';

const Book = $($Book);

export const book = () => (
    <Book>
        {Cover()}
        {Synopsis()}
        {Table()}
        {TheActionAndTheResult1()}
        {TheArtifactAndTheAttachment2()}
    </Book>
);

if (import.meta.hot) import.meta.hot.accept(next => { if (next !== undefined) opened.open(next.book); });
