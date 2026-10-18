import { Chapter, Means, Paragraph, Synopsis, Title } from '@dna-platform/public';
import { Brief, Volume } from '../../.manual/.book';
import TheCover from '../.conversations/claude--vacation-towns-near-batumi--e5412285/.cover.tsx';
import TheSynopsis from '../.conversations/claude--vacation-towns-near-batumi--e5412285/.synopsis.tsx';

export default () => (
    <Chapter>
        <Volume>{TheCover()}</Volume>
        <Title>[[ Vacation towns near Batumi ]]( claude--Vacation towns near Batumi--e5412285 )</Title>
        <Paragraph>
            <Brief />
            A conversation held in this project, 7 June 2026: <Means>$[[ Vacation towns near Batumi ]]( claude--Vacation towns near Batumi--e5412285 )</Means>.
        </Paragraph>
        <Synopsis>{TheSynopsis()}</Synopsis>
    </Chapter>
);
