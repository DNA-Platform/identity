import { Chapter, Date, Means, Paragraph, Part, Synopsis, Title } from '@dna-platform/public';
import { Caption, Dated, Volume } from '../../.manual/.book';
import TheCover from './claude--criminal-allegations-in-russian-civil-custody-cases--97db290c/.cover.tsx';
import TheSynopsis from './claude--criminal-allegations-in-russian-civil-custody-cases--97db290c/.synopsis.tsx';

export default () => (
    <Chapter>
        <Part>January 2026</Part>
        <Dated>
            <Date>[18 January 2026](2026-01-18)</Date>
        </Dated>
        <Volume>{TheCover()}</Volume>
        <Title>[[ Criminal allegations in Russian civil custody cases ]]( claude--Criminal allegations in Russian civil custody cases--97db290c )</Title>
        <Paragraph>
            <Caption />
            A conversation, 50 exchanges: <Means>$[[ Criminal allegations in Russian civil custody cases ]]( claude--Criminal allegations in Russian civil custody cases--97db290c )</Means>.
        </Paragraph>
        <Synopsis>{TheSynopsis()}</Synopsis>
    </Chapter>
);
