import { Chapter, Means, Paragraph, Synopsis, Title } from '@dna-platform/public';
import { Brief, Volume } from '../../.manual/.book';
import TheCover from '../.conversations/claude--work-profile-review-and-conversation-context--e4b90c2c/.cover.tsx';
import TheSynopsis from '../.conversations/claude--work-profile-review-and-conversation-context--e4b90c2c/.synopsis.tsx';

export default () => (
    <Chapter>
        <Volume>{TheCover()}</Volume>
        <Title>[[ Work profile review and conversation context ]]( claude--Work profile review and conversation context--e4b90c2c )</Title>
        <Paragraph>
            <Brief />
            A conversation held in this project, 18 February 2026: <Means>$[[ Work profile review and conversation context ]]( claude--Work profile review and conversation context--e4b90c2c )</Means>.
        </Paragraph>
        <Synopsis>{TheSynopsis()}</Synopsis>
    </Chapter>
);
