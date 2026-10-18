import { $ } from '@dna-platform/chemistry';
import { opened } from '../../../opened';
import $Book from '../../../../../../.claude/.conversations/claude--extending-react-simple-maps-with-predictable-components--87a581e5/.book';
import Cover from '../../../../../../.claude/.conversations/claude--extending-react-simple-maps-with-predictable-components--87a581e5/.cover';
import Synopsis from '../../../../../../.claude/.conversations/claude--extending-react-simple-maps-with-predictable-components--87a581e5/.synopsis';
import Table from '../../../../../../.claude/.conversations/claude--extending-react-simple-maps-with-predictable-components--87a581e5/.table';
import March2420251 from '../../../../../../.claude/.conversations/claude--extending-react-simple-maps-with-predictable-components--87a581e5/1-march-24-2025';

const Book = $($Book);

export const book = () => (
    <Book>
        {Cover()}
        {Synopsis()}
        {Table()}
        {March2420251()}
    </Book>
);

if (import.meta.hot) import.meta.hot.accept(next => { if (next !== undefined) opened.open(next.book); });
