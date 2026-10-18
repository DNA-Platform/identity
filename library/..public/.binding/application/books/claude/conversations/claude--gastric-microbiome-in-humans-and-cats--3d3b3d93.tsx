import { $ } from '@dna-platform/chemistry';
import { opened } from '../../../opened';
import $Book from '../../../../../../.claude/.conversations/claude--gastric-microbiome-in-humans-and-cats--3d3b3d93/.book';
import Cover from '../../../../../../.claude/.conversations/claude--gastric-microbiome-in-humans-and-cats--3d3b3d93/.cover';
import Synopsis from '../../../../../../.claude/.conversations/claude--gastric-microbiome-in-humans-and-cats--3d3b3d93/.synopsis';
import Table from '../../../../../../.claude/.conversations/claude--gastric-microbiome-in-humans-and-cats--3d3b3d93/.table';
import April2420261 from '../../../../../../.claude/.conversations/claude--gastric-microbiome-in-humans-and-cats--3d3b3d93/1-april-24-2026';

const Book = $($Book);

export const book = () => (
    <Book>
        {Cover()}
        {Synopsis()}
        {Table()}
        {April2420261()}
    </Book>
);

if (import.meta.hot) import.meta.hot.accept(next => { if (next !== undefined) opened.open(next.book); });
