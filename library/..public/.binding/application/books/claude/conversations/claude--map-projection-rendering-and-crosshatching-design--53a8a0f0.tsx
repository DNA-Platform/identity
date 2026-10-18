import { $ } from '@dna-platform/chemistry';
import { opened } from '../../../opened';
import $Book from '../../../../../../.claude/.conversations/claude--map-projection-rendering-and-crosshatching-design--53a8a0f0/.book';
import Cover from '../../../../../../.claude/.conversations/claude--map-projection-rendering-and-crosshatching-design--53a8a0f0/.cover';
import Synopsis from '../../../../../../.claude/.conversations/claude--map-projection-rendering-and-crosshatching-design--53a8a0f0/.synopsis';
import Table from '../../../../../../.claude/.conversations/claude--map-projection-rendering-and-crosshatching-design--53a8a0f0/.table';
import March920261 from '../../../../../../.claude/.conversations/claude--map-projection-rendering-and-crosshatching-design--53a8a0f0/1-march-9-2026';
import March1020262 from '../../../../../../.claude/.conversations/claude--map-projection-rendering-and-crosshatching-design--53a8a0f0/2-march-10-2026';
import March1120263 from '../../../../../../.claude/.conversations/claude--map-projection-rendering-and-crosshatching-design--53a8a0f0/3-march-11-2026';
import March1220264 from '../../../../../../.claude/.conversations/claude--map-projection-rendering-and-crosshatching-design--53a8a0f0/4-march-12-2026';
import March1320265 from '../../../../../../.claude/.conversations/claude--map-projection-rendering-and-crosshatching-design--53a8a0f0/5-march-13-2026';
import March1420266 from '../../../../../../.claude/.conversations/claude--map-projection-rendering-and-crosshatching-design--53a8a0f0/6-march-14-2026';
import March1520267 from '../../../../../../.claude/.conversations/claude--map-projection-rendering-and-crosshatching-design--53a8a0f0/7-march-15-2026';

const Book = $($Book);

export const book = () => (
    <Book>
        {Cover()}
        {Synopsis()}
        {Table()}
        {March920261()}
        {March1020262()}
        {March1120263()}
        {March1220264()}
        {March1320265()}
        {March1420266()}
        {March1520267()}
    </Book>
);

if (import.meta.hot) import.meta.hot.accept(next => { if (next !== undefined) opened.open(next.book); });
