import { Chapter, Means, Paragraph, Synopsis, Title } from '@dna-platform/public';
import { Brief, Volume } from '../../.manual/.book';
import TheCover from '../.conversations/claude--being-russian-is-difficult-my--a79636f2/.cover.tsx';
import TheSynopsis from '../.conversations/claude--being-russian-is-difficult-my--a79636f2/.synopsis.tsx';

export default () => (
    <Chapter>
        <Volume>{TheCover()}</Volume>
        <Title>[[ Being Russian is difficult. My… ]]( claude--Being Russian is difficult.. My…--a79636f2 )</Title>
        <Paragraph>
            <Brief />
            A conversation held in this project, 3 August 2026: <Means>$[[ Being Russian is difficult. My… ]]( claude--Being Russian is difficult.. My…--a79636f2 )</Means>.
        </Paragraph>
        <Synopsis>{TheSynopsis()}</Synopsis>
    </Chapter>
);
