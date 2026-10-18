import { $ } from '@dna-platform/chemistry';
import { opened } from '../../../opened';
import $Book from '../../../../../../.claude/.conversations/claude--paying-for-russian-groceries-with-crypto--85cd3d52/.book';
import Cover from '../../../../../../.claude/.conversations/claude--paying-for-russian-groceries-with-crypto--85cd3d52/.cover';
import Synopsis from '../../../../../../.claude/.conversations/claude--paying-for-russian-groceries-with-crypto--85cd3d52/.synopsis';
import Table from '../../../../../../.claude/.conversations/claude--paying-for-russian-groceries-with-crypto--85cd3d52/.table';
import March120261 from '../../../../../../.claude/.conversations/claude--paying-for-russian-groceries-with-crypto--85cd3d52/1-march-1-2026';

const Book = $($Book);

export const book = () => (
    <Book>
        {Cover()}
        {Synopsis()}
        {Table()}
        {March120261()}
    </Book>
);

if (import.meta.hot) import.meta.hot.accept(next => { if (next !== undefined) opened.open(next.book); });
