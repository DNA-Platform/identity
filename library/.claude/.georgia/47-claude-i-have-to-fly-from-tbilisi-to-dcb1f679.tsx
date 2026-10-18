import { Chapter, Means, Paragraph, Synopsis, Title } from '@dna-platform/public';
import { Brief, Volume } from '../../.manual/.book';
import TheCover from '../.conversations/claude--i-have-to-fly-from-tbilisi-to--dcb1f679/.cover.tsx';
import TheSynopsis from '../.conversations/claude--i-have-to-fly-from-tbilisi-to--dcb1f679/.synopsis.tsx';

export default () => (
    <Chapter>
        <Volume>{TheCover()}</Volume>
        <Title>[[ I have to fly from Tbilisi to… ]]( claude--I have to fly from Tbilisi to…--dcb1f679 )</Title>
        <Paragraph>
            <Brief />
            A conversation held in this project, 20 April 2026: <Means>$[[ I have to fly from Tbilisi to… ]]( claude--I have to fly from Tbilisi to…--dcb1f679 )</Means>.
        </Paragraph>
        <Synopsis>{TheSynopsis()}</Synopsis>
    </Chapter>
);
