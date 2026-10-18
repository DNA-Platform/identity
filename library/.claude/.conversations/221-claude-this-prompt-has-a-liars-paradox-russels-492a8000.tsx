import { Chapter, Date, Means, Paragraph, Part, Synopsis, Title } from '@dna-platform/public';
import { Caption, Dated, Volume } from '../../.manual/.book';
import TheCover from './claude--this-prompt-has-a-liars-paradox-russels--492a8000/.cover.tsx';
import TheSynopsis from './claude--this-prompt-has-a-liars-paradox-russels--492a8000/.synopsis.tsx';

export default () => (
    <Chapter>
        <Part>January 2026</Part>
        <Dated>
            <Date>[12 January 2026](2026-01-12)</Date>
        </Dated>
        <Volume>{TheCover()}</Volume>
        <Title>[[ This prompt has a liars paradox ∕ russel’s ]]( claude--This prompt has a liars paradox ∕ russel’s--492a8000 )</Title>
        <Paragraph>
            <Caption />
            A conversation, 1 exchange: <Means>$[[ This prompt has a liars paradox ∕ russel’s ]]( claude--This prompt has a liars paradox ∕ russel’s--492a8000 )</Means>.
        </Paragraph>
        <Synopsis>{TheSynopsis()}</Synopsis>
    </Chapter>
);
