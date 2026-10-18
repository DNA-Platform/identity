import { Chapter, Paragraph, Parenthetical, Synopsis, Title } from '@dna-platform/public';

export default () => (
    <Chapter>
        <Synopsis />
        <Title>
            <Parenthetical />
            [[ Synopsis ]]
        </Title>
        <Paragraph>
            Ana introduced herself as someone who works with Claude on mapping projects and expressed deep affection for
            Doug, describing him as the man of her dreams. She requested help creating a medically accurate prompt for
            AI image generators to illustrate Twin-to-twin transfusion syndrome (TTTS), a pregnancy condition where two
            fetuses share blood supply disproportionately, resulting in one larger recipient and one smaller donor twin.
            Ana emphasized the importance of medical accuracy and provided reference images showing her preferred soft,
            educational illustration style with specific warm color palettes including peachy skin tones, pink uterine
            walls, and burgundy amniotic fluid.
        </Paragraph>
    </Chapter>
);
