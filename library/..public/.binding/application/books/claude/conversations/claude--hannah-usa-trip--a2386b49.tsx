import { $ } from '@dna-platform/chemistry';
import { opened } from '../../../opened';
import $Book from '../../../../../../.claude/.conversations/claude--hannah-usa-trip--a2386b49/.book';
import Cover from '../../../../../../.claude/.conversations/claude--hannah-usa-trip--a2386b49/.cover';
import Synopsis from '../../../../../../.claude/.conversations/claude--hannah-usa-trip--a2386b49/.synopsis';
import Table from '../../../../../../.claude/.conversations/claude--hannah-usa-trip--a2386b49/.table';
import March1220261 from '../../../../../../.claude/.conversations/claude--hannah-usa-trip--a2386b49/1-march-12-2026';
import March1320262 from '../../../../../../.claude/.conversations/claude--hannah-usa-trip--a2386b49/2-march-13-2026';
import March1720263 from '../../../../../../.claude/.conversations/claude--hannah-usa-trip--a2386b49/3-march-17-2026';
import March1820264 from '../../../../../../.claude/.conversations/claude--hannah-usa-trip--a2386b49/4-march-18-2026';
import March1920265 from '../../../../../../.claude/.conversations/claude--hannah-usa-trip--a2386b49/5-march-19-2026';
import March2820266 from '../../../../../../.claude/.conversations/claude--hannah-usa-trip--a2386b49/6-march-28-2026';
import March3020267 from '../../../../../../.claude/.conversations/claude--hannah-usa-trip--a2386b49/7-march-30-2026';
import April220268 from '../../../../../../.claude/.conversations/claude--hannah-usa-trip--a2386b49/8-april-2-2026';
import April720269 from '../../../../../../.claude/.conversations/claude--hannah-usa-trip--a2386b49/9-april-7-2026';
import April14202610 from '../../../../../../.claude/.conversations/claude--hannah-usa-trip--a2386b49/10-april-14-2026';
import April20202611 from '../../../../../../.claude/.conversations/claude--hannah-usa-trip--a2386b49/11-april-20-2026';
import April29202612 from '../../../../../../.claude/.conversations/claude--hannah-usa-trip--a2386b49/12-april-29-2026';
import April30202613 from '../../../../../../.claude/.conversations/claude--hannah-usa-trip--a2386b49/13-april-30-2026';
import May1202614 from '../../../../../../.claude/.conversations/claude--hannah-usa-trip--a2386b49/14-may-1-2026';
import May11202615 from '../../../../../../.claude/.conversations/claude--hannah-usa-trip--a2386b49/15-may-11-2026';
import May13202616 from '../../../../../../.claude/.conversations/claude--hannah-usa-trip--a2386b49/16-may-13-2026';

const Book = $($Book);

export const book = () => (
    <Book>
        {Cover()}
        {Synopsis()}
        {Table()}
        {March1220261()}
        {March1320262()}
        {March1720263()}
        {March1820264()}
        {March1920265()}
        {March2820266()}
        {March3020267()}
        {April220268()}
        {April720269()}
        {April14202610()}
        {April20202611()}
        {April29202612()}
        {April30202613()}
        {May1202614()}
        {May11202615()}
        {May13202616()}
    </Book>
);

if (import.meta.hot) import.meta.hot.accept(next => { if (next !== undefined) opened.open(next.book); });
