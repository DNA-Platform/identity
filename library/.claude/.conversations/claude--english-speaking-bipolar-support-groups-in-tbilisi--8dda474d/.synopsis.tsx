import { Chapter, Paragraph, Parenthetical, Synopsis, Title } from '@dna-platform/public';

export default () => (
    <Chapter>
        <Synopsis />
        <Title>
            <Parenthetical />
            [[ Synopsis ]]
        </Title>
        <Paragraph>
            The person is living in Tbilisi, Georgia (specifically in the Saburtalo area) and seeking two things: an
            English-language peer support group for a personal health situation, and a new English-speaking psychiatrist
            to replace their current one, Salome Gogava. The conversation began with a search for peer support groups in
            Tbilisi modeled on US-based peer-led groups (free, drop-in, run by people with lived experience rather than
            clinicians). After extensive searching across English, Russian, and Georgian sources, Claude concluded
            honestly that no currently-running English-language peer group of that model exists in Tbilisi; the person
            accepted this finding. The conversation then shifted to finding an English-speaking psychiatrist, with the
            person clarifying that their concern is doctors not asking for clarification when they don't understand — a
            communication quality issue, not a native-speaker requirement. The bar was explicitly set as: better English
            than Gogova, who has academic English credentials but apparently struggles in live clinical communication.
        </Paragraph>
    </Chapter>
);
