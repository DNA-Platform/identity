import { Chapter, Means, Paragraph, Synopsis, Title } from '@dna-platform/public';
import { Brief, Volume } from '../../.manual/.book';
import TheCover from '../.conversations/claude--axioms-of-semantic-reference--e4bbd8e8/.cover.tsx';
import TheSynopsis from '../.conversations/claude--axioms-of-semantic-reference--e4bbd8e8/.synopsis.tsx';

export default () => (
    <Chapter>
        <Volume>{TheCover()}</Volume>
        <Title>[[ Axioms of semantic reference ]]( claude--Axioms of semantic reference--e4bbd8e8 )</Title>
        <Paragraph>
            <Brief />
            A conversation held in this project, 10 October 2025: <Means>$[[ Axioms of semantic reference ]]( claude--Axioms of semantic reference--e4bbd8e8 )</Means>.
        </Paragraph>
        <Synopsis>{TheSynopsis()}</Synopsis>
    </Chapter>
);
