import { $ } from '@dna-platform/chemistry';
import { opened } from '../../../opened';
import $Book from '../../../../../../.claude/.conversations/claude--semantic-breakdown-of-svg-paths-and-curves--4ed05e5e/.book';
import Cover from '../../../../../../.claude/.conversations/claude--semantic-breakdown-of-svg-paths-and-curves--4ed05e5e/.cover';
import Synopsis from '../../../../../../.claude/.conversations/claude--semantic-breakdown-of-svg-paths-and-curves--4ed05e5e/.synopsis';
import Table from '../../../../../../.claude/.conversations/claude--semantic-breakdown-of-svg-paths-and-curves--4ed05e5e/.table';
import Conversation1 from '../../../../../../.claude/.conversations/claude--semantic-breakdown-of-svg-paths-and-curves--4ed05e5e/1-conversation';
import SvgLogoEnhancementSpecificationV1o1 from '../../../../../../.claude/.conversations/claude--semantic-breakdown-of-svg-paths-and-curves--4ed05e5e/o1-svg-logo-enhancement-specification-v1';
import SvgLogoEnhancementSpecificationV2o2 from '../../../../../../.claude/.conversations/claude--semantic-breakdown-of-svg-paths-and-curves--4ed05e5e/o2-svg-logo-enhancement-specification-v2';

const Book = $($Book);

export const book = () => (
    <Book>
        {Cover()}
        {Synopsis()}
        {Table()}
        {Conversation1()}
        {SvgLogoEnhancementSpecificationV1o1()}
        {SvgLogoEnhancementSpecificationV2o2()}
    </Book>
);

if (import.meta.hot) import.meta.hot.accept(next => { if (next !== undefined) opened.open(next.book); });
