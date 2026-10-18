import { Chapter, Means, Paragraph, Synopsis, Title } from '@dna-platform/public';
import { Brief, Volume } from '../../.manual/.book';
import TheCover from '../.conversations/claude--american-public-reaction-to-iran-conflict--96458699/.cover.tsx';
import TheSynopsis from '../.conversations/claude--american-public-reaction-to-iran-conflict--96458699/.synopsis.tsx';

export default () => (
    <Chapter>
        <Volume>{TheCover()}</Volume>
        <Title>[[ American public reaction to Iran conflict ]]( claude--American public reaction to Iran conflict--96458699 )</Title>
        <Paragraph>
            <Brief />
            A conversation held in this project, 31 March 2026: <Means>$[[ American public reaction to Iran conflict ]]( claude--American public reaction to Iran conflict--96458699 )</Means>.
        </Paragraph>
        <Synopsis>{TheSynopsis()}</Synopsis>
    </Chapter>
);
