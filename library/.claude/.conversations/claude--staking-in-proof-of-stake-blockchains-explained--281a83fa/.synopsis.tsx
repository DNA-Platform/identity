import { Chapter, Paragraph, Parenthetical, Synopsis, Title } from '@dna-platform/public';

export default () => (
    <Chapter>
        <Synopsis />
        <Title>
            <Parenthetical />
            [[ Synopsis ]]
        </Title>
        <Paragraph>
            The user requested a simple explanation of staking in proof-of-stake blockchain networks followed by
            introductory Russian-language resources on the topic. Claude provided a clear explanation using an apartment
            security deposit analogy, describing how staking involves locking up cryptocurrency as collateral to
            validate transactions, with rewards for honest validation and penalties (slashing) for fraudulent behavior.
            Claude then used web search to find appropriate Russian resources, including the Russian Wikipedia article
            on proof-of-stake, articles from Forklog (a popular Russian crypto publication), and BeInCrypto Russia,
            specifically highlighting beginner-friendly content. The user then requested a complete Russian translation
            of Claude's response while keeping the links intact for functionality. Claude provided a full translation
            that maintained the same structure and analogies while preserving all the original links to the
            Russian-language resources.
        </Paragraph>
    </Chapter>
);
