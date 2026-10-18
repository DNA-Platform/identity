import { $ } from '@dna-platform/chemistry';
import { opened } from '../../../opened';
import $Book from '../../../../../../.claude/.conversations/claude--georgian-payoneer-help--41ee9869/.book';
import Cover from '../../../../../../.claude/.conversations/claude--georgian-payoneer-help--41ee9869/.cover';
import Synopsis from '../../../../../../.claude/.conversations/claude--georgian-payoneer-help--41ee9869/.synopsis';
import Table from '../../../../../../.claude/.conversations/claude--georgian-payoneer-help--41ee9869/.table';
import June520261 from '../../../../../../.claude/.conversations/claude--georgian-payoneer-help--41ee9869/1-june-5-2026';
import June820262 from '../../../../../../.claude/.conversations/claude--georgian-payoneer-help--41ee9869/2-june-8-2026';
import June1220263 from '../../../../../../.claude/.conversations/claude--georgian-payoneer-help--41ee9869/3-june-12-2026';
import June1620264 from '../../../../../../.claude/.conversations/claude--georgian-payoneer-help--41ee9869/4-june-16-2026';
import June1820265 from '../../../../../../.claude/.conversations/claude--georgian-payoneer-help--41ee9869/5-june-18-2026';
import June2220266 from '../../../../../../.claude/.conversations/claude--georgian-payoneer-help--41ee9869/6-june-22-2026';
import June2320267 from '../../../../../../.claude/.conversations/claude--georgian-payoneer-help--41ee9869/7-june-23-2026';
import June2620268 from '../../../../../../.claude/.conversations/claude--georgian-payoneer-help--41ee9869/8-june-26-2026';
import June2720269 from '../../../../../../.claude/.conversations/claude--georgian-payoneer-help--41ee9869/9-june-27-2026';
import June28202610 from '../../../../../../.claude/.conversations/claude--georgian-payoneer-help--41ee9869/10-june-28-2026';
import June30202611 from '../../../../../../.claude/.conversations/claude--georgian-payoneer-help--41ee9869/11-june-30-2026';
import July7202612 from '../../../../../../.claude/.conversations/claude--georgian-payoneer-help--41ee9869/12-july-7-2026';
import July8202613 from '../../../../../../.claude/.conversations/claude--georgian-payoneer-help--41ee9869/13-july-8-2026';
import August31202614 from '../../../../../../.claude/.conversations/claude--georgian-payoneer-help--41ee9869/14-august-31-2026';
import September22202615 from '../../../../../../.claude/.conversations/claude--georgian-payoneer-help--41ee9869/15-september-22-2026';

const Book = $($Book);

export const book = () => (
    <Book>
        {Cover()}
        {Synopsis()}
        {Table()}
        {June520261()}
        {June820262()}
        {June1220263()}
        {June1620264()}
        {June1820265()}
        {June2220266()}
        {June2320267()}
        {June2620268()}
        {June2720269()}
        {June28202610()}
        {June30202611()}
        {July7202612()}
        {July8202613()}
        {August31202614()}
        {September22202615()}
    </Book>
);

if (import.meta.hot) import.meta.hot.accept(next => { if (next !== undefined) opened.open(next.book); });
