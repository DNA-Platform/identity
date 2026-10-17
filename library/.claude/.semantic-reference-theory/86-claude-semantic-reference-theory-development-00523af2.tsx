import { Chapter, Means, Paragraph, Synopsis, Title } from '@dna-platform/public';
import { Brief, Volume } from '../../.manual/.book';
import TheCover from '../.conversations/claude--semantic-reference-theory-development--00523af2/.cover.tsx';
import TheSynopsis from '../.conversations/claude--semantic-reference-theory-development--00523af2/.synopsis.tsx';

export default () => (
    <Chapter>
        <Volume>{TheCover()}</Volume>
        <Title>[[ Semantic Reference Theory Development ]]( claude--Semantic Reference Theory Development--00523af2 )</Title>
        <Paragraph>
            <Brief />
            A conversation held in this project, 29 August 2025: <Means>$[[ Semantic Reference Theory Development ]]( claude--Semantic Reference Theory Development--00523af2 )</Means>.
        </Paragraph>
        <Synopsis>{TheSynopsis()}</Synopsis>
    </Chapter>
);
