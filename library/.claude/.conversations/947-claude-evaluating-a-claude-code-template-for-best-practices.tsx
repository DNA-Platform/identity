import { Chapter, Date, Means, Paragraph, Part, Synopsis, Title } from '@dna-platform/public';
import { Caption, Dated, Volume } from '../../.manual/.book';
import TheCover from './claude--evaluating-a-claude-code-template-for-best-practices--43d882ae/.cover.tsx';
import TheSynopsis from './claude--evaluating-a-claude-code-template-for-best-practices--43d882ae/.synopsis.tsx';

export default () => (
    <Chapter>
        <Part>February 2026</Part>
        <Dated>
            <Date>[26 February 2026](2026-02-26)</Date>
        </Dated>
        <Volume>{TheCover()}</Volume>
        <Title>[[ Evaluating a Claude code template for best practices ]]( claude--Evaluating a Claude code template for best practices--43d882ae )</Title>
        <Paragraph>
            <Caption />
            A conversation, 26 exchanges: <Means>$[[ Evaluating a Claude code template for best practices ]]( claude--Evaluating a Claude code template for best practices--43d882ae )</Means>.
        </Paragraph>
        <Synopsis>{TheSynopsis()}</Synopsis>
    </Chapter>
);
