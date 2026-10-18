import { Chapter, Paragraph, Parenthetical, Synopsis, Title } from '@dna-platform/public';

export default () => (
    <Chapter>
        <Synopsis />
        <Title>
            <Parenthetical />
            [[ Synopsis ]]
        </Title>
        <Paragraph>
            Doug contacted Claude about a hardware compatibility issue with his HP OmniBook 5 laptop and TeamGroup
            T-FORCE G70 PRO 4TB NVMe SSD (model TM8FFH004T with InnoGrit IG5236 controller). The drive works perfectly
            on cold boot but fails to be detected by BIOS after Windows restarts, displaying error 3F0 "Boot Device Not
            Found." Doug had already disabled Fast Startup and tried various Windows power management settings without
            success.
        </Paragraph>
    </Chapter>
);
