import { Chapter, Means, Paragraph, Synopsis, Title, Date, Part } from '@dna-platform/public';
import { Brief, Dated, Volume } from '../../.manual/.book';
import TheCover from '../.conversations/claude--axioms-of-semantic-reference--e4bbd8e8/.cover.tsx';
import TheSynopsis from '../.conversations/claude--axioms-of-semantic-reference--e4bbd8e8/.synopsis.tsx';

export default () => (
    <Chapter>
        <Part>October 2025</Part>
        <Dated>
            <Date>[10 October 2025](2025-10-10)</Date>
        </Dated>
        <Volume>{TheCover()}</Volume>
        <Title>[[ Axioms of semantic reference ]]( claude--Axioms of semantic reference--e4bbd8e8 )</Title>
        <Paragraph>
            <Brief />
            A conversation held in this project, 10 October 2025: <Means>$[[ Axioms of semantic reference ]]( claude--Axioms of semantic reference--e4bbd8e8 )</Means>.
        </Paragraph>
        <Synopsis>{TheSynopsis()}</Synopsis>
    </Chapter>
);
