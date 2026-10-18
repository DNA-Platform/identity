import { Chapter, Paragraph, Parenthetical, Synopsis, Title } from '@dna-platform/public';

export default () => (
    <Chapter>
        <Synopsis />
        <Title>
            <Parenthetical />
            [[ Synopsis ]]
        </Title>
        <Paragraph>
            Ana, a Russian-speaking user, asked Claude to verify mathematical calculations for a custom map illustration
            project. She provided pricing structure details including a $50 base map fee, $35 for the main Eastpointe
            Corporate Center building icon, and $35 for each landmark icon. The project scope included one primary
            building and eleven nearby landmarks, with Ana noting they could exclude the Corporate Costco and keep only
            the retail store location as shown on Google Maps. Claude calculated the total project cost as $470 ($50 +
            $35 + $385 for the eleven landmarks). Ana initially corrected Claude when he mistakenly addressed her as
            "Doug" instead of "Ana," demonstrating her preference for accurate personal recognition. The conversation
            was conducted in Russian, indicating Ana's language preference for mathematical verification tasks.
        </Paragraph>
    </Chapter>
);
