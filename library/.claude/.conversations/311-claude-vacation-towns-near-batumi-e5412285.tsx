import { Chapter, Date, Means, Paragraph, Part, Synopsis, Title } from '@dna-platform/public';
import { Caption, Dated, Volume } from '../../.manual/.book';
import TheCover from './claude--vacation-towns-near-batumi--e5412285/.cover.tsx';
import TheSynopsis from './claude--vacation-towns-near-batumi--e5412285/.synopsis.tsx';

export default () => (
    <Chapter>
        <Part>June 2026</Part>
        <Dated>
            <Date>[7 June 2026](2026-06-07)</Date>
        </Dated>
        <Volume>{TheCover()}</Volume>
        <Title>[[ Vacation towns near Batumi ]]( claude--Vacation towns near Batumi--e5412285 )</Title>
        <Paragraph>
            <Caption />
            A conversation, 28 exchanges: <Means>$[[ Vacation towns near Batumi ]]( claude--Vacation towns near Batumi--e5412285 )</Means>.
        </Paragraph>
        <Synopsis>{TheSynopsis()}</Synopsis>
    </Chapter>
);
