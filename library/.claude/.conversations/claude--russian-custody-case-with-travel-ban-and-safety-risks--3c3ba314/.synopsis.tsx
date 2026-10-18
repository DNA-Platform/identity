import { Chapter, Paragraph, Parenthetical, Synopsis, Title } from '@dna-platform/public';

export default () => (
    <Chapter>
        <Synopsis />
        <Title>
            <Parenthetical />
            [[ Synopsis ]]
        </Title>
        <Paragraph>
            Doug engaged Claude in a complex legal strategy discussion regarding Russian custody proceedings where a
            mother and children are abroad while the father remains in Russia. Doug emphasized the need for practical
            case studies and operational realities rather than theoretical legal frameworks, repeatedly redirecting
            Claude away from abstract rules toward understanding what actually happens inside Russian courts. The
            conversation centered on a critical strategic dilemma: whether the mother should request interim custody in
            Russian court, which would require revealing her specific location in Georgia, versus only defending without
            making affirmative requests.
        </Paragraph>
    </Chapter>
);
