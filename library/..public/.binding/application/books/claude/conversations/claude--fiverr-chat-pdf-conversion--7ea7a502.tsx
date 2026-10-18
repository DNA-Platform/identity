import { $ } from '@dna-platform/chemistry';
import { opened } from '../../../opened';
import $Book from '../../../../../../.claude/.conversations/claude--fiverr-chat-pdf-conversion--7ea7a502/.book';
import Cover from '../../../../../../.claude/.conversations/claude--fiverr-chat-pdf-conversion--7ea7a502/.cover';
import Synopsis from '../../../../../../.claude/.conversations/claude--fiverr-chat-pdf-conversion--7ea7a502/.synopsis';
import Table from '../../../../../../.claude/.conversations/claude--fiverr-chat-pdf-conversion--7ea7a502/.table';
import August2720251 from '../../../../../../.claude/.conversations/claude--fiverr-chat-pdf-conversion--7ea7a502/1-august-27-2025';
import ПерепискаFiverrПроектКартыРанчоV1o1 from '../../../../../../.claude/.conversations/claude--fiverr-chat-pdf-conversion--7ea7a502/o1-переписка-fiverr-проект-карты-ранчо-v1';
import PaloAltoAreaMapWithColorCodedNeighborhoodsV1o2 from '../../../../../../.claude/.conversations/claude--fiverr-chat-pdf-conversion--7ea7a502/o2-palo-alto-area-map-with-color-coded-neighborhoods-v1';

const Book = $($Book);

export const book = () => (
    <Book>
        {Cover()}
        {Synopsis()}
        {Table()}
        {August2720251()}
        {ПерепискаFiverrПроектКартыРанчоV1o1()}
        {PaloAltoAreaMapWithColorCodedNeighborhoodsV1o2()}
    </Book>
);

if (import.meta.hot) import.meta.hot.accept(next => { if (next !== undefined) opened.open(next.book); });
