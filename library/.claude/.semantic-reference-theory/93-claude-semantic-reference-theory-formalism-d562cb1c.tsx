import { Chapter, Means, Paragraph, Synopsis, Title, Date, Part } from '@dna-platform/public';
import { Brief } from '../../.manual/10-the-manual~annotations.tsx';
import { Dated } from '../../.manual/4-the-date~code.tsx';
import { Volume } from '../../.manual/19-the-cover~code.tsx';
import TheCover from '../.conversations/claude--semantic-reference-theory-formalism--d562cb1c/.cover.tsx';
import TheSynopsis from '../.conversations/claude--semantic-reference-theory-formalism--d562cb1c/.synopsis.tsx';

export default () => (
    <Chapter>
        <Part>Its conversations</Part>
        <Dated>
            <Date>[8 October 2025](2025-10-08)</Date>
        </Dated>
        <Volume>{TheCover()}</Volume>
        <Title>[[ Semantic reference theory formalism ]]( claude--Semantic reference theory formalism--d562cb1c )</Title>
        <Paragraph>
            <Brief />
            A conversation held in this project, 8 October 2025: <Means>$[[ Semantic reference theory formalism ]]( claude--Semantic reference theory formalism--d562cb1c )</Means>.
        </Paragraph>
        <Synopsis>{TheSynopsis()}</Synopsis>
    </Chapter>
);
