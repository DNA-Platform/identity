import { $ } from '@dna-platform/chemistry';
import { opened } from '../../../opened';
import $Book from '../../../../../../.claude/.conversations/claude--building-and-practicing-a-personal-vocabulary--2fb9debb/.book';
import Cover from '../../../../../../.claude/.conversations/claude--building-and-practicing-a-personal-vocabulary--2fb9debb/.cover';
import Synopsis from '../../../../../../.claude/.conversations/claude--building-and-practicing-a-personal-vocabulary--2fb9debb/.synopsis';
import Table from '../../../../../../.claude/.conversations/claude--building-and-practicing-a-personal-vocabulary--2fb9debb/.table';
import March2320261 from '../../../../../../.claude/.conversations/claude--building-and-practicing-a-personal-vocabulary--2fb9debb/1-march-23-2026';
import March2420262 from '../../../../../../.claude/.conversations/claude--building-and-practicing-a-personal-vocabulary--2fb9debb/2-march-24-2026';
import March2520263 from '../../../../../../.claude/.conversations/claude--building-and-practicing-a-personal-vocabulary--2fb9debb/3-march-25-2026';
import April2820264 from '../../../../../../.claude/.conversations/claude--building-and-practicing-a-personal-vocabulary--2fb9debb/4-april-28-2026';
import April2920265 from '../../../../../../.claude/.conversations/claude--building-and-practicing-a-personal-vocabulary--2fb9debb/5-april-29-2026';
import April3020266 from '../../../../../../.claude/.conversations/claude--building-and-practicing-a-personal-vocabulary--2fb9debb/6-april-30-2026';

const Book = $($Book);

export const book = () => (
    <Book>
        {Cover()}
        {Synopsis()}
        {Table()}
        {March2320261()}
        {March2420262()}
        {March2520263()}
        {April2820264()}
        {April2920265()}
        {April3020266()}
    </Book>
);

if (import.meta.hot) import.meta.hot.accept(next => { if (next !== undefined) opened.open(next.book); });
