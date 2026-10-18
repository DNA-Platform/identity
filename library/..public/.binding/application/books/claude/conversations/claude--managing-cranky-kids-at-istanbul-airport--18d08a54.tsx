import { $ } from '@dna-platform/chemistry';
import { opened } from '../../../opened';
import $Book from '../../../../../../.claude/.conversations/claude--managing-cranky-kids-at-istanbul-airport--18d08a54/.book';
import Cover from '../../../../../../.claude/.conversations/claude--managing-cranky-kids-at-istanbul-airport--18d08a54/.cover';
import Synopsis from '../../../../../../.claude/.conversations/claude--managing-cranky-kids-at-istanbul-airport--18d08a54/.synopsis';
import Table from '../../../../../../.claude/.conversations/claude--managing-cranky-kids-at-istanbul-airport--18d08a54/.table';
import January820261 from '../../../../../../.claude/.conversations/claude--managing-cranky-kids-at-istanbul-airport--18d08a54/1-january-8-2026';

const Book = $($Book);

export const book = () => (
    <Book>
        {Cover()}
        {Synopsis()}
        {Table()}
        {January820261()}
    </Book>
);

if (import.meta.hot) import.meta.hot.accept(next => { if (next !== undefined) opened.open(next.book); });
