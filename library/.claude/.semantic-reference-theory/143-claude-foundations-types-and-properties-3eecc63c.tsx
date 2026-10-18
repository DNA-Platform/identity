import { Chapter, Means, Paragraph, Synopsis, Title, Date, Part } from '@dna-platform/public';
import { Brief, Dated, Volume } from '../../.manual/.book';
import TheCover from '../.conversations/claude--foundations-types-and-properties--3eecc63c/.cover.tsx';
import TheSynopsis from '../.conversations/claude--foundations-types-and-properties--3eecc63c/.synopsis.tsx';

export default () => (
    <Chapter>
        <Part>August 2026</Part>
        <Dated>
            <Date>[31 August 2026](2026-08-31)</Date>
        </Dated>
        <Volume>{TheCover()}</Volume>
        <Title>[[ Foundations: Types &amp; Properties ]]( claude--Foundations: Types &amp; Properties--3eecc63c )</Title>
        <Paragraph>
            <Brief />
            A conversation held in this project, 31 August 2026: <Means>$[[ Foundations: Types &amp; Properties ]]( claude--Foundations: Types &amp; Properties--3eecc63c )</Means>.
        </Paragraph>
        <Synopsis>{TheSynopsis()}</Synopsis>
    </Chapter>
);
