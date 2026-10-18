import { Chapter, Date, Means, Paragraph, Part, Synopsis, Title } from '@dna-platform/public';
import { Caption, Dated, Volume } from '../../.manual/.book';
import TheCover from './claude--lexeme-and-word-form-distinction-in-verb-conjugation--e0994d83/.cover.tsx';
import TheSynopsis from './claude--lexeme-and-word-form-distinction-in-verb-conjugation--e0994d83/.synopsis.tsx';

export default () => (
    <Chapter>
        <Part>May 2026</Part>
        <Dated>
            <Date>[25 May 2026](2026-05-25)</Date>
        </Dated>
        <Volume>{TheCover()}</Volume>
        <Title>[[ Lexeme and word-form distinction in verb conjugation ]]( claude--Lexeme and word-form distinction in verb conjugation--e0994d83 )</Title>
        <Paragraph>
            <Caption />
            A conversation, 32 exchanges: <Means>$[[ Lexeme and word-form distinction in verb conjugation ]]( claude--Lexeme and word-form distinction in verb conjugation--e0994d83 )</Means>.
        </Paragraph>
        <Synopsis>{TheSynopsis()}</Synopsis>
    </Chapter>
);
