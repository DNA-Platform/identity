import { $ } from '@dna-platform/chemistry';
import { opened } from '../../../opened';
import $Book from '../../../../../../.claude/.conversations/claude--automating-illustrator-tasks-with-typescript-plugins--ff7a7be0/.book';
import Cover from '../../../../../../.claude/.conversations/claude--automating-illustrator-tasks-with-typescript-plugins--ff7a7be0/.cover';
import Synopsis from '../../../../../../.claude/.conversations/claude--automating-illustrator-tasks-with-typescript-plugins--ff7a7be0/.synopsis';
import Table from '../../../../../../.claude/.conversations/claude--automating-illustrator-tasks-with-typescript-plugins--ff7a7be0/.table';
import November520241 from '../../../../../../.claude/.conversations/claude--automating-illustrator-tasks-with-typescript-plugins--ff7a7be0/1-november-5-2024';
import November1120242 from '../../../../../../.claude/.conversations/claude--automating-illustrator-tasks-with-typescript-plugins--ff7a7be0/2-november-11-2024';
import November1220243 from '../../../../../../.claude/.conversations/claude--automating-illustrator-tasks-with-typescript-plugins--ff7a7be0/3-november-12-2024';
import November1320244 from '../../../../../../.claude/.conversations/claude--automating-illustrator-tasks-with-typescript-plugins--ff7a7be0/4-november-13-2024';
import November1520245 from '../../../../../../.claude/.conversations/claude--automating-illustrator-tasks-with-typescript-plugins--ff7a7be0/5-november-15-2024';
import November1620246 from '../../../../../../.claude/.conversations/claude--automating-illustrator-tasks-with-typescript-plugins--ff7a7be0/6-november-16-2024';
import November1720247 from '../../../../../../.claude/.conversations/claude--automating-illustrator-tasks-with-typescript-plugins--ff7a7be0/7-november-17-2024';
import November2120248 from '../../../../../../.claude/.conversations/claude--automating-illustrator-tasks-with-typescript-plugins--ff7a7be0/8-november-21-2024';

const Book = $($Book);

export const book = () => (
    <Book>
        {Cover()}
        {Synopsis()}
        {Table()}
        {November520241()}
        {November1120242()}
        {November1220243()}
        {November1320244()}
        {November1520245()}
        {November1620246()}
        {November1720247()}
        {November2120248()}
    </Book>
);

if (import.meta.hot) import.meta.hot.accept(next => { if (next !== undefined) opened.open(next.book); });
