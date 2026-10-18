import { Chapter, Paragraph, Parenthetical, Synopsis, Title } from '@dna-platform/public';

export default () => (
    <Chapter>
        <Synopsis />
        <Title>
            <Parenthetical />
            [[ Synopsis ]]
        </Title>
        <Paragraph>
            The user sought guidance on properly cleaning a litter box to prevent giardia reinfection in their pet. They
            initially asked about the steps needed beyond removing all litter to ensure the box was safe for use. Claude
            provided detailed instructions including scrubbing with hot soapy water, disinfecting with a bleach solution
            (3/4 cup to 2 cups per gallon of water), ensuring proper contact time, thorough rinsing, and complete air
            drying. The guidance also covered additional steps like twice-daily scooping during treatment, cleaning
            scoops with the same method, and considering steam cleaning as an alternative.
        </Paragraph>
    </Chapter>
);
