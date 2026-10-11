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
import TheBookshelf8 from '../../../../.design/8-the-bookshelf';
import TheManualsPage9 from '../../../../.design/9-the-manuals-page';
import TheDesignBooksPage10 from '../../../../.design/10-the-design-books-page';
import EveryConcept11 from '../../../../.design/11-every-concept';
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
        {TheBookshelf8()}
        {TheManualsPage9()}
        {TheDesignBooksPage10()}
        {EveryConcept11()}
        {ThePortfolioo1()}
    </Book>
);

if (import.meta.hot) import.meta.hot.accept(next => { if (next !== undefined) opened.open(next.book); });
