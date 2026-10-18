import { $ } from '@dna-platform/chemistry';
import { opened } from '../../../opened';
import $Book from '../../../../../../.claude/.conversations/claude--ok-ive-been-putting-somethin--ed86ea6d/.book';
import Cover from '../../../../../../.claude/.conversations/claude--ok-ive-been-putting-somethin--ed86ea6d/.cover';
import Synopsis from '../../../../../../.claude/.conversations/claude--ok-ive-been-putting-somethin--ed86ea6d/.synopsis';
import Table from '../../../../../../.claude/.conversations/claude--ok-ive-been-putting-somethin--ed86ea6d/.table';
import April2120261 from '../../../../../../.claude/.conversations/claude--ok-ive-been-putting-somethin--ed86ea6d/1-april-21-2026';

const Book = $($Book);

export const book = () => (
    <Book>
        {Cover()}
        {Synopsis()}
        {Table()}
        {April2120261()}
    </Book>
);

if (import.meta.hot) import.meta.hot.accept(next => { if (next !== undefined) opened.open(next.book); });
