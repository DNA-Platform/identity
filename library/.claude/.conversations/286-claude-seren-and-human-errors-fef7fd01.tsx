import { Chapter, Date, Means, Paragraph, Part, Synopsis, Title } from '@dna-platform/public';
import { Caption, Dated, Volume } from '../../.manual/.book';
import TheCover from './claude--seren-and-human-errors--fef7fd01/.cover.tsx';
import TheSynopsis from './claude--seren-and-human-errors--fef7fd01/.synopsis.tsx';

export default () => (
    <Chapter>
        <Part>February 2026</Part>
        <Dated>
            <Date>[21 February 2026](2026-02-21)</Date>
        </Dated>
        <Volume>{TheCover()}</Volume>
        <Title>[[ Seren &amp; Human Errors ]]( claude--Seren &amp; Human Errors--fef7fd01 )</Title>
        <Paragraph>
            <Caption />
            A conversation, 122 exchanges: <Means>$[[ Seren &amp; Human Errors ]]( claude--Seren &amp; Human Errors--fef7fd01 )</Means>.
        </Paragraph>
        <Synopsis>{TheSynopsis()}</Synopsis>
    </Chapter>
);
