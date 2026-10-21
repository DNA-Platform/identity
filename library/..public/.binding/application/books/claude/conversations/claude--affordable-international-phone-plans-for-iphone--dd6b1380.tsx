import { $ } from '@dna-platform/chemistry';
import { opened } from '../../../opened';
import $Book from '../../../../../../.claude/.conversations/claude--affordable-international-phone-plans-for-iphone--dd6b1380/.book';
import Cover from '../../../../../../.claude/.conversations/claude--affordable-international-phone-plans-for-iphone--dd6b1380/.cover';
import Synopsis from '../../../../../../.claude/.conversations/claude--affordable-international-phone-plans-for-iphone--dd6b1380/.synopsis';
import Table from '../../../../../../.claude/.conversations/claude--affordable-international-phone-plans-for-iphone--dd6b1380/.table';
import Conversation1 from '../../../../../../.claude/.conversations/claude--affordable-international-phone-plans-for-iphone--dd6b1380/1-conversation';

const Book = $($Book);

export const book = () => (
    <Book>
        {Cover()}
        {Synopsis()}
        {Table()}
        {Conversation1()}
    </Book>
);

if (import.meta.hot) import.meta.hot.accept(next => { if (next !== undefined) opened.open(next.book); });
