import { Chapter, Means, Paragraph, Synopsis, Title } from '@dna-platform/public';
import { Brief, Volume } from '../../.manual/.book';
import TheCover from '../.conversations/claude--neuroscience-phd-program-deadlines-and-application-timeline--f19eca62/.cover.tsx';
import TheSynopsis from '../.conversations/claude--neuroscience-phd-program-deadlines-and-application-timeline--f19eca62/.synopsis.tsx';

export default () => (
    <Chapter>
        <Volume>{TheCover()}</Volume>
        <Title>[[ Neuroscience PhD program deadlines and application timeline ]]( claude--Neuroscience PhD program deadlines and application timeline--f19eca62 )</Title>
        <Paragraph>
            <Brief />
            A conversation held in this project, 1 April 2026: <Means>$[[ Neuroscience PhD program deadlines and application timeline ]]( claude--Neuroscience PhD program deadlines and application timeline--f19eca62 )</Means>.
        </Paragraph>
        <Synopsis>{TheSynopsis()}</Synopsis>
    </Chapter>
);
