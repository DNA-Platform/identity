import { $ } from '@dna-platform/chemistry';
import { opened } from '../../../opened';
import $Book from '../../../../../../.claude/.conversations/claude--our-that-has-told-us-to-give-o--fa248006/.book';
import Cover from '../../../../../../.claude/.conversations/claude--our-that-has-told-us-to-give-o--fa248006/.cover';
import Synopsis from '../../../../../../.claude/.conversations/claude--our-that-has-told-us-to-give-o--fa248006/.synopsis';
import Table from '../../../../../../.claude/.conversations/claude--our-that-has-told-us-to-give-o--fa248006/.table';
import April2320261 from '../../../../../../.claude/.conversations/claude--our-that-has-told-us-to-give-o--fa248006/1-april-23-2026';

const Book = $($Book);

export const book = () => (
    <Book>
        {Cover()}
        {Synopsis()}
        {Table()}
        {April2320261()}
    </Book>
);

if (import.meta.hot) import.meta.hot.accept(next => { if (next !== undefined) opened.open(next.book); });
