import { Chapter, Means, Paragraph, Synopsis, Title } from '@dna-platform/public';
import { Brief, Volume } from '../../.manual/.book';
import TheCover from '../.conversations/claude--eirian-and-ana--1ef30fc4/.cover.tsx';
import TheSynopsis from '../.conversations/claude--eirian-and-ana--1ef30fc4/.synopsis.tsx';

export default () => (
    <Chapter>
        <Volume>{TheCover()}</Volume>
        <Title>[[ Eirian &amp; Ana ]]( claude--Eirian &amp; Ana--1ef30fc4 )</Title>
        <Paragraph>
            <Brief />
            A conversation held in this project, 17 August 2025: <Means>$[[ Eirian &amp; Ana ]]( claude--Eirian &amp; Ana--1ef30fc4 )</Means>.
        </Paragraph>
        <Synopsis>{TheSynopsis()}</Synopsis>
    </Chapter>
);
