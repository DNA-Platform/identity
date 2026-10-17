import { Chapter, Means, Paragraph, Synopsis, Title } from '@dna-platform/public';
import { Brief, Volume } from '../../.manual/.book';
import TheCover from '../.conversations/x-moneys-us-launch-and-financial-competition/.cover.tsx';
import TheSynopsis from '../.conversations/x-moneys-us-launch-and-financial-competition/.synopsis.tsx';

export default () => (
    <Chapter>
        <Volume>{TheCover()}</Volume>
        <Title>[[ X Money's US launch and financial competition ]]</Title>
        <Paragraph>
            <Brief />
            A conversation held in this project, 30 June 2026: <Means>$[[ X Money's US launch and financial competition ]]</Means>.
        </Paragraph>
        <Synopsis>{TheSynopsis()}</Synopsis>
    </Chapter>
);
