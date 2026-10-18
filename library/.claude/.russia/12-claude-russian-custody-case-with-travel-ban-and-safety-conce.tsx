import { Chapter, Means, Paragraph, Synopsis, Title } from '@dna-platform/public';
import { Brief, Volume } from '../../.manual/.book';
import TheCover from '../.conversations/claude--russian-custody-case-with-travel-ban-and-safety-concerns--15312465/.cover.tsx';
import TheSynopsis from '../.conversations/claude--russian-custody-case-with-travel-ban-and-safety-concerns--15312465/.synopsis.tsx';

export default () => (
    <Chapter>
        <Volume>{TheCover()}</Volume>
        <Title>[[ Russian custody case with travel ban and safety concerns ]]( claude--Russian custody case with travel ban and safety concerns--15312465 )</Title>
        <Paragraph>
            <Brief />
            A conversation held in this project, 23 January 2026: <Means>$[[ Russian custody case with travel ban and safety concerns ]]( claude--Russian custody case with travel ban and safety concerns--15312465 )</Means>.
        </Paragraph>
        <Synopsis>{TheSynopsis()}</Synopsis>
    </Chapter>
);
