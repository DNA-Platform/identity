import { Chapter, Paragraph, Parenthetical, Synopsis, Title } from '@dna-platform/public';

export default () => (
    <Chapter>
        <Synopsis />
        <Title>
            <Parenthetical />
            [[ Synopsis ]]
        </Title>
        <Paragraph>
            The user initially asked about symptoms of Borderline Personality Disorder (BPD), and Claude provided a
            comprehensive clinical overview covering the DSM-5 criteria including emotional dysregulation, unstable
            relationships, identity disturbance, fear of abandonment, impulsivity, self-harm behaviors, and dissociative
            symptoms. The conversation then shifted to the user describing a complex interpersonal situation they were
            trying to understand. The user explained a scenario where they had stepped away to a nearby hotel room to
            ensure proper self-care during recovery from a medical procedure, as relationship conflicts were interfering
            with their healthcare needs. Their partner experienced this as abandonment despite the proximity and
            temporary nature of the arrangement, leading to black-and-white thinking where any separation meant the
            relationship was failing.
        </Paragraph>
    </Chapter>
);
