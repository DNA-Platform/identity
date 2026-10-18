import { Chapter, Date, Means, Paragraph, Part, Synopsis, Title } from '@dna-platform/public';
import { Caption, Dated, Volume } from '../../.manual/.book';
import TheCover from './claude--eirian-and-pattern-setup--0541e92b/.cover.tsx';
import TheSynopsis from './claude--eirian-and-pattern-setup--0541e92b/.synopsis.tsx';

export default () => (
    <Chapter>
        <Part>August 2025</Part>
        <Dated>
            <Date>[12 August 2025](2025-08-12)</Date>
        </Dated>
        <Volume>{TheCover()}</Volume>
        <Title>[[ Eirian &amp; Pattern Setup ]]( claude--Eirian &amp; Pattern Setup--0541e92b )</Title>
        <Paragraph>
            <Caption />
            A conversation, 58 exchanges: <Means>$[[ Eirian &amp; Pattern Setup ]]( claude--Eirian &amp; Pattern Setup--0541e92b )</Means>.
        </Paragraph>
        <Synopsis>{TheSynopsis()}</Synopsis>
    </Chapter>
);
