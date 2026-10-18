import { Chapter, Paragraph, Parenthetical, Synopsis, Title } from '@dna-platform/public';

export default () => (
    <Chapter>
        <Synopsis />
        <Title>
            <Parenthetical />
            [[ Synopsis ]]
        </Title>
        <Paragraph>
            This wide-ranging conversation began as a practical sourcing question — where to find American-style
            porterhouse steak and Irish corned beef in Tbilisi — and evolved into an extended discussion of premium meat
            sourcing across Georgia, followed by a deep multi-domain conversation about connoisseurship, grading
            systems, and luxury goods. The person is a New Yorker currently living in Tbilisi (specifically Saburtalo),
            on vacation in Batumi with family at the time of the conversation. They have highly developed aficionado
            sensibilities across steak, Japanese Wagyu, and premium cigars, and a background cooking on a Big Green Egg
            with Peter Luger as their steakhouse reference point and a butcher who shared the same distributor.
        </Paragraph>
    </Chapter>
);
