import { Chapter, Date, Means, Paragraph, Part, Synopsis, Title } from '@dna-platform/public';
import { Caption, Dated, Volume } from '../../.manual/.book';
import TheCover from './claude--tonx-news--fa18c40f/.cover.tsx';
import TheSynopsis from './claude--tonx-news--fa18c40f/.synopsis.tsx';

export default () => (
    <Chapter>
        <Part>February 2026</Part>
        <Dated>
            <Date>[5 February 2026](2026-02-05)</Date>
        </Dated>
        <Volume>{TheCover()}</Volume>
        <Title>[[ TONX News ]]( claude--TONX News--fa18c40f )</Title>
        <Paragraph>
            <Caption />
            A conversation, 29 exchanges: <Means>$[[ TONX News ]]( claude--TONX News--fa18c40f )</Means>.
        </Paragraph>
        <Synopsis>{TheSynopsis()}</Synopsis>
    </Chapter>
);
