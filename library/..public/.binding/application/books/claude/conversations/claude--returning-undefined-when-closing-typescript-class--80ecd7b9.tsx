import { $ } from '@dna-platform/chemistry';
import { opened } from '../../../opened';
import $Book from '../../../../../../.claude/.conversations/claude--returning-undefined-when-closing-typescript-class--80ecd7b9/.book';
import Cover from '../../../../../../.claude/.conversations/claude--returning-undefined-when-closing-typescript-class--80ecd7b9/.cover';
import Synopsis from '../../../../../../.claude/.conversations/claude--returning-undefined-when-closing-typescript-class--80ecd7b9/.synopsis';
import Table from '../../../../../../.claude/.conversations/claude--returning-undefined-when-closing-typescript-class--80ecd7b9/.table';
import January1020251 from '../../../../../../.claude/.conversations/claude--returning-undefined-when-closing-typescript-class--80ecd7b9/1-january-10-2025';

const Book = $($Book);

export const book = () => (
    <Book>
        {Cover()}
        {Synopsis()}
        {Table()}
        {January1020251()}
    </Book>
);

if (import.meta.hot) import.meta.hot.accept(next => { if (next !== undefined) opened.open(next.book); });
