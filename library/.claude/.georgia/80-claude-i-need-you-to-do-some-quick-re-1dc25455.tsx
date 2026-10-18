import { Chapter, Means, Paragraph, Synopsis, Title } from '@dna-platform/public';
import { Brief, Volume } from '../../.manual/.book';
import TheCover from '../.conversations/claude--i-need-you-to-do-some-quick-re--1dc25455/.cover.tsx';
import TheSynopsis from '../.conversations/claude--i-need-you-to-do-some-quick-re--1dc25455/.synopsis.tsx';

export default () => (
    <Chapter>
        <Volume>{TheCover()}</Volume>
        <Title>[[ I need you to do some quick re… ]]( claude--I need you to do some quick re…--1dc25455 )</Title>
        <Paragraph>
            <Brief />
            A conversation held in this project, 4 July 2026: <Means>$[[ I need you to do some quick re… ]]( claude--I need you to do some quick re…--1dc25455 )</Means>.
        </Paragraph>
        <Synopsis>{TheSynopsis()}</Synopsis>
    </Chapter>
);
