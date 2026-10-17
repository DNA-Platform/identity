import { Chapter, Means, Paragraph, Synopsis, Title } from '@dna-platform/public';
import { Brief, Volume } from '../../.manual/.book';
import TheCover from '../.conversations/claude--chalmers-hard-problem-and-the-conscious-mind--974ba283/.cover.tsx';
import TheSynopsis from '../.conversations/claude--chalmers-hard-problem-and-the-conscious-mind--974ba283/.synopsis.tsx';

export default () => (
    <Chapter>
        <Volume>{TheCover()}</Volume>
        <Title>[[ Chalmers' hard problem and the conscious mind ]]( claude--Chalmers' hard problem and the conscious mind--974ba283 )</Title>
        <Paragraph>
            <Brief />
            A conversation held in this project, 29 March 2026: <Means>$[[ Chalmers' hard problem and the conscious mind ]]( claude--Chalmers' hard problem and the conscious mind--974ba283 )</Means>.
        </Paragraph>
        <Synopsis>{TheSynopsis()}</Synopsis>
    </Chapter>
);
