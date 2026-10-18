import { Chapter, Means, Paragraph, Synopsis, Title } from '@dna-platform/public';
import { Brief, Volume } from '../../.manual/.book';
import TheCover from '../.conversations/claude--batumi-education-centers-partnering-with-foxford--e8f94338/.cover.tsx';
import TheSynopsis from '../.conversations/claude--batumi-education-centers-partnering-with-foxford--e8f94338/.synopsis.tsx';

export default () => (
    <Chapter>
        <Volume>{TheCover()}</Volume>
        <Title>[[ Batumi education centers partnering with Foxford ]]( claude--Batumi education centers partnering with Foxford--e8f94338 )</Title>
        <Paragraph>
            <Brief />
            A conversation held in this project, 15 January 2026: <Means>$[[ Batumi education centers partnering with Foxford ]]( claude--Batumi education centers partnering with Foxford--e8f94338 )</Means>.
        </Paragraph>
        <Synopsis>{TheSynopsis()}</Synopsis>
    </Chapter>
);
