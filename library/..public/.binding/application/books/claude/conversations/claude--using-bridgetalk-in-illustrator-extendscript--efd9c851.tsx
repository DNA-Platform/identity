import { $ } from '@dna-platform/chemistry';
import { opened } from '../../../opened';
import $Book from '../../../../../../.claude/.conversations/claude--using-bridgetalk-in-illustrator-extendscript--efd9c851/.book';
import Cover from '../../../../../../.claude/.conversations/claude--using-bridgetalk-in-illustrator-extendscript--efd9c851/.cover';
import Synopsis from '../../../../../../.claude/.conversations/claude--using-bridgetalk-in-illustrator-extendscript--efd9c851/.synopsis';
import Table from '../../../../../../.claude/.conversations/claude--using-bridgetalk-in-illustrator-extendscript--efd9c851/.table';
import January2420251 from '../../../../../../.claude/.conversations/claude--using-bridgetalk-in-illustrator-extendscript--efd9c851/1-january-24-2025';

const Book = $($Book);

export const book = () => (
    <Book>
        {Cover()}
        {Synopsis()}
        {Table()}
        {January2420251()}
    </Book>
);

if (import.meta.hot) import.meta.hot.accept(next => { if (next !== undefined) opened.open(next.book); });
