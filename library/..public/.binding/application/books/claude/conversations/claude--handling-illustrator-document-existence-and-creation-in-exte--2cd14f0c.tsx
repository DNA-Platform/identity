import { $ } from '@dna-platform/chemistry';
import { opened } from '../../../opened';
import $Book from '../../../../../../.claude/.conversations/claude--handling-illustrator-document-existence-and-creation-in-exte--2cd14f0c/.book';
import Cover from '../../../../../../.claude/.conversations/claude--handling-illustrator-document-existence-and-creation-in-exte--2cd14f0c/.cover';
import Synopsis from '../../../../../../.claude/.conversations/claude--handling-illustrator-document-existence-and-creation-in-exte--2cd14f0c/.synopsis';
import Table from '../../../../../../.claude/.conversations/claude--handling-illustrator-document-existence-and-creation-in-exte--2cd14f0c/.table';
import January1320251 from '../../../../../../.claude/.conversations/claude--handling-illustrator-document-existence-and-creation-in-exte--2cd14f0c/1-january-13-2025';

const Book = $($Book);

export const book = () => (
    <Book>
        {Cover()}
        {Synopsis()}
        {Table()}
        {January1320251()}
    </Book>
);

if (import.meta.hot) import.meta.hot.accept(next => { if (next !== undefined) opened.open(next.book); });
