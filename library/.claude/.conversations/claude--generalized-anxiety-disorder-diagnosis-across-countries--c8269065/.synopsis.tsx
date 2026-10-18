import { Chapter, Paragraph, Parenthetical, Synopsis, Title } from '@dna-platform/public';

export default () => (
    <Chapter>
        <Synopsis />
        <Title>
            <Parenthetical />
            [[ Synopsis ]]
        </Title>
        <Paragraph>
            The person asked about international psychiatric classification systems, specifically how a particular
            personal circumstance would be categorized in Turkey and Russia compared to the American diagnostic
            framework. Claude explained that both Turkey and Russia use the ICD-10 system rather than the DSM-5, and
            that the equivalent ICD-10 classification is F41.1, which shares the same name but differs somewhat in
            diagnostic criteria — notably being less prescriptive about symptom counts and emphasizing autonomic
            symptoms. Claude also provided practical context about how the F41.1 code functions as a universal anchor
            for medical documents, insurance, and administrative purposes in both countries.
        </Paragraph>
    </Chapter>
);
