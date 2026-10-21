import { $ } from '@dna-platform/chemistry';
import { opened } from '../../../opened';
import $Book from '../../../../../../.claude/.conversations/claude--fixing-react-simple-maps-errors--329dcf98/.book';
import Cover from '../../../../../../.claude/.conversations/claude--fixing-react-simple-maps-errors--329dcf98/.cover';
import Synopsis from '../../../../../../.claude/.conversations/claude--fixing-react-simple-maps-errors--329dcf98/.synopsis';
import Table from '../../../../../../.claude/.conversations/claude--fixing-react-simple-maps-errors--329dcf98/.table';
import Conversation1 from '../../../../../../.claude/.conversations/claude--fixing-react-simple-maps-errors--329dcf98/1-conversation';
import FixedWorldMapComponentV1o1 from '../../../../../../.claude/.conversations/claude--fixing-react-simple-maps-errors--329dcf98/o1-fixed-world-map-component-v1';
import ImplementationGuideForReactSimpleMapsV1o2 from '../../../../../../.claude/.conversations/claude--fixing-react-simple-maps-errors--329dcf98/o2-implementation-guide-for-react-simple-maps-v1';
import WorldBasicTsxMapPageV1o3 from '../../../../../../.claude/.conversations/claude--fixing-react-simple-maps-errors--329dcf98/o3-world-basic-tsx-map-page-v1';
import SetupInstructionsForWorldMapV1o4 from '../../../../../../.claude/.conversations/claude--fixing-react-simple-maps-errors--329dcf98/o4-setup-instructions-for-world-map-v1';
import UpdatedNextJsConfigV1o5 from '../../../../../../.claude/.conversations/claude--fixing-react-simple-maps-errors--329dcf98/o5-updated-next-js-config-v1';

const Book = $($Book);

export const book = () => (
    <Book>
        {Cover()}
        {Synopsis()}
        {Table()}
        {Conversation1()}
        {FixedWorldMapComponentV1o1()}
        {ImplementationGuideForReactSimpleMapsV1o2()}
        {WorldBasicTsxMapPageV1o3()}
        {SetupInstructionsForWorldMapV1o4()}
        {UpdatedNextJsConfigV1o5()}
    </Book>
);

if (import.meta.hot) import.meta.hot.accept(next => { if (next !== undefined) opened.open(next.book); });
