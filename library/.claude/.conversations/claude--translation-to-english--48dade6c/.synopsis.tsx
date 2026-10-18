import { Chapter, Paragraph, Parenthetical, Synopsis, Title } from '@dna-platform/public';

export default () => (
    <Chapter>
        <Synopsis />
        <Title>
            <Parenthetical />
            [[ Synopsis ]]
        </Title>
        <Paragraph>
            The person made two translation requests in this conversation. First, they asked Claude to translate a
            Russian-language science article into English. The article covered research on tick saliva, exosomal
            proteins — specifically a glycine-rich protein called GRP — and its role in pathogen transmission from ticks
            to hosts, as well as its potential as a vaccine target. Claude completed the translation and noted that an
            embedded advertisement had been omitted as it was not part of the article content.
        </Paragraph>
    </Chapter>
);
