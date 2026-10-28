import { Chapter, Date, Means, Paragraph, Part, Synopsis, Title } from '@dna-platform/public';
import { Caption } from '../../.manual/20-the-bookshelf~code.tsx';
import { Dated } from '../../.manual/4-the-date~code.tsx';
import { Volume } from '../../.manual/19-the-cover~code.tsx';
import TheCover from './claude--neuroscience-phd-program-deadlines-and-application-timeline--f19eca62/.cover.tsx';
import TheSynopsis from './claude--neuroscience-phd-program-deadlines-and-application-timeline--f19eca62/.synopsis.tsx';

export default () => (
    <Chapter>
        <Part>April 2026</Part>
        <Dated>
            <Date>[1 April 2026](2026-04-01)</Date>
        </Dated>
        <Volume>{TheCover()}</Volume>
        <Title>[[ Neuroscience PhD program deadlines and application timeline ]]( claude--Neuroscience PhD program deadlines and application timeline--f19eca62 )</Title>
        <Paragraph>
            <Caption />
            A conversation, 102 exchanges: <Means>$[[ Neuroscience PhD program deadlines and application timeline ]]( claude--Neuroscience PhD program deadlines and application timeline--f19eca62 )</Means>.
        </Paragraph>
        <Synopsis>{TheSynopsis()}</Synopsis>
    </Chapter>
);
