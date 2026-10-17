import { Chapter, Means, Paragraph, Synopsis, Title } from '@dna-platform/public';
import { Brief, Volume } from '../../.manual/.book';
import TheCover from '../.conversations/claude--x-moneys-us-launch-and-financial-competition--a8e9cd85/.cover.tsx';
import TheSynopsis from '../.conversations/claude--x-moneys-us-launch-and-financial-competition--a8e9cd85/.synopsis.tsx';

export default () => (
    <Chapter>
        <Volume>{TheCover()}</Volume>
        <Title>[[ X Money's US launch and financial competition ]]( claude--X Money's US launch and financial competition--a8e9cd85 )</Title>
        <Paragraph>
            <Brief />
            A conversation held in this project, 30 June 2026: <Means>$[[ X Money's US launch and financial competition ]]( claude--X Money's US launch and financial competition--a8e9cd85 )</Means>.
        </Paragraph>
        <Synopsis>{TheSynopsis()}</Synopsis>
    </Chapter>
);
