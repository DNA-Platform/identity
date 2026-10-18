import { Chapter, Paragraph, Parenthetical, Synopsis, Title } from '@dna-platform/public';

export default () => (
    <Chapter>
        <Synopsis />
        <Title>
            <Parenthetical />
            [[ Synopsis ]]
        </Title>
        <Paragraph>
            Ana is spending the summer in Batumi, Georgia with two children (one boy and one girl, ages 9 and 11) and
            has been working with Claude across three interconnected workstreams: finding a suitable summer rental
            apartment, identifying English-language learning options for the children, and planning their daily
            schedule. Ana works remotely, does not drive, strongly dislikes phone calls and in-person visits, and
            communicates in Russian (Claude responds in Russian and addresses her as Ana). Her husband Doug is involved
            in decisions and Claude produced English-language summary documents for him. All deliverables are stored in
            /mnt/user-data/outputs/.
        </Paragraph>
    </Chapter>
);
