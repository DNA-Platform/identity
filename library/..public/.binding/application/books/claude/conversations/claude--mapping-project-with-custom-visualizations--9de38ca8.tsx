import { $ } from '@dna-platform/chemistry';
import { opened } from '../../../opened';
import $Book from '../../../../../../.claude/.conversations/claude--mapping-project-with-custom-visualizations--9de38ca8/.book';
import Cover from '../../../../../../.claude/.conversations/claude--mapping-project-with-custom-visualizations--9de38ca8/.cover';
import Synopsis from '../../../../../../.claude/.conversations/claude--mapping-project-with-custom-visualizations--9de38ca8/.synopsis';
import Table from '../../../../../../.claude/.conversations/claude--mapping-project-with-custom-visualizations--9de38ca8/.table';
import April120251 from '../../../../../../.claude/.conversations/claude--mapping-project-with-custom-visualizations--9de38ca8/1-april-1-2025';

const Book = $($Book);

export const book = () => (
    <Book>
        {Cover()}
        {Synopsis()}
        {Table()}
        {April120251()}
    </Book>
);

if (import.meta.hot) import.meta.hot.accept(next => { if (next !== undefined) opened.open(next.book); });
