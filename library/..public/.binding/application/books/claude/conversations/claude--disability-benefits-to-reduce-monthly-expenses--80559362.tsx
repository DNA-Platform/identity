import { $ } from '@dna-platform/chemistry';
import { opened } from '../../../opened';
import $Book from '../../../../../../.claude/.conversations/claude--disability-benefits-to-reduce-monthly-expenses--80559362/.book';
import Cover from '../../../../../../.claude/.conversations/claude--disability-benefits-to-reduce-monthly-expenses--80559362/.cover';
import Synopsis from '../../../../../../.claude/.conversations/claude--disability-benefits-to-reduce-monthly-expenses--80559362/.synopsis';
import Table from '../../../../../../.claude/.conversations/claude--disability-benefits-to-reduce-monthly-expenses--80559362/.table';
import November220241 from '../../../../../../.claude/.conversations/claude--disability-benefits-to-reduce-monthly-expenses--80559362/1-november-2-2024';
import November720242 from '../../../../../../.claude/.conversations/claude--disability-benefits-to-reduce-monthly-expenses--80559362/2-november-7-2024';
import November820243 from '../../../../../../.claude/.conversations/claude--disability-benefits-to-reduce-monthly-expenses--80559362/3-november-8-2024';
import November920244 from '../../../../../../.claude/.conversations/claude--disability-benefits-to-reduce-monthly-expenses--80559362/4-november-9-2024';
import November1120245 from '../../../../../../.claude/.conversations/claude--disability-benefits-to-reduce-monthly-expenses--80559362/5-november-11-2024';
import November1420246 from '../../../../../../.claude/.conversations/claude--disability-benefits-to-reduce-monthly-expenses--80559362/6-november-14-2024';
import November1520247 from '../../../../../../.claude/.conversations/claude--disability-benefits-to-reduce-monthly-expenses--80559362/7-november-15-2024';
import November1820248 from '../../../../../../.claude/.conversations/claude--disability-benefits-to-reduce-monthly-expenses--80559362/8-november-18-2024';
import November2120249 from '../../../../../../.claude/.conversations/claude--disability-benefits-to-reduce-monthly-expenses--80559362/9-november-21-2024';
import December3202410 from '../../../../../../.claude/.conversations/claude--disability-benefits-to-reduce-monthly-expenses--80559362/10-december-3-2024';
import December10202411 from '../../../../../../.claude/.conversations/claude--disability-benefits-to-reduce-monthly-expenses--80559362/11-december-10-2024';
import December11202412 from '../../../../../../.claude/.conversations/claude--disability-benefits-to-reduce-monthly-expenses--80559362/12-december-11-2024';
import December12202413 from '../../../../../../.claude/.conversations/claude--disability-benefits-to-reduce-monthly-expenses--80559362/13-december-12-2024';

const Book = $($Book);

export const book = () => (
    <Book>
        {Cover()}
        {Synopsis()}
        {Table()}
        {November220241()}
        {November720242()}
        {November820243()}
        {November920244()}
        {November1120245()}
        {November1420246()}
        {November1520247()}
        {November1820248()}
        {November2120249()}
        {December3202410()}
        {December10202411()}
        {December11202412()}
        {December12202413()}
    </Book>
);

if (import.meta.hot) import.meta.hot.accept(next => { if (next !== undefined) opened.open(next.book); });
