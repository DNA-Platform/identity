import { Chapter, Means, Paragraph, Synopsis, Title } from '@dna-platform/public';
import { Brief, Volume } from '../../.manual/.book';
import TheCover from '../.conversations/claude--russian-keyboard-stickers-in-tbilisi--2e947e7f/.cover.tsx';
import TheSynopsis from '../.conversations/claude--russian-keyboard-stickers-in-tbilisi--2e947e7f/.synopsis.tsx';

export default () => (
    <Chapter>
        <Volume>{TheCover()}</Volume>
        <Title>[[ Russian keyboard stickers in Tbilisi ]]( claude--Russian keyboard stickers in Tbilisi--2e947e7f )</Title>
        <Paragraph>
            <Brief />
            A conversation held in this project, 31 January 2026: <Means>$[[ Russian keyboard stickers in Tbilisi ]]( claude--Russian keyboard stickers in Tbilisi--2e947e7f )</Means>.
        </Paragraph>
        <Synopsis>{TheSynopsis()}</Synopsis>
    </Chapter>
);
