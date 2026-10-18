import { Chapter, Date, Means, Paragraph, Part, Synopsis, Title } from '@dna-platform/public';
import { Caption, Dated, Volume } from '../../.manual/.book';
import TheCover from './claude--synthesizing-a-career-across-neuroscience-engineering-and-fi--f8a944f7/.cover.tsx';
import TheSynopsis from './claude--synthesizing-a-career-across-neuroscience-engineering-and-fi--f8a944f7/.synopsis.tsx';

export default () => (
    <Chapter>
        <Part>February 2026</Part>
        <Dated>
            <Date>[17 February 2026](2026-02-17)</Date>
        </Dated>
        <Volume>{TheCover()}</Volume>
        <Title>[[ Synthesizing a career across neuroscience, engineering, and finance ]]( claude--Synthesizing a career across neuroscience, engineering, and finance--f8a944f7 )</Title>
        <Paragraph>
            <Caption />
            A conversation, 50 exchanges: <Means>$[[ Synthesizing a career across neuroscience, engineering, and finance ]]( claude--Synthesizing a career across neuroscience, engineering, and finance--f8a944f7 )</Means>.
        </Paragraph>
        <Synopsis>{TheSynopsis()}</Synopsis>
    </Chapter>
);
