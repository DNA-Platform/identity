import { Chapter, Means, Paragraph, Synopsis, Title, Date, Part } from '@dna-platform/public';
import { Brief, Dated, Volume } from '../../.manual/.book';
import TheCover from '../.conversations/claude--vacation-towns-near-batumi--e5412285/.cover.tsx';
import TheSynopsis from '../.conversations/claude--vacation-towns-near-batumi--e5412285/.synopsis.tsx';

export default () => (
    <Chapter>
        <Part>June 2026</Part>
        <Dated>
            <Date>[7 June 2026](2026-06-07)</Date>
        </Dated>
        <Volume>{TheCover()}</Volume>
        <Title>[[ Vacation towns near Batumi ]]( claude--Vacation towns near Batumi--e5412285 )</Title>
        <Paragraph>
            <Brief />
            A conversation held in this project, 7 June 2026: <Means>$[[ Vacation towns near Batumi ]]( claude--Vacation towns near Batumi--e5412285 )</Means>.
        </Paragraph>
        <Synopsis>{TheSynopsis()}</Synopsis>
    </Chapter>
);
