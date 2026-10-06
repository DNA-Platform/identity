import { $ } from '@dna-platform/chemistry';
import { opened } from '../opened';
import $Book from '../../../../.design/.book';
import Cover from '../../../../.design/.cover';
import Synopsis from '../../../../.design/.synopsis';
import Table from '../../../../.design/.table';
import TheDesignsIAmGoingWith1 from '../../../../.design/1-the-designs-i-am-going-with';
import WhatIAmAsked2 from '../../../../.design/2-what-i-am-asked';
import EveryConcept3 from '../../../../.design/3-every-concept';
import DrivingTheBuild4 from '../../../../.design/4-driving-the-build';
import TheParagraphso1 from '../../../../.design/o1-the-paragraphs';
import TheConcepto2 from '../../../../.design/o2-the-concept';
import TheCamerao3 from '../../../../.design/o3-the-camera';
import TheGalleryo4 from '../../../../.design/o4-the-gallery';
import TheFrameo5 from '../../../../.design/o5-the-frame';

const Book = $($Book);

export const book = () => (
    <Book>
        {Cover()}
        {Synopsis()}
        {Table()}
        {TheDesignsIAmGoingWith1()}
        {WhatIAmAsked2()}
        {EveryConcept3()}
        {DrivingTheBuild4()}
        {TheParagraphso1()}
        {TheConcepto2()}
        {TheCamerao3()}
        {TheGalleryo4()}
        {TheFrameo5()}
    </Book>
);

if (import.meta.hot) import.meta.hot.accept(next => { if (next !== undefined) opened.open(next.book); });
