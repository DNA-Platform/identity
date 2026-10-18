import { $ } from '@dna-platform/chemistry';
import { opened } from '../../../opened';
import $Book from '../../../../../../.claude/.conversations/claude--why-is-the-gravitational-constant-so-difficult-to-measure--67a6e6eb/.book';
import Cover from '../../../../../../.claude/.conversations/claude--why-is-the-gravitational-constant-so-difficult-to-measure--67a6e6eb/.cover';
import Synopsis from '../../../../../../.claude/.conversations/claude--why-is-the-gravitational-constant-so-difficult-to-measure--67a6e6eb/.synopsis';
import Table from '../../../../../../.claude/.conversations/claude--why-is-the-gravitational-constant-so-difficult-to-measure--67a6e6eb/.table';
import April2420261 from '../../../../../../.claude/.conversations/claude--why-is-the-gravitational-constant-so-difficult-to-measure--67a6e6eb/1-april-24-2026';

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
