import { Chapter, Date, Means, Paragraph, Part, Synopsis, Title } from '@dna-platform/public';
import { Caption, Dated, Volume } from '../../.manual/.book';
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
