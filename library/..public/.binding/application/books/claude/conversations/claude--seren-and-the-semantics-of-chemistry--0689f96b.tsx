import { $ } from '@dna-platform/chemistry';
import { opened } from '../../../opened';
import $Book from '../../../../../../.claude/.conversations/claude--seren-and-the-semantics-of-chemistry--0689f96b/.book';
import Cover from '../../../../../../.claude/.conversations/claude--seren-and-the-semantics-of-chemistry--0689f96b/.cover';
import Synopsis from '../../../../../../.claude/.conversations/claude--seren-and-the-semantics-of-chemistry--0689f96b/.synopsis';
import Table from '../../../../../../.claude/.conversations/claude--seren-and-the-semantics-of-chemistry--0689f96b/.table';
import November820251 from '../../../../../../.claude/.conversations/claude--seren-and-the-semantics-of-chemistry--0689f96b/1-november-8-2025';
import November920252 from '../../../../../../.claude/.conversations/claude--seren-and-the-semantics-of-chemistry--0689f96b/2-november-9-2025';
import November1020253 from '../../../../../../.claude/.conversations/claude--seren-and-the-semantics-of-chemistry--0689f96b/3-november-10-2025';
import November1120254 from '../../../../../../.claude/.conversations/claude--seren-and-the-semantics-of-chemistry--0689f96b/4-november-11-2025';
import November1320255 from '../../../../../../.claude/.conversations/claude--seren-and-the-semantics-of-chemistry--0689f96b/5-november-13-2025';
import November1420256 from '../../../../../../.claude/.conversations/claude--seren-and-the-semantics-of-chemistry--0689f96b/6-november-14-2025';
import November1520257 from '../../../../../../.claude/.conversations/claude--seren-and-the-semantics-of-chemistry--0689f96b/7-november-15-2025';
import November1720258 from '../../../../../../.claude/.conversations/claude--seren-and-the-semantics-of-chemistry--0689f96b/8-november-17-2025';

const Book = $($Book);

export const book = () => (
    <Book>
        {Cover()}
        {Synopsis()}
        {Table()}
        {November820251()}
        {November920252()}
        {November1020253()}
        {November1120254()}
        {November1320255()}
        {November1420256()}
        {November1520257()}
        {November1720258()}
    </Book>
);

if (import.meta.hot) import.meta.hot.accept(next => { if (next !== undefined) opened.open(next.book); });
