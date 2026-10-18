import { Chapter, Date, Means, Paragraph, Part, Synopsis, Title } from '@dna-platform/public';
import { Caption, Dated, Volume } from '../../.manual/.book';
import TheCover from './claude--being-russian-is-difficult-my--a79636f2/.cover.tsx';
import TheSynopsis from './claude--being-russian-is-difficult-my--a79636f2/.synopsis.tsx';

export default () => (
    <Chapter>
        <Part>August 2026</Part>
        <Dated>
            <Date>[3 August 2026](2026-08-03)</Date>
        </Dated>
        <Volume>{TheCover()}</Volume>
        <Title>[[ Being Russian is difficult. My… ]]( claude--Being Russian is difficult.. My…--a79636f2 )</Title>
        <Paragraph>
            <Caption />
            A conversation, 10 exchanges: <Means>$[[ Being Russian is difficult. My… ]]( claude--Being Russian is difficult.. My…--a79636f2 )</Means>.
        </Paragraph>
        <Synopsis>{TheSynopsis()}</Synopsis>
    </Chapter>
);
