import { Chapter, Date, Means, Paragraph, Part, Synopsis, Title } from '@dna-platform/public';
import { Caption, Dated, Volume } from '../../.manual/.book';
import TheCover from './claude--semantic-reference-theory-foundations-and-philosophical-conu--49b32234/.cover.tsx';
import TheSynopsis from './claude--semantic-reference-theory-foundations-and-philosophical-conu--49b32234/.synopsis.tsx';

export default () => (
    <Chapter>
        <Part>June 2026</Part>
        <Dated>
            <Date>[29 June 2026](2026-06-29)</Date>
        </Dated>
        <Volume>{TheCover()}</Volume>
        <Title>[[ Semantic reference theory foundations and philosophical conundrum ]]( claude--Semantic reference theory foundations and philosophical conundrum--49b32234 )</Title>
        <Paragraph>
            <Caption />
            A conversation, 116 exchanges: <Means>$[[ Semantic reference theory foundations and philosophical conundrum ]]( claude--Semantic reference theory foundations and philosophical conundrum--49b32234 )</Means>.
        </Paragraph>
        <Synopsis>{TheSynopsis()}</Synopsis>
    </Chapter>
);
