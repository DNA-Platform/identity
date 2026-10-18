import { $ } from '@dna-platform/chemistry';
import { opened } from '../../../opened';
import $Book from '../../../../../../.claude/.conversations/claude--unlocking-extra-characters-in-soulcalibur-vi--6ceffc3f/.book';
import Cover from '../../../../../../.claude/.conversations/claude--unlocking-extra-characters-in-soulcalibur-vi--6ceffc3f/.cover';
import Synopsis from '../../../../../../.claude/.conversations/claude--unlocking-extra-characters-in-soulcalibur-vi--6ceffc3f/.synopsis';
import Table from '../../../../../../.claude/.conversations/claude--unlocking-extra-characters-in-soulcalibur-vi--6ceffc3f/.table';
import April920261 from '../../../../../../.claude/.conversations/claude--unlocking-extra-characters-in-soulcalibur-vi--6ceffc3f/1-april-9-2026';

const Book = $($Book);

export const book = () => (
    <Book>
        {Cover()}
        {Synopsis()}
        {Table()}
        {April920261()}
    </Book>
);

if (import.meta.hot) import.meta.hot.accept(next => { if (next !== undefined) opened.open(next.book); });
