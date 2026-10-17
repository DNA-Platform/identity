import { Chapter, Paragraph, Parenthetical, Synopsis, Title } from '@dna-platform/public';

export default () => (
    <Chapter>
        <Synopsis />
        <Title>
            <Parenthetical />
            [[ Synopsis ]]
        </Title>
        <Paragraph>
            The user, a theoretical neuroscientist who recently had surgery and was using voice-to-text, engaged in a
            sophisticated financial analysis discussion about potential vulnerabilities in AI infrastructure
            investments. They presented a thesis that current AI scaling approaches will hit fundamental limitations due
            to the quadratic computational complexity (O(n²)) of transformer attention mechanisms, making long-context
            AI economically unviable for consumer applications while remaining expensive for enterprise use. The user
            argued that this scaling wall, combined with the lack of fundamental theoretical breakthroughs in
            understanding intelligence, semantics, and consciousness, could trigger a significant market correction in
            AI infrastructure stocks around 2026-2027.
        </Paragraph>
    </Chapter>
);
