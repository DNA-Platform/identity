import { Chapter, Date, Means, Paragraph, Part, Synopsis, Title } from '@dna-platform/public';
import { Caption, Dated, Volume } from '../../.manual/.book';
import TheCover from './claude--making-cappuccino-with-a-bialetti-moka-express--c87f7ce8/.cover.tsx';
import TheSynopsis from './claude--making-cappuccino-with-a-bialetti-moka-express--c87f7ce8/.synopsis.tsx';

export default () => (
    <Chapter>
        <Part>February 2026</Part>
        <Dated>
            <Date>[5 February 2026](2026-02-05)</Date>
        </Dated>
        <Volume>{TheCover()}</Volume>
        <Title>[[ Making cappuccino with a Bialetti Moka Express ]]( claude--Making cappuccino with a Bialetti Moka Express--c87f7ce8 )</Title>
        <Paragraph>
            <Caption />
            A conversation, 2 exchanges: <Means>$[[ Making cappuccino with a Bialetti Moka Express ]]( claude--Making cappuccino with a Bialetti Moka Express--c87f7ce8 )</Means>.
        </Paragraph>
        <Synopsis>{TheSynopsis()}</Synopsis>
    </Chapter>
);
