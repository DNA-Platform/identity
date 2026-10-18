import { Chapter, Paragraph, Parenthetical, Synopsis, Title } from '@dna-platform/public';

export default () => (
    <Chapter>
        <Synopsis />
        <Title>
            <Parenthetical />
            [[ Synopsis ]]
        </Title>
        <Paragraph>
            Doug is assisting Ana Krasavina with the setup of her newly registered Individual Entrepreneur (IE) business
            in Georgia called DNA (დიენეი). The conversation covered interpreting Georgian government SMS notifications,
            translating official documents, understanding portal credentials, and preparing for bank account opening at
            Credo Bank. Doug worked through three sequential SMS messages from the Georgian Public Registry (GANSX) and
            Revenue Service, plus a completion message from ExpatHub (the service that handled the registration), asking
            Claude to explain what each number and code meant and which were relevant for banking purposes.
        </Paragraph>
    </Chapter>
);
