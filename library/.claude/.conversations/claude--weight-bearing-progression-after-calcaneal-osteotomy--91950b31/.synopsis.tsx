import { Chapter, Paragraph, Parenthetical, Synopsis, Title } from '@dna-platform/public';

export default () => (
    <Chapter>
        <Synopsis />
        <Title>
            <Parenthetical />
            [[ Synopsis ]]
        </Title>
        <Paragraph>
            The user is recovering from a lateral calcaneal osteotomy performed 7 weeks ago and is transitioning to
            partial weight-bearing in a protective boot. They sought detailed information about the typical
            weight-bearing progression protocol following this surgical procedure, including the phases from partial
            weight-bearing through full weight-bearing and the associated physical therapy regimen. Claude provided a
            comprehensive breakdown of the 4-6 week progression timeline, explaining how patients typically advance from
            25-50% weight-bearing in a CAM boot to full weight-bearing in supportive shoes, along with the physical
            therapy components involving range of motion, strengthening, and gait training.
        </Paragraph>
    </Chapter>
);
