import { Chapter, Means, Paragraph, Synopsis, Title } from '@dna-platform/public';
import { Brief, Volume } from '../../.manual/.book';
import TheCover from '../.conversations/telegrams-hypothetical-telephone-product-theory/.cover.tsx';
import TheSynopsis from '../.conversations/telegrams-hypothetical-telephone-product-theory/.synopsis.tsx';

export default () => (
    <Chapter>
        <Volume>{TheCover()}</Volume>
        <Title>[[ Telegram's hypothetical "Telephone" product theory ]]</Title>
        <Paragraph>
            <Brief />
            A conversation held in this project, 19 August 2026: <Means>$[[ Telegram's hypothetical "Telephone" product theory ]]</Means>.
        </Paragraph>
        <Synopsis>{TheSynopsis()}</Synopsis>
    </Chapter>
);
