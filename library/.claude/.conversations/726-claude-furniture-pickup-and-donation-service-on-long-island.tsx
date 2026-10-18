import { Chapter, Date, Means, Paragraph, Part, Synopsis, Title } from '@dna-platform/public';
import { Caption, Dated, Volume } from '../../.manual/.book';
import TheCover from './claude--furniture-pickup-and-donation-service-on-long-island--1375bc58/.cover.tsx';
import TheSynopsis from './claude--furniture-pickup-and-donation-service-on-long-island--1375bc58/.synopsis.tsx';

export default () => (
    <Chapter>
        <Part>November 2025</Part>
        <Dated>
            <Date>[25 November 2025](2025-11-25)</Date>
        </Dated>
        <Volume>{TheCover()}</Volume>
        <Title>[[ Furniture pickup and donation service on Long Island ]]( claude--Furniture pickup and donation service on Long Island--1375bc58 )</Title>
        <Paragraph>
            <Caption />
            A conversation, 2 exchanges: <Means>$[[ Furniture pickup and donation service on Long Island ]]( claude--Furniture pickup and donation service on Long Island--1375bc58 )</Means>.
        </Paragraph>
        <Synopsis>{TheSynopsis()}</Synopsis>
    </Chapter>
);
