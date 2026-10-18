import { Chapter, Means, Paragraph, Synopsis, Title } from '@dna-platform/public';
import { Brief, Volume } from '../../.manual/.book';
import TheCover from '../.conversations/claude--russian-military-conscription-and-coercion-mechanisms--487c612d/.cover.tsx';
import TheSynopsis from '../.conversations/claude--russian-military-conscription-and-coercion-mechanisms--487c612d/.synopsis.tsx';

export default () => (
    <Chapter>
        <Volume>{TheCover()}</Volume>
        <Title>[[ Russian military conscription and coercion mechanisms ]]( claude--Russian military conscription and coercion mechanisms--487c612d )</Title>
        <Paragraph>
            <Brief />
            A conversation held in this project, 4 June 2026: <Means>$[[ Russian military conscription and coercion mechanisms ]]( claude--Russian military conscription and coercion mechanisms--487c612d )</Means>.
        </Paragraph>
        <Synopsis>{TheSynopsis()}</Synopsis>
    </Chapter>
);
