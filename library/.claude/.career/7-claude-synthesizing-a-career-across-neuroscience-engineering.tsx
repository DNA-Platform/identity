import { Chapter, Means, Paragraph, Synopsis, Title } from '@dna-platform/public';
import { Brief, Volume } from '../../.manual/.book';
import TheCover from '../.conversations/claude--synthesizing-a-career-across-neuroscience-engineering-and-fi--f8a944f7/.cover.tsx';
import TheSynopsis from '../.conversations/claude--synthesizing-a-career-across-neuroscience-engineering-and-fi--f8a944f7/.synopsis.tsx';

export default () => (
    <Chapter>
        <Volume>{TheCover()}</Volume>
        <Title>[[ Synthesizing a career across neuroscience, engineering, and finance ]]( claude--Synthesizing a career across neuroscience, engineering, and finance--f8a944f7 )</Title>
        <Paragraph>
            <Brief />
            A conversation held in this project, 17 February 2026: <Means>$[[ Synthesizing a career across neuroscience, engineering, and finance ]]( claude--Synthesizing a career across neuroscience, engineering, and finance--f8a944f7 )</Means>.
        </Paragraph>
        <Synopsis>{TheSynopsis()}</Synopsis>
    </Chapter>
);
