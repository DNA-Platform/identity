import { Chapter, Paragraph, Parenthetical, Synopsis, Title } from '@dna-platform/public';

export default () => (
    <Chapter>
        <Synopsis />
        <Title>
            <Parenthetical />
            [[ Synopsis ]]
        </Title>
        <Paragraph>
            The person is staying at the Best Western Bar Harbour Inn in Massapequa Park, NY (5080 Sunrise Hwy) with a
            reservation confirmation number 525851640, checking in April 27 and checking out May 1, 2026. They initially
            referenced the property as a Hampton Inn, then provided visual confirmation of the actual property, allowing
            Claude to redirect research accordingly. The core goal was understanding how to receive mail or packages at
            the hotel during their stay.
        </Paragraph>
    </Chapter>
);
