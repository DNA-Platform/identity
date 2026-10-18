import { $ } from '@dna-platform/chemistry';
import { opened } from '../../../opened';
import $Book from '../../../../../../.claude/.conversations/claude--hiring-a-nanny-in-tbilisi-for-two-kids--bd886a96/.book';
import Cover from '../../../../../../.claude/.conversations/claude--hiring-a-nanny-in-tbilisi-for-two-kids--bd886a96/.cover';
import Synopsis from '../../../../../../.claude/.conversations/claude--hiring-a-nanny-in-tbilisi-for-two-kids--bd886a96/.synopsis';
import Table from '../../../../../../.claude/.conversations/claude--hiring-a-nanny-in-tbilisi-for-two-kids--bd886a96/.table';
import July920261 from '../../../../../../.claude/.conversations/claude--hiring-a-nanny-in-tbilisi-for-two-kids--bd886a96/1-july-9-2026';
import July1820262 from '../../../../../../.claude/.conversations/claude--hiring-a-nanny-in-tbilisi-for-two-kids--bd886a96/2-july-18-2026';
import July2620263 from '../../../../../../.claude/.conversations/claude--hiring-a-nanny-in-tbilisi-for-two-kids--bd886a96/3-july-26-2026';
import July2820264 from '../../../../../../.claude/.conversations/claude--hiring-a-nanny-in-tbilisi-for-two-kids--bd886a96/4-july-28-2026';
import August120265 from '../../../../../../.claude/.conversations/claude--hiring-a-nanny-in-tbilisi-for-two-kids--bd886a96/5-august-1-2026';
import August320266 from '../../../../../../.claude/.conversations/claude--hiring-a-nanny-in-tbilisi-for-two-kids--bd886a96/6-august-3-2026';
import August720267 from '../../../../../../.claude/.conversations/claude--hiring-a-nanny-in-tbilisi-for-two-kids--bd886a96/7-august-7-2026';
import August1120268 from '../../../../../../.claude/.conversations/claude--hiring-a-nanny-in-tbilisi-for-two-kids--bd886a96/8-august-11-2026';

const Book = $($Book);

export const book = () => (
    <Book>
        {Cover()}
        {Synopsis()}
        {Table()}
        {July920261()}
        {July1820262()}
        {July2620263()}
        {July2820264()}
        {August120265()}
        {August320266()}
        {August720267()}
        {August1120268()}
    </Book>
);

if (import.meta.hot) import.meta.hot.accept(next => { if (next !== undefined) opened.open(next.book); });
