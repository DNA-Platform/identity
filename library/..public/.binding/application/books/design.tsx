import { $ } from '@dna-platform/chemistry';
import { opened } from '../opened';
import $Book from '../../../../.design/.book';
import Cover from '../../../../.design/.cover';
import Synopsis from '../../../../.design/.synopsis';
import Table from '../../../../.design/.table';
import Latitude1 from '../../../../.design/1-latitude';
import ChoosingByNumber2 from '../../../../.design/2-choosing-by-number';
import BuildingFromTheSketches3 from '../../../../.design/3-building-from-the-sketches';
import DesigningTogether4 from '../../../../.design/4-designing-together';
import TheBookshelfInAnEvening5 from '../../../../.design/5-the-bookshelf-in-an-evening';
import TheManualsPageInEightRounds6 from '../../../../.design/6-the-manuals-page-in-eight-rounds';
import DesigningThisBook7 from '../../../../.design/7-designing-this-book';
import TheJournalInSevenRounds8 from '../../../../.design/8-the-journal-in-seven-rounds';
import TheBookshelf9 from '../../../../.design/9-the-bookshelf';
import TheManualsPage10 from '../../../../.design/10-the-manuals-page';
import TheDesignBooksPage11 from '../../../../.design/11-the-design-books-page';
import TheStorysPage12 from '../../../../.design/12-the-storys-page';
import EveryConcept13 from '../../../../.design/13-every-concept';
import TheConversationsPage14 from '../../../../.design/14-the-conversations-page';
import ThePortfolioo1 from '../../../../.design/o1-the-portfolio';

const Book = $($Book);

export const book = () => (
    <Book>
        {Cover()}
        {Synopsis()}
        {Table()}
        {Latitude1()}
        {ChoosingByNumber2()}
        {BuildingFromTheSketches3()}
        {DesigningTogether4()}
        {TheBookshelfInAnEvening5()}
        {TheManualsPageInEightRounds6()}
        {DesigningThisBook7()}
        {TheJournalInSevenRounds8()}
        {TheBookshelf9()}
        {TheManualsPage10()}
        {TheDesignBooksPage11()}
        {TheStorysPage12()}
        {EveryConcept13()}
        {TheConversationsPage14()}
        {ThePortfolioo1()}
    </Book>
);

if (import.meta.hot) import.meta.hot.accept(next => { if (next !== undefined) opened.open(next.book); });
