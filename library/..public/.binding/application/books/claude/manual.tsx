import { $ } from '@dna-platform/chemistry';
import { opened } from '../../opened';
import $Book from '../../../../../.claude/.manual/.book';
import Cover from '../../../../../.claude/.manual/.cover';
import Synopsis from '../../../../../.claude/.manual/.synopsis';
import Table from '../../../../../.claude/.manual/.table';
import TheActionAndTheResult1 from '../../../../../.claude/.manual/1-the-action-and-the-result';
import TheArtifactAndTheAttachment2 from '../../../../../.claude/.manual/2-the-artifact-and-the-attachment';
import TheProject3 from '../../../../../.claude/.manual/3-the-project';
import ThePage4 from '../../../../../.claude/.manual/4-the-page';
import ThePane5 from '../../../../../.claude/.manual/5-the-pane';
import TheImportedConversation6 from '../../../../../.claude/.manual/6-the-imported-conversation';

const Book = $($Book);

export const book = () => (
    <Book>
        {Cover()}
        {Synopsis()}
        {Table()}
        {TheActionAndTheResult1()}
        {TheArtifactAndTheAttachment2()}
        {TheProject3()}
        {ThePage4()}
        {ThePane5()}
        {TheImportedConversation6()}
    </Book>
);

if (import.meta.hot) import.meta.hot.accept(next => { if (next !== undefined) opened.open(next.book); });
