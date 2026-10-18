import { Chapter, Paragraph, Parenthetical, Synopsis, Title } from '@dna-platform/public';

export default () => (
    <Chapter>
        <Synopsis />
        <Title>
            <Parenthetical />
            [[ Synopsis ]]
        </Title>
        <Paragraph>
            The person is recovering from foot surgery and used Claude to search past conversations for surgical
            history, then discussed ongoing recovery symptoms across several follow-up messages. The primary surgery
            (lateral calcaneal osteotomy for flatfoot) occurred in January, with hardware removal (large screws) in
            mid-July after the screws backed out; an infection occurred during this period but the person clarified it
            did not meaningfully extend their recovery timeline. At the start of this conversation (3 months
            post-removal, 9 months post-primary surgery), the person reported new heel pain when bearing weight without
            shoes, despite minimal pain in their supinators over the prior month. Claude distinguished between normal
            soft-tissue reconditioning (diffuse, dull ache worse on first steps, improving with rest) versus concerning
            signs warranting imaging (focal point tenderness, pain worsening with activity, night pain, or signs of
            infection near the old incision).
        </Paragraph>
    </Chapter>
);
