import { Chapter, Means, Paragraph, Synopsis, Title } from '@dna-platform/public';
import { Brief, Volume } from '../../.manual/.book';
import TheCover from '../.conversations/tons-make-ton-great-again-roadmap-explained/.cover.tsx';
import TheSynopsis from '../.conversations/tons-make-ton-great-again-roadmap-explained/.synopsis.tsx';

export default () => (
    <Chapter>
        <Volume>{TheCover()}</Volume>
        <Title>[[ TON's "Make TON Great Again" roadmap explained ]]</Title>
        <Paragraph>
            <Brief />
            A conversation held in this project, 5 May 2026: <Means>$[[ TON's "Make TON Great Again" roadmap explained ]]</Means>.
        </Paragraph>
        <Synopsis>{TheSynopsis()}</Synopsis>
    </Chapter>
);
