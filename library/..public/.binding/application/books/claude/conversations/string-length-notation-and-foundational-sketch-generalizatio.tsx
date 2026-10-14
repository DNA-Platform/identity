import { $ } from '@dna-platform/chemistry';
import { opened } from '../../../opened';
import $Book from '../../../../../../.claude/.conversations/string-length-notation-and-foundational-sketch-generalizatio/.book';
import Cover from '../../../../../../.claude/.conversations/string-length-notation-and-foundational-sketch-generalizatio/.cover';
import Synopsis from '../../../../../../.claude/.conversations/string-length-notation-and-foundational-sketch-generalizatio/.synopsis';
import Table from '../../../../../../.claude/.conversations/string-length-notation-and-foundational-sketch-generalizatio/.table';
import August2420261 from '../../../../../../.claude/.conversations/string-length-notation-and-foundational-sketch-generalizatio/1-august-24-2026';

const Book = $($Book);

export const book = () => (
    <Book>
        {Cover()}
        {Synopsis()}
        {Table()}
        {August2420261()}
    </Book>
);

if (import.meta.hot) import.meta.hot.accept(next => { if (next !== undefined) opened.open(next.book); });
