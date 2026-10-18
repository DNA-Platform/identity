import { Chapter, Paragraph, Parenthetical, Synopsis, Title } from '@dna-platform/public';

export default () => (
    <Chapter>
        <Synopsis />
        <Title>
            <Parenthetical />
            [[ Synopsis ]]
        </Title>
        <Paragraph>
            The person asked a highly technical, domain-specific question about reproducing publication-quality Most
            Exciting Input (MEI) images from the sinzlab research ecosystem, specifically referencing Walker et al. 2019
            (Inception loops), the Sensorium 2022/2023 benchmarks, and the GitHub repositories sinzlab/mei,
            sinzlab/nnvision, and sinzlab/sensorium. Their stated goal was to exactly reproduce the MEI visual
            appearance from published figures on a CPU-trained Sensorium-baseline model, avoiding high-frequency noise
            artifacts. They requested concrete numerical values across two categories: synthesis parameters
            (initialization, optimizer, learning rate, iterations, Gaussian blur sigma and annealing schedule, norm
            budget, and which regularizers are actually used) and display/post-processing parameters (colormap, contrast
            normalization strategy, gamma, RF masking, and upsampling).
        </Paragraph>
    </Chapter>
);
