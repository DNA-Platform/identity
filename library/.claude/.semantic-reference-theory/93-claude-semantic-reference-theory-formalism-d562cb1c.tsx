import { Chapter, Means, Paragraph, Synopsis, Title } from '@dna-platform/public';
import { Brief, Volume } from '../../.manual/.book';
import TheCover from '../.conversations/claude--semantic-reference-theory-formalism--d562cb1c/.cover.tsx';
import TheSynopsis from '../.conversations/claude--semantic-reference-theory-formalism--d562cb1c/.synopsis.tsx';

export default () => (
    <Chapter>
        <Volume>{TheCover()}</Volume>
        <Title>[[ Semantic reference theory formalism ]]( claude--Semantic reference theory formalism--d562cb1c )</Title>
        <Paragraph>
            <Brief />
            A conversation held in this project, 8 October 2025: <Means>$[[ Semantic reference theory formalism ]]( claude--Semantic reference theory formalism--d562cb1c )</Means>.
        </Paragraph>
        <Synopsis>{TheSynopsis()}</Synopsis>
    </Chapter>
);
