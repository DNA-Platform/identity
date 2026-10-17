import { $ } from '@dna-platform/chemistry';
import { opened } from '../../../opened';
import $Book from '../../../../../../.claude/.conversations/claude--reflexivity-and-backwards-arrow-notation/.book';
import Cover from '../../../../../../.claude/.conversations/claude--reflexivity-and-backwards-arrow-notation/.cover';
import Synopsis from '../../../../../../.claude/.conversations/claude--reflexivity-and-backwards-arrow-notation/.synopsis';
import Table from '../../../../../../.claude/.conversations/claude--reflexivity-and-backwards-arrow-notation/.table';
import February2320261 from '../../../../../../.claude/.conversations/claude--reflexivity-and-backwards-arrow-notation/1-february-23-2026';
import February2420262 from '../../../../../../.claude/.conversations/claude--reflexivity-and-backwards-arrow-notation/2-february-24-2026';

const Book = $($Book);

export const book = () => (
    <Book>
        {Cover()}
        {Synopsis()}
        {Table()}
        {February2320261()}
        {February2420262()}
    </Book>
);

if (import.meta.hot) import.meta.hot.accept(next => { if (next !== undefined) opened.open(next.book); });
