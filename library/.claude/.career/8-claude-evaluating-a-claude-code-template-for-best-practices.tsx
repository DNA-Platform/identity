import { Chapter, Means, Paragraph, Synopsis, Title } from '@dna-platform/public';
import { Brief, Volume } from '../../.manual/.book';
import TheCover from '../.conversations/claude--evaluating-a-claude-code-template-for-best-practices--43d882ae/.cover.tsx';
import TheSynopsis from '../.conversations/claude--evaluating-a-claude-code-template-for-best-practices--43d882ae/.synopsis.tsx';

export default () => (
    <Chapter>
        <Volume>{TheCover()}</Volume>
        <Title>[[ Evaluating a Claude code template for best practices ]]( claude--Evaluating a Claude code template for best practices--43d882ae )</Title>
        <Paragraph>
            <Brief />
            A conversation held in this project, 26 February 2026: <Means>$[[ Evaluating a Claude code template for best practices ]]( claude--Evaluating a Claude code template for best practices--43d882ae )</Means>.
        </Paragraph>
        <Synopsis>{TheSynopsis()}</Synopsis>
    </Chapter>
);
