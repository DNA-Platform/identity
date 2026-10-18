import { $ } from '@dna-platform/chemistry';
import { opened } from '../../../opened';
import $Book from '../../../../../../.claude/.conversations/claude--playing-movies-on-philips-tv-from-flash-drive-or-computer--76140f14/.book';
import Cover from '../../../../../../.claude/.conversations/claude--playing-movies-on-philips-tv-from-flash-drive-or-computer--76140f14/.cover';
import Synopsis from '../../../../../../.claude/.conversations/claude--playing-movies-on-philips-tv-from-flash-drive-or-computer--76140f14/.synopsis';
import Table from '../../../../../../.claude/.conversations/claude--playing-movies-on-philips-tv-from-flash-drive-or-computer--76140f14/.table';
import July1220261 from '../../../../../../.claude/.conversations/claude--playing-movies-on-philips-tv-from-flash-drive-or-computer--76140f14/1-july-12-2026';

const Book = $($Book);

export const book = () => (
    <Book>
        {Cover()}
        {Synopsis()}
        {Table()}
        {July1220261()}
    </Book>
);

if (import.meta.hot) import.meta.hot.accept(next => { if (next !== undefined) opened.open(next.book); });
