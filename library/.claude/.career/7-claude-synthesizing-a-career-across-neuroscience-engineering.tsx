import { Chapter, Means, Paragraph, Synopsis, Title, Date, Part } from '@dna-platform/public';
import { Brief, Dated, Volume } from '../../.manual/.book';
import TheCover from '../.conversations/claude--synthesizing-a-career-across-neuroscience-engineering-and-fi--f8a944f7/.cover.tsx';
import TheSynopsis from '../.conversations/claude--synthesizing-a-career-across-neuroscience-engineering-and-fi--f8a944f7/.synopsis.tsx';

export default () => (
    <Chapter>
        <Part>February 2026</Part>
        <Dated>
            <Date>[17 February 2026](2026-02-17)</Date>
        </Dated>
        <Volume>{TheCover()}</Volume>
        <Title>[[ Synthesizing a career across neuroscience, engineering, and finance ]]( claude--Synthesizing a career across neuroscience, engineering, and finance--f8a944f7 )</Title>
        <Paragraph>
            <Brief />
            A conversation held in this project, 17 February 2026: <Means>$[[ Synthesizing a career across neuroscience, engineering, and finance ]]( claude--Synthesizing a career across neuroscience, engineering, and finance--f8a944f7 )</Means>.
        </Paragraph>
        <Synopsis>{TheSynopsis()}</Synopsis>
    </Chapter>
);
