import { $ } from '@dna-platform/chemistry';
import { opened } from '../../../opened';
import $Book from '../../../../../../.claude/.conversations/claude--dark-web-marketplace-takedowns-and-attribution-stories--8035b9fb/.book';
import Cover from '../../../../../../.claude/.conversations/claude--dark-web-marketplace-takedowns-and-attribution-stories--8035b9fb/.cover';
import Synopsis from '../../../../../../.claude/.conversations/claude--dark-web-marketplace-takedowns-and-attribution-stories--8035b9fb/.synopsis';
import Table from '../../../../../../.claude/.conversations/claude--dark-web-marketplace-takedowns-and-attribution-stories--8035b9fb/.table';
import August920261 from '../../../../../../.claude/.conversations/claude--dark-web-marketplace-takedowns-and-attribution-stories--8035b9fb/1-august-9-2026';
import August1320262 from '../../../../../../.claude/.conversations/claude--dark-web-marketplace-takedowns-and-attribution-stories--8035b9fb/2-august-13-2026';

const Book = $($Book);

export const book = () => (
    <Book>
        {Cover()}
        {Synopsis()}
        {Table()}
        {August920261()}
        {August1320262()}
    </Book>
);

if (import.meta.hot) import.meta.hot.accept(next => { if (next !== undefined) opened.open(next.book); });
