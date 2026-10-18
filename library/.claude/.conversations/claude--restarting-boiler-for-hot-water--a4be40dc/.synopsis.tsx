import { Chapter, Paragraph, Parenthetical, Synopsis, Title } from '@dna-platform/public';

export default () => (
    <Chapter>
        <Synopsis />
        <Title>
            <Parenthetical />
            [[ Synopsis ]]
        </Title>
        <Paragraph>
            The user requested help restarting their Airfel Digifix Duo combi boiler to restore hot water functionality.
            Claude provided step-by-step troubleshooting instructions based on visual analysis of the boiler's control
            panel, which showed a digital display reading "23" and two rotary dials for heating and hot water control.
            The initial guidance focused on using the reset button near the red indicator light and checking dial
            settings.
        </Paragraph>
    </Chapter>
);
