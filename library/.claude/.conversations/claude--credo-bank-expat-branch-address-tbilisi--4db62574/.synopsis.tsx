import { Chapter, Paragraph, Parenthetical, Synopsis, Title } from '@dna-platform/public';

export default () => (
    <Chapter>
        <Synopsis />
        <Title>
            <Parenthetical />
            [[ Synopsis ]]
        </Title>
        <Paragraph>
            The person asked for the address of the Credo Bank expat branch in Tbilisi near Saburtalo, specifically
            requesting a format suitable for copying into a wire transfer on the JPMorganChase app. Claude provided the
            address: 16 Ilia Chavchavadze Avenue, Tbilisi, Georgia.
        </Paragraph>
    </Chapter>
);
