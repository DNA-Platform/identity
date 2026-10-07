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
import TheAuthorAndTheSubject8 from '../../../../.manual/8-the-author-and-the-subject';
import TheSwitch9 from '../../../../.manual/9-the-switch';
import TheManual10 from '../../../../.manual/10-the-manual';
import TheLayout12 from '../../../../.manual/12-the-layout';
import TheTurn13 from '../../../../.manual/13-the-turn';
import TheEntry14 from '../../../../.manual/14-the-entry';
import TheTone16 from '../../../../.manual/16-the-tone';
import TheFirst17 from '../../../../.manual/17-the-first';
import TheColour18 from '../../../../.manual/18-the-colour';
import TheCover19 from '../../../../.manual/19-the-cover';
import TheBookshelf20 from '../../../../.manual/20-the-bookshelf';

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
        {TheAuthorAndTheSubject8()}
        {TheSwitch9()}
        {TheManual10()}
        {TheLayout12()}
        {TheTurn13()}
        {TheEntry14()}
        {TheTone16()}
        {TheFirst17()}
        {TheColour18()}
        {TheCover19()}
        {TheBookshelf20()}
    </Book>
);

if (import.meta.hot) import.meta.hot.accept(next => { if (next !== undefined) opened.open(next.book); });
