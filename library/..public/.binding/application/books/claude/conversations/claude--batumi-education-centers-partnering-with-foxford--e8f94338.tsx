import { $ } from '@dna-platform/chemistry';
import { opened } from '../../../opened';
import $Book from '../../../../../../.claude/.conversations/claude--batumi-education-centers-partnering-with-foxford--e8f94338/.book';
import Cover from '../../../../../../.claude/.conversations/claude--batumi-education-centers-partnering-with-foxford--e8f94338/.cover';
import Synopsis from '../../../../../../.claude/.conversations/claude--batumi-education-centers-partnering-with-foxford--e8f94338/.synopsis';
import Table from '../../../../../../.claude/.conversations/claude--batumi-education-centers-partnering-with-foxford--e8f94338/.table';
import January1520261 from '../../../../../../.claude/.conversations/claude--batumi-education-centers-partnering-with-foxford--e8f94338/1-january-15-2026';

const Book = $($Book);

export const book = () => (
    <Book>
        {Cover()}
        {Synopsis()}
        {Table()}
        {January1520261()}
    </Book>
);

if (import.meta.hot) import.meta.hot.accept(next => { if (next !== undefined) opened.open(next.book); });
