import { Chapter, Means, Paragraph, Synopsis, Title, Date, Part } from '@dna-platform/public';
import { Brief, Dated, Volume } from '../../.manual/.book';
import TheCover from '../.conversations/claude--finding-a-specific-google-search-from-december-2024--b60e550d/.cover.tsx';
import TheSynopsis from '../.conversations/claude--finding-a-specific-google-search-from-december-2024--b60e550d/.synopsis.tsx';

export default () => (
    <Chapter>
        <Part>January 2026</Part>
        <Dated>
            <Date>[21 January 2026](2026-01-21)</Date>
        </Dated>
        <Volume>{TheCover()}</Volume>
        <Title>[[ Finding a specific Google search from December 2024 ]]( claude--Finding a specific Google search from December 2024--b60e550d )</Title>
        <Paragraph>
            <Brief />
            A conversation held in this project, 21 January 2026: <Means>$[[ Finding a specific Google search from December 2024 ]]( claude--Finding a specific Google search from December 2024--b60e550d )</Means>.
        </Paragraph>
        <Synopsis>{TheSynopsis()}</Synopsis>
    </Chapter>
);
