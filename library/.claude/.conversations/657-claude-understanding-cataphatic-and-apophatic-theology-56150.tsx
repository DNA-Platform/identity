import { Chapter, Date, Means, Paragraph, Part, Synopsis, Title } from '@dna-platform/public';
import { Caption, Dated, Volume } from '../../.manual/.book';
import TheCover from './claude--understanding-cataphatic-and-apophatic-theology--56150527/.cover.tsx';
import TheSynopsis from './claude--understanding-cataphatic-and-apophatic-theology--56150527/.synopsis.tsx';

export default () => (
    <Chapter>
        <Part>November 2024</Part>
        <Dated>
            <Date>[24 November 2024](2024-11-24)</Date>
        </Dated>
        <Volume>{TheCover()}</Volume>
        <Title>[[ Understanding Cataphatic and Apophatic Theology ]]( claude--Understanding Cataphatic and Apophatic Theology--56150527 )</Title>
        <Paragraph>
            <Caption />
            A conversation, 26 exchanges: <Means>$[[ Understanding Cataphatic and Apophatic Theology ]]( claude--Understanding Cataphatic and Apophatic Theology--56150527 )</Means>.
        </Paragraph>
        <Synopsis>{TheSynopsis()}</Synopsis>
    </Chapter>
);
