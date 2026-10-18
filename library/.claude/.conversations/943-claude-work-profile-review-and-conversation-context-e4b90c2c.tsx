import { Chapter, Date, Means, Paragraph, Part, Synopsis, Title } from '@dna-platform/public';
import { Caption, Dated, Volume } from '../../.manual/.book';
import TheCover from './claude--work-profile-review-and-conversation-context--e4b90c2c/.cover.tsx';
import TheSynopsis from './claude--work-profile-review-and-conversation-context--e4b90c2c/.synopsis.tsx';

export default () => (
    <Chapter>
        <Part>February 2026</Part>
        <Dated>
            <Date>[18 February 2026](2026-02-18)</Date>
        </Dated>
        <Volume>{TheCover()}</Volume>
        <Title>[[ Work profile review and conversation context ]]( claude--Work profile review and conversation context--e4b90c2c )</Title>
        <Paragraph>
            <Caption />
            A conversation, 65 exchanges: <Means>$[[ Work profile review and conversation context ]]( claude--Work profile review and conversation context--e4b90c2c )</Means>.
        </Paragraph>
        <Synopsis>{TheSynopsis()}</Synopsis>
    </Chapter>
);
