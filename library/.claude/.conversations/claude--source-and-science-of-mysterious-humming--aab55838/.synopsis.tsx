import { Chapter, Paragraph, Parenthetical, Synopsis, Title } from '@dna-platform/public';

export default () => (
    <Chapter>
        <Synopsis />
        <Title>
            <Parenthetical />
            [[ Synopsis ]]
        </Title>
        <Paragraph>
            This was a wide-ranging, intellectually rigorous conversation about the mysterious low-frequency humming
            reported by residents near large AI data centers, particularly the Nebius AI Center under construction in
            Vineland, New Jersey. The person drove the discussion with sharp analytical instincts, quickly moving from
            the surface phenomenon to its deeper structural, regulatory, and thermodynamic implications. Key topics
            included the acoustic physics of infrasound and near-infrasound propagation, ground-coupled Rayleigh wave
            transmission, the inadequacy of A-weighted decibel measurements for capturing low-frequency harm, and the
            professional culpability of engineers who designed these systems knowing their acoustic output while relying
            on legal compliance as a substitute for genuine safety analysis.
        </Paragraph>
    </Chapter>
);
