import { $ } from '@dna-platform/chemistry';
import { opened } from '../../../opened';
import $Book from '../../../../../../.claude/.conversations/claude--the-price-of-gram-is-getting-h/.book';
import Cover from '../../../../../../.claude/.conversations/claude--the-price-of-gram-is-getting-h/.cover';
import Synopsis from '../../../../../../.claude/.conversations/claude--the-price-of-gram-is-getting-h/.synopsis';
import Table from '../../../../../../.claude/.conversations/claude--the-price-of-gram-is-getting-h/.table';
import August720261 from '../../../../../../.claude/.conversations/claude--the-price-of-gram-is-getting-h/1-august-7-2026';
import August1120262 from '../../../../../../.claude/.conversations/claude--the-price-of-gram-is-getting-h/2-august-11-2026';
import August1220263 from '../../../../../../.claude/.conversations/claude--the-price-of-gram-is-getting-h/3-august-12-2026';
import August1320264 from '../../../../../../.claude/.conversations/claude--the-price-of-gram-is-getting-h/4-august-13-2026';
import August1420265 from '../../../../../../.claude/.conversations/claude--the-price-of-gram-is-getting-h/5-august-14-2026';
import August2720266 from '../../../../../../.claude/.conversations/claude--the-price-of-gram-is-getting-h/6-august-27-2026';
import August2820267 from '../../../../../../.claude/.conversations/claude--the-price-of-gram-is-getting-h/7-august-28-2026';
import September520268 from '../../../../../../.claude/.conversations/claude--the-price-of-gram-is-getting-h/8-september-5-2026';
import September620269 from '../../../../../../.claude/.conversations/claude--the-price-of-gram-is-getting-h/9-september-6-2026';
import October1202610 from '../../../../../../.claude/.conversations/claude--the-price-of-gram-is-getting-h/10-october-1-2026';
import October2202611 from '../../../../../../.claude/.conversations/claude--the-price-of-gram-is-getting-h/11-october-2-2026';
import October5202612 from '../../../../../../.claude/.conversations/claude--the-price-of-gram-is-getting-h/12-october-5-2026';
import October7202613 from '../../../../../../.claude/.conversations/claude--the-price-of-gram-is-getting-h/13-october-7-2026';
import October9202614 from '../../../../../../.claude/.conversations/claude--the-price-of-gram-is-getting-h/14-october-9-2026';
import October11202615 from '../../../../../../.claude/.conversations/claude--the-price-of-gram-is-getting-h/15-october-11-2026';
import October12202616 from '../../../../../../.claude/.conversations/claude--the-price-of-gram-is-getting-h/16-october-12-2026';
import October15202617 from '../../../../../../.claude/.conversations/claude--the-price-of-gram-is-getting-h/17-october-15-2026';

const Book = $($Book);

export const book = () => (
    <Book>
        {Cover()}
        {Synopsis()}
        {Table()}
        {August720261()}
        {August1120262()}
        {August1220263()}
        {August1320264()}
        {August1420265()}
        {August2720266()}
        {August2820267()}
        {September520268()}
        {September620269()}
        {October1202610()}
        {October2202611()}
        {October5202612()}
        {October7202613()}
        {October9202614()}
        {October11202615()}
        {October12202616()}
        {October15202617()}
    </Book>
);

if (import.meta.hot) import.meta.hot.accept(next => { if (next !== undefined) opened.open(next.book); });
