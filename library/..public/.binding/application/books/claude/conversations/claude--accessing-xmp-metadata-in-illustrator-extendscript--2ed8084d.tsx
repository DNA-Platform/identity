import { $ } from '@dna-platform/chemistry';
import { opened } from '../../../opened';
import $Book from '../../../../../../.claude/.conversations/claude--accessing-xmp-metadata-in-illustrator-extendscript--2ed8084d/.book';
import Cover from '../../../../../../.claude/.conversations/claude--accessing-xmp-metadata-in-illustrator-extendscript--2ed8084d/.cover';
import Synopsis from '../../../../../../.claude/.conversations/claude--accessing-xmp-metadata-in-illustrator-extendscript--2ed8084d/.synopsis';
import Table from '../../../../../../.claude/.conversations/claude--accessing-xmp-metadata-in-illustrator-extendscript--2ed8084d/.table';
import January2320251 from '../../../../../../.claude/.conversations/claude--accessing-xmp-metadata-in-illustrator-extendscript--2ed8084d/1-january-23-2025';
import January2420252 from '../../../../../../.claude/.conversations/claude--accessing-xmp-metadata-in-illustrator-extendscript--2ed8084d/2-january-24-2025';

const Book = $($Book);

export const book = () => (
    <Book>
        {Cover()}
        {Synopsis()}
        {Table()}
        {January2320251()}
        {January2420252()}
    </Book>
);

if (import.meta.hot) import.meta.hot.accept(next => { if (next !== undefined) opened.open(next.book); });
