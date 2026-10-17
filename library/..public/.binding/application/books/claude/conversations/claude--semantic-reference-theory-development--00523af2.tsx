import { $ } from '@dna-platform/chemistry';
import { opened } from '../../../opened';
import $Book from '../../../../../../.claude/.conversations/claude--semantic-reference-theory-development--00523af2/.book';
import Cover from '../../../../../../.claude/.conversations/claude--semantic-reference-theory-development--00523af2/.cover';
import Synopsis from '../../../../../../.claude/.conversations/claude--semantic-reference-theory-development--00523af2/.synopsis';
import Table from '../../../../../../.claude/.conversations/claude--semantic-reference-theory-development--00523af2/.table';
import August2920251 from '../../../../../../.claude/.conversations/claude--semantic-reference-theory-development--00523af2/1-august-29-2025';
import August3120252 from '../../../../../../.claude/.conversations/claude--semantic-reference-theory-development--00523af2/2-august-31-2025';
import September120253 from '../../../../../../.claude/.conversations/claude--semantic-reference-theory-development--00523af2/3-september-1-2025';

const Book = $($Book);

export const book = () => (
    <Book>
        {Cover()}
        {Synopsis()}
        {Table()}
        {August2920251()}
        {August3120252()}
        {September120253()}
    </Book>
);

if (import.meta.hot) import.meta.hot.accept(next => { if (next !== undefined) opened.open(next.book); });
