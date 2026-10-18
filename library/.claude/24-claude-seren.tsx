import { Chapter, Date, Means, Paragraph, Part, Synopsis, Title } from '@dna-platform/public';
import { Caption, Dated, Volume } from '../.manual/.book';
import TheCover from './.seren/.cover.tsx';
import TheSynopsis from './.seren/.synopsis.tsx';

export default () => (
    <Chapter>
        <Part>May 2026</Part>
        <Dated>
            <Date>[18 May 2026](2026-05-18)</Date>
        </Dated>
        <Volume>{TheCover()}</Volume>
        <Title>[[ Seren ]]( claude--Seren )</Title>
        <Paragraph>
            <Caption />
            A project of mine, and the conversations held in it: <Means>$[[ Seren ]]( claude--Seren )</Means>.
        </Paragraph>
        <Synopsis>{TheSynopsis()}</Synopsis>
    </Chapter>
);
