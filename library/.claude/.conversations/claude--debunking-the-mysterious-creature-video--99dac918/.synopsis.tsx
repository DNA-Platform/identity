import { Chapter, Paragraph, Parenthetical, Synopsis, Title } from '@dna-platform/public';

export default () => (
    <Chapter>
        <Synopsis />
        <Title>
            <Parenthetical />
            [[ Synopsis ]]
        </Title>
        <Paragraph>
            The person shared an image purportedly showing a large, unusual deep-sea creature filmed at 1,100 meters
            depth, posted by a Facebook account called "CCTV Unexplained," and asked whether the creature could be real.
            They expressed healthy skepticism from the outset. Claude assessed the content as almost certainly CGI or
            AI-generated, citing multiple red flags: the nature of the source account as an engagement-bait content
            farm, Facebook's own automated misinformation flagging on the video, the implausibly cinematic lighting and
            composition inconsistent with real submersible footage, and the biomechanically implausible creature design.
        </Paragraph>
    </Chapter>
);
