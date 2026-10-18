import { Chapter, Date, Paragraph, Title } from '@dna-platform/public';
import { Dated, Message, Speaker } from '../../../.manual/.book';
import { Origin } from '../../.manual/.book';

export default () => (
    <Chapter>
        <Dated>
            <Date>[21 June 2026](2026-06-21)</Date>
        </Dated>
        <Title>[[ 21 June 2026 ]]</Title>
        <Message
            at="2026-06-21T06:38:11.434862Z"
        >
            <Origin>019ee8e6-a0e2-71ce-9e51-373142455791</Origin>
            <Speaker>$[[ Doug ]]( Dougs Story )</Speaker>
            <Paragraph>In about four sentences, explain why the sky is blue and why sunsets are red.</Paragraph>
        </Message>
        <Message
            at="2026-06-21T06:38:15.740795Z"
        >
            <Origin>019ee8e6-a0e2-7637-ae5a-6d85c7cdf9f3</Origin>
            <Speaker>$[[ Claude ]]( Dougs Claude )</Speaker>
            <Paragraph>
                The sky looks blue because of Rayleigh scattering: as sunlight passes through the atmosphere, the gas
                molecules scatter shorter wavelengths (blue and violet) far more strongly than longer ones, so blue light
                gets dispersed across the whole sky for your eyes to catch from every direction. (Violet is scattered even
                more, but our eyes are less sensitive to it and the sun emits less of it, so the net effect reads as blue.)
                At sunset, the light travels through much more atmosphere to reach you, which scatters away most of the blue
                and green before it arrives, leaving the longer-wavelength reds and oranges to dominate. That's also why
                haze, dust, or pollution can deepen the effect, since extra particles scatter even more of the remaining
                short wavelengths.
            </Paragraph>
        </Message>
    </Chapter>
);
