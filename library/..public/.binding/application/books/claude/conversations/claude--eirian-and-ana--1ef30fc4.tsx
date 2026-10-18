import { $ } from '@dna-platform/chemistry';
import { opened } from '../../../opened';
import $Book from '../../../../../../.claude/.conversations/claude--eirian-and-ana--1ef30fc4/.book';
import Cover from '../../../../../../.claude/.conversations/claude--eirian-and-ana--1ef30fc4/.cover';
import Synopsis from '../../../../../../.claude/.conversations/claude--eirian-and-ana--1ef30fc4/.synopsis';
import Table from '../../../../../../.claude/.conversations/claude--eirian-and-ana--1ef30fc4/.table';
import August1720251 from '../../../../../../.claude/.conversations/claude--eirian-and-ana--1ef30fc4/1-august-17-2025';
import August1820252 from '../../../../../../.claude/.conversations/claude--eirian-and-ana--1ef30fc4/2-august-18-2025';
import August2920253 from '../../../../../../.claude/.conversations/claude--eirian-and-ana--1ef30fc4/3-august-29-2025';
import August3020254 from '../../../../../../.claude/.conversations/claude--eirian-and-ana--1ef30fc4/4-august-30-2025';
import August3120255 from '../../../../../../.claude/.conversations/claude--eirian-and-ana--1ef30fc4/5-august-31-2025';
import September120256 from '../../../../../../.claude/.conversations/claude--eirian-and-ana--1ef30fc4/6-september-1-2025';
import September320257 from '../../../../../../.claude/.conversations/claude--eirian-and-ana--1ef30fc4/7-september-3-2025';
import September620258 from '../../../../../../.claude/.conversations/claude--eirian-and-ana--1ef30fc4/8-september-6-2025';
import September1320259 from '../../../../../../.claude/.conversations/claude--eirian-and-ana--1ef30fc4/9-september-13-2025';

const Book = $($Book);

export const book = () => (
    <Book>
        {Cover()}
        {Synopsis()}
        {Table()}
        {August1720251()}
        {August1820252()}
        {August2920253()}
        {August3020254()}
        {August3120255()}
        {September120256()}
        {September320257()}
        {September620258()}
        {September1320259()}
    </Book>
);

if (import.meta.hot) import.meta.hot.accept(next => { if (next !== undefined) opened.open(next.book); });
