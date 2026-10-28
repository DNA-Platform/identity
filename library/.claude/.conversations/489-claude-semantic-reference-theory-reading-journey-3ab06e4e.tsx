import { Chapter, Date, Means, Paragraph, Part, Synopsis, Title } from '@dna-platform/public';
import { Caption } from '../../.manual/20-the-bookshelf~code.tsx';
import { Dated } from '../../.manual/4-the-date~code.tsx';
import { Volume } from '../../.manual/19-the-cover~code.tsx';
import TheCover from './claude--semantic-reference-theory-reading-journey--3ab06e4e/.cover.tsx';
import TheSynopsis from './claude--semantic-reference-theory-reading-journey--3ab06e4e/.synopsis.tsx';

export default () => (
    <Chapter>
        <Part>October 2025</Part>
        <Dated>
            <Date>[8 October 2025](2025-10-08)</Date>
        </Dated>
        <Volume>{TheCover()}</Volume>
        <Title>[[ Semantic reference theory reading journey ]]( claude--Semantic reference theory reading journey--3ab06e4e )</Title>
        <Paragraph>
            <Caption />
            A conversation, 162 exchanges: <Means>$[[ Semantic reference theory reading journey ]]( claude--Semantic reference theory reading journey--3ab06e4e )</Means>.
        </Paragraph>
        <Synopsis>{TheSynopsis()}</Synopsis>
    </Chapter>
);
