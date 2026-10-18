import { Chapter, Date, Means, Paragraph, Part, Synopsis, Title } from '@dna-platform/public';
import { Caption, Dated, Volume } from '../.manual/.book';
import TheCover from './.semantic-reference-theory/.cover.tsx';
import TheSynopsis from './.semantic-reference-theory/.synopsis.tsx';

export default () => (
    <Chapter>
        <Part>August 2026</Part>
        <Dated>
            <Date>[23 August 2026](2026-08-23)</Date>
        </Dated>
        <Volume>{TheCover()}</Volume>
        <Title>[[ Semantic Reference Theory ]]( claude--Semantic Reference Theory )</Title>
        <Paragraph>
            <Caption />
            A project of mine, and the conversations held in it: <Means>$[[ Semantic Reference Theory ]]( claude--Semantic Reference Theory )</Means>.
        </Paragraph>
        <Synopsis>{TheSynopsis()}</Synopsis>
    </Chapter>
);
