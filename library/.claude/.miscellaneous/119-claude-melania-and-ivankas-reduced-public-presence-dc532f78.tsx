import { Chapter, Means, Paragraph, Synopsis, Title } from '@dna-platform/public';
import { Brief, Volume } from '../../.manual/.book';
import TheCover from '../.conversations/claude--melania-and-ivankas-reduced-public-presence--dc532f78/.cover.tsx';
import TheSynopsis from '../.conversations/claude--melania-and-ivankas-reduced-public-presence--dc532f78/.synopsis.tsx';

export default () => (
    <Chapter>
        <Volume>{TheCover()}</Volume>
        <Title>[[ Melania and Ivanka's reduced public presence ]]( claude--Melania and Ivanka's reduced public presence--dc532f78 )</Title>
        <Paragraph>
            <Brief />
            A conversation held in this project, 2 April 2026: <Means>$[[ Melania and Ivanka's reduced public presence ]]( claude--Melania and Ivanka's reduced public presence--dc532f78 )</Means>.
        </Paragraph>
        <Synopsis>{TheSynopsis()}</Synopsis>
    </Chapter>
);
