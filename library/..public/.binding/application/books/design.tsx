import { $ } from '@dna-platform/chemistry';
import { opened } from '../opened';
import $Book from '../../../../.design/.book';
import Cover from '../../../../.design/.cover';
import Synopsis from '../../../../.design/.synopsis';
import Table from '../../../../.design/.table';
import TheDesignsIAmGoingWith1 from '../../../../.design/1-the-designs-i-am-going-with';
import WhatIAmAsked2 from '../../../../.design/2-what-i-am-asked';
import EveryConcept3 from '../../../../.design/3-every-concept';
import ThePages90 from '../../../../.design/90-the-pages';
import TheFrame91 from '../../../../.design/91-the-frame';
import TheConcept92 from '../../../../.design/92-the-concept';
import TheTheme93 from '../../../../.design/93-the-theme';
import TheCamera94 from '../../../../.design/94-the-camera';

const Book = $($Book);

export const book = () => (
    <Book>
        {Cover()}
        {Synopsis()}
        {Table()}
        {TheDesignsIAmGoingWith1()}
        {WhatIAmAsked2()}
        {EveryConcept3()}
        {ThePages90()}
        {TheFrame91()}
        {TheConcept92()}
        {TheTheme93()}
        {TheCamera94()}
    </Book>
);

if (import.meta.hot) import.meta.hot.accept(next => { if (next !== undefined) opened.open(next.book); });
