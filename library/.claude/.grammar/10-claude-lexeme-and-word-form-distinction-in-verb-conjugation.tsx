import { Chapter, Means, Paragraph, Synopsis, Title, Date, Part } from '@dna-platform/public';
import { Brief, Dated, Volume } from '../../.manual/.book';
import TheCover from '../.conversations/claude--lexeme-and-word-form-distinction-in-verb-conjugation--e0994d83/.cover.tsx';
import TheSynopsis from '../.conversations/claude--lexeme-and-word-form-distinction-in-verb-conjugation--e0994d83/.synopsis.tsx';

export default () => (
    <Chapter>
        <Part>May 2026</Part>
        <Dated>
            <Date>[25 May 2026](2026-05-25)</Date>
        </Dated>
        <Volume>{TheCover()}</Volume>
        <Title>[[ Lexeme and word-form distinction in verb conjugation ]]( claude--Lexeme and word-form distinction in verb conjugation--e0994d83 )</Title>
        <Paragraph>
            <Brief />
            A conversation held in this project, 25 May 2026: <Means>$[[ Lexeme and word-form distinction in verb conjugation ]]( claude--Lexeme and word-form distinction in verb conjugation--e0994d83 )</Means>.
        </Paragraph>
        <Synopsis>{TheSynopsis()}</Synopsis>
    </Chapter>
);
