import { $ } from '@dna-platform/chemistry';
import { opened } from '../../../opened';
import $Book from '../../../../../../.claude/.conversations/claude--buckwheat-serving-size-and-calories--4d68e6aa/.book';
import Cover from '../../../../../../.claude/.conversations/claude--buckwheat-serving-size-and-calories--4d68e6aa/.cover';
import Synopsis from '../../../../../../.claude/.conversations/claude--buckwheat-serving-size-and-calories--4d68e6aa/.synopsis';
import Table from '../../../../../../.claude/.conversations/claude--buckwheat-serving-size-and-calories--4d68e6aa/.table';
import August420261 from '../../../../../../.claude/.conversations/claude--buckwheat-serving-size-and-calories--4d68e6aa/1-august-4-2026';

const Book = $($Book);

export const book = () => (
    <Book>
        {Cover()}
        {Synopsis()}
        {Table()}
        {August420261()}
    </Book>
);

if (import.meta.hot) import.meta.hot.accept(next => { if (next !== undefined) opened.open(next.book); });
