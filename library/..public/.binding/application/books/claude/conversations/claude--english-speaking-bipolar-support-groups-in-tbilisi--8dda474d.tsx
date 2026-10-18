import { $ } from '@dna-platform/chemistry';
import { opened } from '../../../opened';
import $Book from '../../../../../../.claude/.conversations/claude--english-speaking-bipolar-support-groups-in-tbilisi--8dda474d/.book';
import Cover from '../../../../../../.claude/.conversations/claude--english-speaking-bipolar-support-groups-in-tbilisi--8dda474d/.cover';
import Synopsis from '../../../../../../.claude/.conversations/claude--english-speaking-bipolar-support-groups-in-tbilisi--8dda474d/.synopsis';
import Table from '../../../../../../.claude/.conversations/claude--english-speaking-bipolar-support-groups-in-tbilisi--8dda474d/.table';
import July220261 from '../../../../../../.claude/.conversations/claude--english-speaking-bipolar-support-groups-in-tbilisi--8dda474d/1-july-2-2026';

const Book = $($Book);

export const book = () => (
    <Book>
        {Cover()}
        {Synopsis()}
        {Table()}
        {July220261()}
    </Book>
);

if (import.meta.hot) import.meta.hot.accept(next => { if (next !== undefined) opened.open(next.book); });
