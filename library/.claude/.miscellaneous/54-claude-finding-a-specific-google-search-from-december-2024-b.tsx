import { Chapter, Means, Paragraph, Synopsis, Title } from '@dna-platform/public';
import { Brief, Volume } from '../../.manual/.book';
import TheCover from '../.conversations/claude--finding-a-specific-google-search-from-december-2024--b60e550d/.cover.tsx';
import TheSynopsis from '../.conversations/claude--finding-a-specific-google-search-from-december-2024--b60e550d/.synopsis.tsx';

export default () => (
    <Chapter>
        <Volume>{TheCover()}</Volume>
        <Title>[[ Finding a specific Google search from December 2024 ]]( claude--Finding a specific Google search from December 2024--b60e550d )</Title>
        <Paragraph>
            <Brief />
            A conversation held in this project, 21 January 2026: <Means>$[[ Finding a specific Google search from December 2024 ]]( claude--Finding a specific Google search from December 2024--b60e550d )</Means>.
        </Paragraph>
        <Synopsis>{TheSynopsis()}</Synopsis>
    </Chapter>
);
