import { $ } from '@dna-platform/chemistry';
import { opened } from '../../../opened';
import $Book from '../../../../../../.claude/.conversations/claude--stay-puft-marshmallow-man-costume--87e27c1d/.book';
import Cover from '../../../../../../.claude/.conversations/claude--stay-puft-marshmallow-man-costume--87e27c1d/.cover';
import Synopsis from '../../../../../../.claude/.conversations/claude--stay-puft-marshmallow-man-costume--87e27c1d/.synopsis';
import Table from '../../../../../../.claude/.conversations/claude--stay-puft-marshmallow-man-costume--87e27c1d/.table';
import October3120241 from '../../../../../../.claude/.conversations/claude--stay-puft-marshmallow-man-costume--87e27c1d/1-october-31-2024';

const Book = $($Book);

export const book = () => (
    <Book>
        {Cover()}
        {Synopsis()}
        {Table()}
        {October3120241()}
    </Book>
);

if (import.meta.hot) import.meta.hot.accept(next => { if (next !== undefined) opened.open(next.book); });
