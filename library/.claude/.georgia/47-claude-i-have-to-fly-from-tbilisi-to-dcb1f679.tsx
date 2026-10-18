import { Chapter, Means, Paragraph, Synopsis, Title, Date, Part } from '@dna-platform/public';
import { Brief, Dated, Volume } from '../../.manual/.book';
import TheCover from '../.conversations/claude--i-have-to-fly-from-tbilisi-to--dcb1f679/.cover.tsx';
import TheSynopsis from '../.conversations/claude--i-have-to-fly-from-tbilisi-to--dcb1f679/.synopsis.tsx';

export default () => (
    <Chapter>
        <Part>April 2026</Part>
        <Dated>
            <Date>[20 April 2026](2026-04-20)</Date>
        </Dated>
        <Volume>{TheCover()}</Volume>
        <Title>[[ I have to fly from Tbilisi to… ]]( claude--I have to fly from Tbilisi to…--dcb1f679 )</Title>
        <Paragraph>
            <Brief />
            A conversation held in this project, 20 April 2026: <Means>$[[ I have to fly from Tbilisi to… ]]( claude--I have to fly from Tbilisi to…--dcb1f679 )</Means>.
        </Paragraph>
        <Synopsis>{TheSynopsis()}</Synopsis>
    </Chapter>
);
