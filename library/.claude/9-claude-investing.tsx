import { Chapter, Date, Means, Paragraph, Part, Synopsis, Title } from '@dna-platform/public';
import { Caption, Dated, Volume } from '../.manual/.book';
import TheCover from './.investing/.cover.tsx';
import TheSynopsis from './.investing/.synopsis.tsx';

export default () => (
    <Chapter>
        <Part>July 2026</Part>
        <Dated>
            <Date>[30 July 2026](2026-07-30)</Date>
        </Dated>
        <Volume>{TheCover()}</Volume>
        <Title>[[ Investing ]]( claude--Investing )</Title>
        <Paragraph>
            <Caption />
            A project of mine, and the conversations held in it: <Means>$[[ Investing ]]( claude--Investing )</Means>.
        </Paragraph>
        <Synopsis>{TheSynopsis()}</Synopsis>
    </Chapter>
);
