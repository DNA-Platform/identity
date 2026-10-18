import { Chapter, Means, Paragraph, Synopsis, Title, Date, Part } from '@dna-platform/public';
import { Brief, Dated, Volume } from '../../.manual/.book';
import TheCover from '../.conversations/claude--russian-keyboard-stickers-in-tbilisi--2e947e7f/.cover.tsx';
import TheSynopsis from '../.conversations/claude--russian-keyboard-stickers-in-tbilisi--2e947e7f/.synopsis.tsx';

export default () => (
    <Chapter>
        <Part>January 2026</Part>
        <Dated>
            <Date>[31 January 2026](2026-01-31)</Date>
        </Dated>
        <Volume>{TheCover()}</Volume>
        <Title>[[ Russian keyboard stickers in Tbilisi ]]( claude--Russian keyboard stickers in Tbilisi--2e947e7f )</Title>
        <Paragraph>
            <Brief />
            A conversation held in this project, 31 January 2026: <Means>$[[ Russian keyboard stickers in Tbilisi ]]( claude--Russian keyboard stickers in Tbilisi--2e947e7f )</Means>.
        </Paragraph>
        <Synopsis>{TheSynopsis()}</Synopsis>
    </Chapter>
);
