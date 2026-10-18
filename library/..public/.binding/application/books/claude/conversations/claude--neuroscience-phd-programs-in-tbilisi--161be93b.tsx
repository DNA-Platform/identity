import { $ } from '@dna-platform/chemistry';
import { opened } from '../../../opened';
import $Book from '../../../../../../.claude/.conversations/claude--neuroscience-phd-programs-in-tbilisi--161be93b/.book';
import Cover from '../../../../../../.claude/.conversations/claude--neuroscience-phd-programs-in-tbilisi--161be93b/.cover';
import Synopsis from '../../../../../../.claude/.conversations/claude--neuroscience-phd-programs-in-tbilisi--161be93b/.synopsis';
import Table from '../../../../../../.claude/.conversations/claude--neuroscience-phd-programs-in-tbilisi--161be93b/.table';
import January2720261 from '../../../../../../.claude/.conversations/claude--neuroscience-phd-programs-in-tbilisi--161be93b/1-january-27-2026';

const Book = $($Book);

export const book = () => (
    <Book>
        {Cover()}
        {Synopsis()}
        {Table()}
        {January2720261()}
    </Book>
);

if (import.meta.hot) import.meta.hot.accept(next => { if (next !== undefined) opened.open(next.book); });
