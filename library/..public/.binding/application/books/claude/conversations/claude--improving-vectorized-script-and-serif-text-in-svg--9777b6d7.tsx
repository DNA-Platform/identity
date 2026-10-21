import { $ } from '@dna-platform/chemistry';
import { opened } from '../../../opened';
import $Book from '../../../../../../.claude/.conversations/claude--improving-vectorized-script-and-serif-text-in-svg--9777b6d7/.book';
import Cover from '../../../../../../.claude/.conversations/claude--improving-vectorized-script-and-serif-text-in-svg--9777b6d7/.cover';
import Synopsis from '../../../../../../.claude/.conversations/claude--improving-vectorized-script-and-serif-text-in-svg--9777b6d7/.synopsis';
import Table from '../../../../../../.claude/.conversations/claude--improving-vectorized-script-and-serif-text-in-svg--9777b6d7/.table';
import Conversation1 from '../../../../../../.claude/.conversations/claude--improving-vectorized-script-and-serif-text-in-svg--9777b6d7/1-conversation';
import DallaTorLogoImprovedVectorV1o1 from '../../../../../../.claude/.conversations/claude--improving-vectorized-script-and-serif-text-in-svg--9777b6d7/o1-dalla-tor-logo-improved-vector-v1';
import DallaTorLogoImprovedVectorWithReusableComponentsV1o2 from '../../../../../../.claude/.conversations/claude--improving-vectorized-script-and-serif-text-in-svg--9777b6d7/o2-dalla-tor-logo-improved-vector-with-reusable-components-v1';

const Book = $($Book);

export const book = () => (
    <Book>
        {Cover()}
        {Synopsis()}
        {Table()}
        {Conversation1()}
        {DallaTorLogoImprovedVectorV1o1()}
        {DallaTorLogoImprovedVectorWithReusableComponentsV1o2()}
    </Book>
);

if (import.meta.hot) import.meta.hot.accept(next => { if (next !== undefined) opened.open(next.book); });
