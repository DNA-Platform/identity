import { Chapter, Means, Paragraph, Synopsis, Title, Date, Part } from '@dna-platform/public';
import { Brief, Dated, Volume } from '../../.manual/.book';
import TheCover from '../.conversations/claude--chalmers-hard-problem-and-the-conscious-mind--974ba283/.cover.tsx';
import TheSynopsis from '../.conversations/claude--chalmers-hard-problem-and-the-conscious-mind--974ba283/.synopsis.tsx';

export default () => (
    <Chapter>
        <Part>March 2026</Part>
        <Dated>
            <Date>[29 March 2026](2026-03-29)</Date>
        </Dated>
        <Volume>{TheCover()}</Volume>
        <Title>[[ Chalmers' hard problem and the conscious mind ]]( claude--Chalmers' hard problem and the conscious mind--974ba283 )</Title>
        <Paragraph>
            <Brief />
            A conversation held in this project, 29 March 2026: <Means>$[[ Chalmers' hard problem and the conscious mind ]]( claude--Chalmers' hard problem and the conscious mind--974ba283 )</Means>.
        </Paragraph>
        <Synopsis>{TheSynopsis()}</Synopsis>
    </Chapter>
);
