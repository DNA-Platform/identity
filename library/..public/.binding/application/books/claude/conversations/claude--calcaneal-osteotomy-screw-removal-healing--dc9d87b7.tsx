import { $ } from '@dna-platform/chemistry';
import { opened } from '../../../opened';
import $Book from '../../../../../../.claude/.conversations/claude--calcaneal-osteotomy-screw-removal-healing--dc9d87b7/.book';
import Cover from '../../../../../../.claude/.conversations/claude--calcaneal-osteotomy-screw-removal-healing--dc9d87b7/.cover';
import Synopsis from '../../../../../../.claude/.conversations/claude--calcaneal-osteotomy-screw-removal-healing--dc9d87b7/.synopsis';
import Table from '../../../../../../.claude/.conversations/claude--calcaneal-osteotomy-screw-removal-healing--dc9d87b7/.table';
import July3120261 from '../../../../../../.claude/.conversations/claude--calcaneal-osteotomy-screw-removal-healing--dc9d87b7/1-july-31-2026';
import August520262 from '../../../../../../.claude/.conversations/claude--calcaneal-osteotomy-screw-removal-healing--dc9d87b7/2-august-5-2026';
import August1220263 from '../../../../../../.claude/.conversations/claude--calcaneal-osteotomy-screw-removal-healing--dc9d87b7/3-august-12-2026';

const Book = $($Book);

export const book = () => (
    <Book>
        {Cover()}
        {Synopsis()}
        {Table()}
        {July3120261()}
        {August520262()}
        {August1220263()}
    </Book>
);

if (import.meta.hot) import.meta.hot.accept(next => { if (next !== undefined) opened.open(next.book); });
