import { $ } from '@dna-platform/chemistry';
import { opened } from '../../../opened';
import $Book from '../../../../../../.claude/.conversations/claude--untitled-12-june-2026--7bd1f6ee/.book';
import Cover from '../../../../../../.claude/.conversations/claude--untitled-12-june-2026--7bd1f6ee/.cover';
import Synopsis from '../../../../../../.claude/.conversations/claude--untitled-12-june-2026--7bd1f6ee/.synopsis';
import Table from '../../../../../../.claude/.conversations/claude--untitled-12-june-2026--7bd1f6ee/.table';
import June1220261 from '../../../../../../.claude/.conversations/claude--untitled-12-june-2026--7bd1f6ee/1-june-12-2026';
import June1520262 from '../../../../../../.claude/.conversations/claude--untitled-12-june-2026--7bd1f6ee/2-june-15-2026';
import June1620263 from '../../../../../../.claude/.conversations/claude--untitled-12-june-2026--7bd1f6ee/3-june-16-2026';
import June1820264 from '../../../../../../.claude/.conversations/claude--untitled-12-june-2026--7bd1f6ee/4-june-18-2026';
import June1920265 from '../../../../../../.claude/.conversations/claude--untitled-12-june-2026--7bd1f6ee/5-june-19-2026';
import June2020266 from '../../../../../../.claude/.conversations/claude--untitled-12-june-2026--7bd1f6ee/6-june-20-2026';
import June2220267 from '../../../../../../.claude/.conversations/claude--untitled-12-june-2026--7bd1f6ee/7-june-22-2026';
import June2420268 from '../../../../../../.claude/.conversations/claude--untitled-12-june-2026--7bd1f6ee/8-june-24-2026';
import June2520269 from '../../../../../../.claude/.conversations/claude--untitled-12-june-2026--7bd1f6ee/9-june-25-2026';
import June26202610 from '../../../../../../.claude/.conversations/claude--untitled-12-june-2026--7bd1f6ee/10-june-26-2026';
import June27202611 from '../../../../../../.claude/.conversations/claude--untitled-12-june-2026--7bd1f6ee/11-june-27-2026';
import June29202612 from '../../../../../../.claude/.conversations/claude--untitled-12-june-2026--7bd1f6ee/12-june-29-2026';
import July1202613 from '../../../../../../.claude/.conversations/claude--untitled-12-june-2026--7bd1f6ee/13-july-1-2026';

const Book = $($Book);

export const book = () => (
    <Book>
        {Cover()}
        {Synopsis()}
        {Table()}
        {June1220261()}
        {June1520262()}
        {June1620263()}
        {June1820264()}
        {June1920265()}
        {June2020266()}
        {June2220267()}
        {June2420268()}
        {June2520269()}
        {June26202610()}
        {June27202611()}
        {June29202612()}
        {July1202613()}
    </Book>
);

if (import.meta.hot) import.meta.hot.accept(next => { if (next !== undefined) opened.open(next.book); });
