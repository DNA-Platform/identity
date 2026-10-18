import { $ } from '@dna-platform/chemistry';
import { opened } from '../../../opened';
import $Book from '../../../../../../.claude/.conversations/claude--treating-feline-giardia-with-metronidazole--977892ca/.book';
import Cover from '../../../../../../.claude/.conversations/claude--treating-feline-giardia-with-metronidazole--977892ca/.cover';
import Synopsis from '../../../../../../.claude/.conversations/claude--treating-feline-giardia-with-metronidazole--977892ca/.synopsis';
import Table from '../../../../../../.claude/.conversations/claude--treating-feline-giardia-with-metronidazole--977892ca/.table';
import January820261 from '../../../../../../.claude/.conversations/claude--treating-feline-giardia-with-metronidazole--977892ca/1-january-8-2026';

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
