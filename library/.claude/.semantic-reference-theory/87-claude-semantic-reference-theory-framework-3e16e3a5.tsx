import { Chapter, Means, Paragraph, Synopsis, Title } from '@dna-platform/public';
import { Brief, Volume } from '../../.manual/.book';
import TheCover from '../.conversations/claude--semantic-reference-theory-framework--3e16e3a5/.cover.tsx';
import TheSynopsis from '../.conversations/claude--semantic-reference-theory-framework--3e16e3a5/.synopsis.tsx';

export default () => (
    <Chapter>
        <Volume>{TheCover()}</Volume>
        <Title>[[ Semantic Reference Theory Framework ]]( claude--Semantic Reference Theory Framework--3e16e3a5 )</Title>
        <Paragraph>
            <Brief />
            A conversation held in this project, 28 August 2025: <Means>$[[ Semantic Reference Theory Framework ]]( claude--Semantic Reference Theory Framework--3e16e3a5 )</Means>.
        </Paragraph>
        <Synopsis>{TheSynopsis()}</Synopsis>
    </Chapter>
);
