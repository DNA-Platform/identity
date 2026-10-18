import { $ } from '@dna-platform/chemistry';
import { opened } from '../../../opened';
import $Book from '../../../../../../.claude/.conversations/claude--signing-up-for-apple-developer-account--fea3e3e4/.book';
import Cover from '../../../../../../.claude/.conversations/claude--signing-up-for-apple-developer-account--fea3e3e4/.cover';
import Synopsis from '../../../../../../.claude/.conversations/claude--signing-up-for-apple-developer-account--fea3e3e4/.synopsis';
import Table from '../../../../../../.claude/.conversations/claude--signing-up-for-apple-developer-account--fea3e3e4/.table';
import November1420241 from '../../../../../../.claude/.conversations/claude--signing-up-for-apple-developer-account--fea3e3e4/1-november-14-2024';

const Book = $($Book);

export const book = () => (
    <Book>
        {Cover()}
        {Synopsis()}
        {Table()}
        {November1420241()}
    </Book>
);

if (import.meta.hot) import.meta.hot.accept(next => { if (next !== undefined) opened.open(next.book); });
