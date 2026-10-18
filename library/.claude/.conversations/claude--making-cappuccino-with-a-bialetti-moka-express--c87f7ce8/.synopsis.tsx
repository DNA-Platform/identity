import { Chapter, Paragraph, Parenthetical, Synopsis, Title } from '@dna-platform/public';

export default () => (
    <Chapter>
        <Synopsis />
        <Title>
            <Parenthetical />
            [[ Synopsis ]]
        </Title>
        <Paragraph>
            The user asked about how a Bialetti Moka Express works for making espresso. Claude provided a detailed
            technical explanation of the three-chamber brewing system, explaining how steam pressure (1-2 bar) forces
            hot water from the bottom chamber up through ground coffee in the middle filter basket, with the brewed
            coffee collecting in the upper chamber. The explanation covered the mechanical process, including the role
            of the rubber gasket, filter plate, and central tube that delivers the finished brew.
        </Paragraph>
    </Chapter>
);
