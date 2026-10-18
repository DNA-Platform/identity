import { $ } from '@dna-platform/chemistry';
import { opened } from '../../../opened';
import $Book from '../../../../../../.claude/.conversations/claude--taxes-2025--0702f19d/.book';
import Cover from '../../../../../../.claude/.conversations/claude--taxes-2025--0702f19d/.cover';
import Synopsis from '../../../../../../.claude/.conversations/claude--taxes-2025--0702f19d/.synopsis';
import Table from '../../../../../../.claude/.conversations/claude--taxes-2025--0702f19d/.table';
import April620261 from '../../../../../../.claude/.conversations/claude--taxes-2025--0702f19d/1-april-6-2026';
import April720262 from '../../../../../../.claude/.conversations/claude--taxes-2025--0702f19d/2-april-7-2026';
import April920263 from '../../../../../../.claude/.conversations/claude--taxes-2025--0702f19d/3-april-9-2026';
import April1020264 from '../../../../../../.claude/.conversations/claude--taxes-2025--0702f19d/4-april-10-2026';
import April1320265 from '../../../../../../.claude/.conversations/claude--taxes-2025--0702f19d/5-april-13-2026';
import April1420266 from '../../../../../../.claude/.conversations/claude--taxes-2025--0702f19d/6-april-14-2026';
import April1520267 from '../../../../../../.claude/.conversations/claude--taxes-2025--0702f19d/7-april-15-2026';
import April1620268 from '../../../../../../.claude/.conversations/claude--taxes-2025--0702f19d/8-april-16-2026';
import April1720269 from '../../../../../../.claude/.conversations/claude--taxes-2025--0702f19d/9-april-17-2026';
import May9202610 from '../../../../../../.claude/.conversations/claude--taxes-2025--0702f19d/10-may-9-2026';
import May20202611 from '../../../../../../.claude/.conversations/claude--taxes-2025--0702f19d/11-may-20-2026';

const Book = $($Book);

export const book = () => (
    <Book>
        {Cover()}
        {Synopsis()}
        {Table()}
        {April620261()}
        {April720262()}
        {April920263()}
        {April1020264()}
        {April1320265()}
        {April1420266()}
        {April1520267()}
        {April1620268()}
        {April1720269()}
        {May9202610()}
        {May20202611()}
    </Book>
);

if (import.meta.hot) import.meta.hot.accept(next => { if (next !== undefined) opened.open(next.book); });
