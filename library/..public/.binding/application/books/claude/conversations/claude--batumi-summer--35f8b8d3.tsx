import { $ } from '@dna-platform/chemistry';
import { opened } from '../../../opened';
import $Book from '../../../../../../.claude/.conversations/claude--batumi-summer--35f8b8d3/.book';
import Cover from '../../../../../../.claude/.conversations/claude--batumi-summer--35f8b8d3/.cover';
import Synopsis from '../../../../../../.claude/.conversations/claude--batumi-summer--35f8b8d3/.synopsis';
import Table from '../../../../../../.claude/.conversations/claude--batumi-summer--35f8b8d3/.table';
import June920261 from '../../../../../../.claude/.conversations/claude--batumi-summer--35f8b8d3/1-june-9-2026';
import June1120262 from '../../../../../../.claude/.conversations/claude--batumi-summer--35f8b8d3/2-june-11-2026';
import June1220263 from '../../../../../../.claude/.conversations/claude--batumi-summer--35f8b8d3/3-june-12-2026';
import June1320264 from '../../../../../../.claude/.conversations/claude--batumi-summer--35f8b8d3/4-june-13-2026';
import June1420265 from '../../../../../../.claude/.conversations/claude--batumi-summer--35f8b8d3/5-june-14-2026';
import June1520266 from '../../../../../../.claude/.conversations/claude--batumi-summer--35f8b8d3/6-june-15-2026';
import June1620267 from '../../../../../../.claude/.conversations/claude--batumi-summer--35f8b8d3/7-june-16-2026';
import June1720268 from '../../../../../../.claude/.conversations/claude--batumi-summer--35f8b8d3/8-june-17-2026';
import June1820269 from '../../../../../../.claude/.conversations/claude--batumi-summer--35f8b8d3/9-june-18-2026';
import June19202610 from '../../../../../../.claude/.conversations/claude--batumi-summer--35f8b8d3/10-june-19-2026';

const Book = $($Book);

export const book = () => (
    <Book>
        {Cover()}
        {Synopsis()}
        {Table()}
        {June920261()}
        {June1120262()}
        {June1220263()}
        {June1320264()}
        {June1420265()}
        {June1520266()}
        {June1620267()}
        {June1720268()}
        {June1820269()}
        {June19202610()}
    </Book>
);

if (import.meta.hot) import.meta.hot.accept(next => { if (next !== undefined) opened.open(next.book); });
