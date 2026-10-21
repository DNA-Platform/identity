import { Chapter, Date, Means, Paragraph, Part, Synopsis, Title } from '@dna-platform/public';
import { Caption, Dated, Volume } from '../../.manual/.book';
import TheCover from './claude--finding-a-specific-google-search-from-december-2024--b60e550d/.cover.tsx';
import TheSynopsis from './claude--finding-a-specific-google-search-from-december-2024--b60e550d/.synopsis.tsx';

export default () => (
    <Chapter>
        <Part>January 2026</Part>
        <Dated>
            <Date>[21 January 2026](2026-01-21)</Date>
        </Dated>
        <Volume>{TheCover()}</Volume>
        <Title>[[ Finding a specific Google search from December 2024 ]]( claude--Finding a specific Google search from December 2024--b60e550d )</Title>
        <Paragraph>
            <Caption />
            A conversation, 2 exchanges: <Means>$[[ Finding a specific Google search from December 2024 ]]( claude--Finding a specific Google search from December 2024--b60e550d )</Means>.
        </Paragraph>
        <Synopsis>{TheSynopsis()}</Synopsis>
    </Chapter>
);
