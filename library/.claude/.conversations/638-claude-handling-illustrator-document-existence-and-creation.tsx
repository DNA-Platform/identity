import { Chapter, Date, Means, Paragraph, Part, Synopsis, Title } from '@dna-platform/public';
import { Caption, Dated, Volume } from '../../.manual/.book';
import TheCover from './claude--handling-illustrator-document-existence-and-creation-in-exte--2cd14f0c/.cover.tsx';
import TheSynopsis from './claude--handling-illustrator-document-existence-and-creation-in-exte--2cd14f0c/.synopsis.tsx';

export default () => (
    <Chapter>
        <Part>January 2025</Part>
        <Dated>
            <Date>[13 January 2025](2025-01-13)</Date>
        </Dated>
        <Volume>{TheCover()}</Volume>
        <Title>[[ Handling Illustrator Document Existence and Creation in ExtendScript ]]( claude--Handling Illustrator Document Existence and Creation in ExtendScript--2cd14f0c )</Title>
        <Paragraph>
            <Caption />
            A conversation, 40 exchanges: <Means>$[[ Handling Illustrator Document Existence and Creation in ExtendScript ]]( claude--Handling Illustrator Document Existence and Creation in ExtendScript--2cd14f0c )</Means>.
        </Paragraph>
        <Synopsis>{TheSynopsis()}</Synopsis>
    </Chapter>
);
