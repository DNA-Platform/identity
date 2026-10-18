import { Chapter, Paragraph, Parenthetical, Synopsis, Title } from '@dna-platform/public';

export default () => (
    <Chapter>
        <Synopsis />
        <Title>
            <Parenthetical />
            [[ Synopsis ]]
        </Title>
        <Paragraph>
            This conversation is a sustained, technically deep collaboration on a neuroscience research project
            involving mouse primary visual cortex (V1) two-photon calcium imaging data in the Sensorium/neuralpredictors
            static-scan format. The person is analyzing per-trial neural responses to natural images from approximately
            1,600 neurons recorded across two sessions from the same animal—a baseline condition and a post-drug
            condition using the psychedelic compound DOI—with behavioral covariates (pupil size, running speed). The
            project involves building digital-twin encoding models, characterizing population geometry and tuning,
            synthesizing maximally exciting images (MEIs) and neural metamers, and preparing results for the Reimer Lab
            (specifically Jake Reimer). Key collaborators mentioned include Doug (who appears to be the person's PI or
            senior collaborator providing course corrections), Erin Neyhart (whose presentation deck defined the
            analysis goals), and the Reimer and Tolias labs at Baylor as the primary scientific lineage.
        </Paragraph>
    </Chapter>
);
