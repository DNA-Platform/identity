import { Chapter, Means, Paragraph, Synopsis, Title, Date, Part } from '@dna-platform/public';
import { Brief } from '../../.manual/10-the-manual~annotations.tsx';
import { Dated } from '../../.manual/4-the-date~code.tsx';
import { Volume } from '../../.manual/19-the-cover~code.tsx';
import TheCover from '../.conversations/claude--semantic-reference-theory-foundations-and-philosophical-conu--49b32234/.cover.tsx';
import TheSynopsis from '../.conversations/claude--semantic-reference-theory-foundations-and-philosophical-conu--49b32234/.synopsis.tsx';

export default () => (
    <Chapter>
        <Part>Its conversations</Part>
        <Dated>
            <Date>[26 June 2026](2026-06-26)</Date>
        </Dated>
        <Volume>{TheCover()}</Volume>
        <Title>[[ Semantic reference theory foundations and philosophical conundrum ]]( claude--Semantic reference theory foundations and philosophical conundrum--49b32234 )</Title>
        <Paragraph>
            <Brief />
            A conversation held in this project, 26 June 2026: <Means>$[[ Semantic reference theory foundations and philosophical conundrum ]]( claude--Semantic reference theory foundations and philosophical conundrum--49b32234 )</Means>.
        </Paragraph>
        <Synopsis>{TheSynopsis()}</Synopsis>
    </Chapter>
);
