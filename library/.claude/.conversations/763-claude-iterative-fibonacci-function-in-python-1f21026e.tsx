import { Chapter, Date, Means, Paragraph, Part, Synopsis, Title } from '@dna-platform/public';
import { Caption, Dated, Volume } from '../../.manual/.book';
import TheCover from './claude--iterative-fibonacci-function-in-python--1f21026e/.cover.tsx';
import TheSynopsis from './claude--iterative-fibonacci-function-in-python--1f21026e/.synopsis.tsx';

export default () => (
    <Chapter>
        <Part>June 2026</Part>
        <Dated>
            <Date>[21 June 2026](2026-06-21)</Date>
        </Dated>
        <Volume>{TheCover()}</Volume>
        <Title>[[ Iterative Fibonacci function in Python ]]( claude--Iterative Fibonacci function in Python--1f21026e )</Title>
        <Paragraph>
            <Caption />
            A conversation, 2 exchanges: <Means>$[[ Iterative Fibonacci function in Python ]]( claude--Iterative Fibonacci function in Python--1f21026e )</Means>.
        </Paragraph>
        <Synopsis>{TheSynopsis()}</Synopsis>
    </Chapter>
);
