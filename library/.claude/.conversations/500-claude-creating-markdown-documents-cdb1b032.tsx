import { Chapter, Date, Means, Paragraph, Part, Synopsis, Title } from '@dna-platform/public';
import { Caption } from '../../.manual/20-the-bookshelf~code.tsx';
import { Dated } from '../../.manual/4-the-date~code.tsx';
import { Volume } from '../../.manual/19-the-cover~code.tsx';
import TheCover from './claude--creating-markdown-documents--cdb1b032/.cover.tsx';
import TheSynopsis from './claude--creating-markdown-documents--cdb1b032/.synopsis.tsx';

export default () => (
    <Chapter>
        <Part>October 2025</Part>
        <Dated>
            <Date>[27 October 2025](2025-10-27)</Date>
        </Dated>
        <Volume>{TheCover()}</Volume>
        <Title>[[ Creating markdown documents ]]( claude--Creating markdown documents--cdb1b032 )</Title>
        <Paragraph>
            <Caption />
            A conversation, 16 exchanges: <Means>$[[ Creating markdown documents ]]( claude--Creating markdown documents--cdb1b032 )</Means>.
        </Paragraph>
        <Synopsis>{TheSynopsis()}</Synopsis>
    </Chapter>
);
