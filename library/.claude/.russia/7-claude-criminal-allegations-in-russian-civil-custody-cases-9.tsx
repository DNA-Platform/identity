import { Chapter, Means, Paragraph, Synopsis, Title, Date, Part } from '@dna-platform/public';
import { Brief, Dated, Volume } from '../../.manual/.book';
import TheCover from '../.conversations/claude--criminal-allegations-in-russian-civil-custody-cases--97db290c/.cover.tsx';
import TheSynopsis from '../.conversations/claude--criminal-allegations-in-russian-civil-custody-cases--97db290c/.synopsis.tsx';

export default () => (
    <Chapter>
        <Part>January 2026</Part>
        <Dated>
            <Date>[18 January 2026](2026-01-18)</Date>
        </Dated>
        <Volume>{TheCover()}</Volume>
        <Title>[[ Criminal allegations in Russian civil custody cases ]]( claude--Criminal allegations in Russian civil custody cases--97db290c )</Title>
        <Paragraph>
            <Brief />
            A conversation held in this project, 18 January 2026: <Means>$[[ Criminal allegations in Russian civil custody cases ]]( claude--Criminal allegations in Russian civil custody cases--97db290c )</Means>.
        </Paragraph>
        <Synopsis>{TheSynopsis()}</Synopsis>
    </Chapter>
);
