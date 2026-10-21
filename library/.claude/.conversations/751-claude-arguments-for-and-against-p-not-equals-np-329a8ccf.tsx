import { Chapter, Date, Means, Paragraph, Part, Synopsis, Title } from '@dna-platform/public';
import { Caption, Dated, Volume } from '../../.manual/.book';
import TheCover from './claude--arguments-for-and-against-p-not-equals-np--329a8ccf/.cover.tsx';
import TheSynopsis from './claude--arguments-for-and-against-p-not-equals-np--329a8ccf/.synopsis.tsx';

export default () => (
    <Chapter>
        <Part>June 2026</Part>
        <Dated>
            <Date>[21 June 2026](2026-06-21)</Date>
        </Dated>
        <Volume>{TheCover()}</Volume>
        <Title>[[ Arguments for and against P ≠ NP ]]( claude--Arguments for and against P ≠ NP--329a8ccf )</Title>
        <Paragraph>
            <Caption />
            A conversation, 2 exchanges: <Means>$[[ Arguments for and against P ≠ NP ]]( claude--Arguments for and against P ≠ NP--329a8ccf )</Means>.
        </Paragraph>
        <Synopsis>{TheSynopsis()}</Synopsis>
    </Chapter>
);
