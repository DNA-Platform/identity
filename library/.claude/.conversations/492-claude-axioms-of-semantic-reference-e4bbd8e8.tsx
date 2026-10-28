import { Chapter, Date, Means, Paragraph, Part, Synopsis, Title } from '@dna-platform/public';
import { Caption } from '../../.manual/20-the-bookshelf~code.tsx';
import { Dated } from '../../.manual/4-the-date~code.tsx';
import { Volume } from '../../.manual/19-the-cover~code.tsx';
import TheCover from './claude--axioms-of-semantic-reference--e4bbd8e8/.cover.tsx';
import TheSynopsis from './claude--axioms-of-semantic-reference--e4bbd8e8/.synopsis.tsx';

export default () => (
    <Chapter>
        <Part>October 2025</Part>
        <Dated>
            <Date>[11 October 2025](2025-10-11)</Date>
        </Dated>
        <Volume>{TheCover()}</Volume>
        <Title>[[ Axioms of semantic reference ]]( claude--Axioms of semantic reference--e4bbd8e8 )</Title>
        <Paragraph>
            <Caption />
            A conversation, 272 exchanges: <Means>$[[ Axioms of semantic reference ]]( claude--Axioms of semantic reference--e4bbd8e8 )</Means>.
        </Paragraph>
        <Synopsis>{TheSynopsis()}</Synopsis>
    </Chapter>
);
