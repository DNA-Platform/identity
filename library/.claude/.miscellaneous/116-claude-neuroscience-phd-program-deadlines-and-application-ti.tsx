import { Chapter, Means, Paragraph, Synopsis, Title, Date, Part } from '@dna-platform/public';
import { Brief } from '../../.manual/10-the-manual~annotations.tsx';
import { Dated } from '../../.manual/4-the-date~code.tsx';
import { Volume } from '../../.manual/19-the-cover~code.tsx';
import TheCover from '../.conversations/claude--neuroscience-phd-program-deadlines-and-application-timeline--f19eca62/.cover.tsx';
import TheSynopsis from '../.conversations/claude--neuroscience-phd-program-deadlines-and-application-timeline--f19eca62/.synopsis.tsx';

export default () => (
    <Chapter>
        <Part>Its conversations</Part>
        <Dated>
            <Date>[1 April 2026](2026-04-01)</Date>
        </Dated>
        <Volume>{TheCover()}</Volume>
        <Title>[[ Neuroscience PhD program deadlines and application timeline ]]( claude--Neuroscience PhD program deadlines and application timeline--f19eca62 )</Title>
        <Paragraph>
            <Brief />
            A conversation held in this project, 1 April 2026: <Means>$[[ Neuroscience PhD program deadlines and application timeline ]]( claude--Neuroscience PhD program deadlines and application timeline--f19eca62 )</Means>.
        </Paragraph>
        <Synopsis>{TheSynopsis()}</Synopsis>
    </Chapter>
);
