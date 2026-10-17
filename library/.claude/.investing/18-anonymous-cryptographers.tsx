import { Chapter, Means, Paragraph, Synopsis, Title } from '@dna-platform/public';
import { Brief, Volume } from '../../.manual/.book';
import TheCover from '../.conversations/anonymous-cryptographers/.cover.tsx';
import TheSynopsis from '../.conversations/anonymous-cryptographers/.synopsis.tsx';

export default () => (
    <Chapter>
        <Volume>{TheCover()}</Volume>
        <Title>[[ Anonymous Cryptographers ]]</Title>
        <Paragraph>
            <Brief />
            A conversation held in this project, 18 January 2026: <Means>$[[ Anonymous Cryptographers ]]</Means>.
        </Paragraph>
        <Synopsis>{TheSynopsis()}</Synopsis>
    </Chapter>
);
