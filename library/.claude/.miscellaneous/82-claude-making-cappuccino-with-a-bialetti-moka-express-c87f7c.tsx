import { Chapter, Means, Paragraph, Synopsis, Title } from '@dna-platform/public';
import { Brief, Volume } from '../../.manual/.book';
import TheCover from '../.conversations/claude--making-cappuccino-with-a-bialetti-moka-express--c87f7ce8/.cover.tsx';
import TheSynopsis from '../.conversations/claude--making-cappuccino-with-a-bialetti-moka-express--c87f7ce8/.synopsis.tsx';

export default () => (
    <Chapter>
        <Volume>{TheCover()}</Volume>
        <Title>[[ Making cappuccino with a Bialetti Moka Express ]]( claude--Making cappuccino with a Bialetti Moka Express--c87f7ce8 )</Title>
        <Paragraph>
            <Brief />
            A conversation held in this project, 5 February 2026: <Means>$[[ Making cappuccino with a Bialetti Moka Express ]]( claude--Making cappuccino with a Bialetti Moka Express--c87f7ce8 )</Means>.
        </Paragraph>
        <Synopsis>{TheSynopsis()}</Synopsis>
    </Chapter>
);
