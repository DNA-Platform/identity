import { $ } from '@dna-platform/chemistry';
import { opened } from '../opened';
import $Book from '../../../../.manual/.book';
import Cover from '../../../../.manual/.cover';
import Synopsis from '../../../../.manual/.synopsis';
import Table from '../../../../.manual/.table';
import TheBook1 from '../../../../.manual/1-the-book';
import TheTheme2 from '../../../../.manual/2-the-theme';
import TheDate3 from '../../../../.manual/3-the-date';
import TheShelfmark4 from '../../../../.manual/4-the-shelfmark';
import InitializingALibrary5 from '../../../../.manual/5-initializing-a-library';
import DevelopingALibrary6 from '../../../../.manual/6-developing-a-library';

const Book = $($Book);

export const book = () => (
    <Book>
        {Cover()}
        {Synopsis()}
        {Table()}
        {TheBook1()}
        {TheTheme2()}
        {TheDate3()}
        {TheShelfmark4()}
        {InitializingALibrary5()}
        {DevelopingALibrary6()}
    </Book>
);

if (import.meta.hot) import.meta.hot.accept(next => { if (next !== undefined) opened.open(next.book); });
