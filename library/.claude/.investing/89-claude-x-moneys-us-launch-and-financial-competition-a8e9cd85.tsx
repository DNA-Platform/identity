import { Chapter, Means, Paragraph, Synopsis, Title, Date, Part } from '@dna-platform/public';
import { Brief, Dated, Volume } from '../../.manual/.book';
import TheCover from '../.conversations/claude--x-moneys-us-launch-and-financial-competition--a8e9cd85/.cover.tsx';
import TheSynopsis from '../.conversations/claude--x-moneys-us-launch-and-financial-competition--a8e9cd85/.synopsis.tsx';

export default () => (
    <Chapter>
        <Part>June 2026</Part>
        <Dated>
            <Date>[30 June 2026](2026-06-30)</Date>
        </Dated>
        <Volume>{TheCover()}</Volume>
        <Title>[[ X Money's US launch and financial competition ]]( claude--X Money's US launch and financial competition--a8e9cd85 )</Title>
        <Paragraph>
            <Brief />
            A conversation held in this project, 30 June 2026: <Means>$[[ X Money's US launch and financial competition ]]( claude--X Money's US launch and financial competition--a8e9cd85 )</Means>.
        </Paragraph>
        <Synopsis>{TheSynopsis()}</Synopsis>
    </Chapter>
);
