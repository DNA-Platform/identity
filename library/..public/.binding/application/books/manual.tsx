import { $ } from '@dna-platform/chemistry';
import { opened } from '../opened';
import $Book from '../../../../.manual/.book';
import Cover from '../../../../.manual/.cover';
import Synopsis from '../../../../.manual/.synopsis';
import Table from '../../../../.manual/.table';
import TheBook1 from '../../../../.manual/1-the-book';
import TheListing2 from '../../../../.manual/2-the-listing';
import TheTheme3 from '../../../../.manual/3-the-theme';
import TheDate4 from '../../../../.manual/4-the-date';
import InitializingALibrary5 from '../../../../.manual/5-initializing-a-library';
import DevelopingALibrary6 from '../../../../.manual/6-developing-a-library';
import TheOutline7 from '../../../../.manual/7-the-outline';
import TheAuthorAndTheSubject8 from '../../../../.manual/8-the-author-and-the-subject';
import TheSwitch9 from '../../../../.manual/9-the-switch';
import TheSidebar10 from '../../../../.manual/10-the-sidebar';
import TheSpread11 from '../../../../.manual/11-the-spread';
import ThePages12 from '../../../../.manual/12-the-pages';

const Book = $($Book);

export const book = () => (
    <Book>
        {Cover()}
        {Synopsis()}
        {Table()}
        {TheBook1()}
        {TheListing2()}
        {TheTheme3()}
        {TheDate4()}
        {InitializingALibrary5()}
        {DevelopingALibrary6()}
        {TheOutline7()}
        {TheAuthorAndTheSubject8()}
        {TheSwitch9()}
        {TheSidebar10()}
        {TheSpread11()}
        {ThePages12()}
    </Book>
);

if (import.meta.hot) import.meta.hot.accept(next => { if (next !== undefined) opened.open(next.book); });
