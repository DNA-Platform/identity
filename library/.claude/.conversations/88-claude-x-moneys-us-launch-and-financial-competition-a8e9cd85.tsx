import { Chapter, Date, Means, Paragraph, Part, Synopsis, Title } from '@dna-platform/public';
import { Caption, Dated, Volume } from '../../.manual/.book';
import TheCover from './claude--x-moneys-us-launch-and-financial-competition--a8e9cd85/.cover.tsx';
import TheSynopsis from './claude--x-moneys-us-launch-and-financial-competition--a8e9cd85/.synopsis.tsx';

export default () => (
    <Chapter>
        <Part>June 2026</Part>
        <Dated>
            <Date>[30 June 2026](2026-06-30)</Date>
        </Dated>
        <Volume>{TheCover()}</Volume>
        <Title>[[ X Money's US launch and financial competition ]]( claude--X Money's US launch and financial competition--a8e9cd85 )</Title>
        <Paragraph>
            <Caption />
            A conversation, 22 exchanges: <Means>$[[ X Money's US launch and financial competition ]]( claude--X Money's US launch and financial competition--a8e9cd85 )</Means>.
        </Paragraph>
        <Synopsis>{TheSynopsis()}</Synopsis>
    </Chapter>
);
