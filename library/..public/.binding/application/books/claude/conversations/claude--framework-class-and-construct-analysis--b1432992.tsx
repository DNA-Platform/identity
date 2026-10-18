import { $ } from '@dna-platform/chemistry';
import { opened } from '../../../opened';
import $Book from '../../../../../../.claude/.conversations/claude--framework-class-and-construct-analysis--b1432992/.book';
import Cover from '../../../../../../.claude/.conversations/claude--framework-class-and-construct-analysis--b1432992/.cover';
import Synopsis from '../../../../../../.claude/.conversations/claude--framework-class-and-construct-analysis--b1432992/.synopsis';
import Table from '../../../../../../.claude/.conversations/claude--framework-class-and-construct-analysis--b1432992/.table';
import February2320261 from '../../../../../../.claude/.conversations/claude--framework-class-and-construct-analysis--b1432992/1-february-23-2026';

const Book = $($Book);

export const book = () => (
    <Book>
        {Cover()}
        {Synopsis()}
        {Table()}
        {February2320261()}
    </Book>
);

if (import.meta.hot) import.meta.hot.accept(next => { if (next !== undefined) opened.open(next.book); });
