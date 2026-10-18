import { Chapter, Paragraph, Parenthetical, Synopsis, Title } from '@dna-platform/public';

export default () => (
    <Chapter>
        <Synopsis />
        <Title>
            <Parenthetical />
            [[ Synopsis ]]
        </Title>
        <Paragraph>
            The person is a US citizen currently living abroad with his Russian wife (Ana) and her two children, whose
            marriage took place in Georgia. He sought detailed guidance on the immigration pathway for his wife and
            stepchildren to obtain US permanent residence, emphasizing the need for primary source verification
            throughout. The conversation covered the full consular processing sequence: filing separate I-130 petitions
            for Ana and each stepchild as immediate relatives, the NVC stage including I-864 affidavit of support
            requirements, and the interview at US Embassy Tbilisi. Key legal distinctions were established, including
            the stepchild definition under INA §101(b)(1)(B), the stepchild/citizenship gap under INA §320, and the IR-2
            classification for the children.
        </Paragraph>
    </Chapter>
);
