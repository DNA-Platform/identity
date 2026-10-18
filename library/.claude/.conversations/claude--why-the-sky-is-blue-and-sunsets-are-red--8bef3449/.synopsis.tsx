import { Chapter, Paragraph, Parenthetical, Synopsis, Title } from '@dna-platform/public';

export default () => (
    <Chapter>
        <Synopsis />
        <Title>
            <Parenthetical />
            [[ Synopsis ]]
        </Title>
        <Paragraph>
            The person asked Claude to explain in approximately four sentences why the sky is blue and why sunsets are
            red. Claude provided a concise scientific explanation covering Rayleigh scattering, the role of wavelength
            in how atmospheric molecules scatter light, why violet light does not dominate despite being scattered most
            strongly, and how the longer atmospheric path at sunset filters out shorter wavelengths to produce red and
            orange hues. Claude also noted that haze, dust, and pollution can intensify sunset colors by scattering
            additional short-wavelength light.
        </Paragraph>
    </Chapter>
);
