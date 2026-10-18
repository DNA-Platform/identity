import { Chapter, Means, Paragraph, Synopsis, Title } from '@dna-platform/public';
import { Brief, Volume } from '../../.manual/.book';
import TheCover from '../.conversations/claude--lexeme-and-word-form-distinction-in-verb-conjugation--e0994d83/.cover.tsx';
import TheSynopsis from '../.conversations/claude--lexeme-and-word-form-distinction-in-verb-conjugation--e0994d83/.synopsis.tsx';

export default () => (
    <Chapter>
        <Volume>{TheCover()}</Volume>
        <Title>[[ Lexeme and word-form distinction in verb conjugation ]]( claude--Lexeme and word-form distinction in verb conjugation--e0994d83 )</Title>
        <Paragraph>
            <Brief />
            A conversation held in this project, 25 May 2026: <Means>$[[ Lexeme and word-form distinction in verb conjugation ]]( claude--Lexeme and word-form distinction in verb conjugation--e0994d83 )</Means>.
        </Paragraph>
        <Synopsis>{TheSynopsis()}</Synopsis>
    </Chapter>
);
