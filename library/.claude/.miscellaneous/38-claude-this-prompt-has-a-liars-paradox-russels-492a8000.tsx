import { Chapter, Means, Paragraph, Synopsis, Title } from '@dna-platform/public';
import { Brief, Volume } from '../../.manual/.book';
import TheCover from '../.conversations/claude--this-prompt-has-a-liars-paradox-russels--492a8000/.cover.tsx';
import TheSynopsis from '../.conversations/claude--this-prompt-has-a-liars-paradox-russels--492a8000/.synopsis.tsx';

export default () => (
    <Chapter>
        <Volume>{TheCover()}</Volume>
        <Title>[[ This prompt has a liars paradox ∕ russel’s ]]( claude--This prompt has a liars paradox ∕ russel’s--492a8000 )</Title>
        <Paragraph>
            <Brief />
            A conversation held in this project, 12 January 2026: <Means>$[[ This prompt has a liars paradox ∕ russel’s ]]( claude--This prompt has a liars paradox ∕ russel’s--492a8000 )</Means>.
        </Paragraph>
        <Synopsis>{TheSynopsis()}</Synopsis>
    </Chapter>
);
