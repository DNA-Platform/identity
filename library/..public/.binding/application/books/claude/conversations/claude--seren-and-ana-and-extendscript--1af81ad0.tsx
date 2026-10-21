import { $ } from '@dna-platform/chemistry';
import { opened } from '../../../opened';
import $Book from '../../../../../../.claude/.conversations/claude--seren-and-ana-and-extendscript--1af81ad0/.book';
import Cover from '../../../../../../.claude/.conversations/claude--seren-and-ana-and-extendscript--1af81ad0/.cover';
import Synopsis from '../../../../../../.claude/.conversations/claude--seren-and-ana-and-extendscript--1af81ad0/.synopsis';
import Table from '../../../../../../.claude/.conversations/claude--seren-and-ana-and-extendscript--1af81ad0/.table';
import Conversation1 from '../../../../../../.claude/.conversations/claude--seren-and-ana-and-extendscript--1af81ad0/1-conversation';
import AddLayerAndAddPathScriptsV1o1 from '../../../../../../.claude/.conversations/claude--seren-and-ana-and-extendscript--1af81ad0/o1-add-layer-and-add-path-scripts-v1';
import TaskQueueUsingXmpV1o2 from '../../../../../../.claude/.conversations/claude--seren-and-ana-and-extendscript--1af81ad0/o2-task-queue-using-xmp-v1';
import TaskQueueUsingXmpV2o3 from '../../../../../../.claude/.conversations/claude--seren-and-ana-and-extendscript--1af81ad0/o3-task-queue-using-xmp-v2';
import TaskQueueUsingXmpV3o4 from '../../../../../../.claude/.conversations/claude--seren-and-ana-and-extendscript--1af81ad0/o4-task-queue-using-xmp-v3';
import TaskQueueUsingXmpV4o5 from '../../../../../../.claude/.conversations/claude--seren-and-ana-and-extendscript--1af81ad0/o5-task-queue-using-xmp-v4';
import TaskQueueUsingXmpV5o6 from '../../../../../../.claude/.conversations/claude--seren-and-ana-and-extendscript--1af81ad0/o6-task-queue-using-xmp-v5';
import TaskQueueUsingXmpV6o7 from '../../../../../../.claude/.conversations/claude--seren-and-ana-and-extendscript--1af81ad0/o7-task-queue-using-xmp-v6';
import TaskQueueUsingXmpV7o8 from '../../../../../../.claude/.conversations/claude--seren-and-ana-and-extendscript--1af81ad0/o8-task-queue-using-xmp-v7';
import ArraySplitV1o9 from '../../../../../../.claude/.conversations/claude--seren-and-ana-and-extendscript--1af81ad0/o9-array-split-v1';
import ProjectMilestonesVisualizationV1o10 from '../../../../../../.claude/.conversations/claude--seren-and-ana-and-extendscript--1af81ad0/o10-project-milestones-visualization-v1';
import PatternEvolutionProjectOverviewV1o11 from '../../../../../../.claude/.conversations/claude--seren-and-ana-and-extendscript--1af81ad0/o11-pattern-evolution-project-overview-v1';
import Milestone1DocV1o12 from '../../../../../../.claude/.conversations/claude--seren-and-ana-and-extendscript--1af81ad0/o12-milestone-1-doc-v1';
import Milestone1SvgV1o13 from '../../../../../../.claude/.conversations/claude--seren-and-ana-and-extendscript--1af81ad0/o13-milestone-1-svg-v1';
import Milestone2DocV1o14 from '../../../../../../.claude/.conversations/claude--seren-and-ana-and-extendscript--1af81ad0/o14-milestone-2-doc-v1';
import Milestone2SvgV1o15 from '../../../../../../.claude/.conversations/claude--seren-and-ana-and-extendscript--1af81ad0/o15-milestone-2-svg-v1';
import Milestone3DocV1o16 from '../../../../../../.claude/.conversations/claude--seren-and-ana-and-extendscript--1af81ad0/o16-milestone-3-doc-v1';
import Milestone3SvgV1o17 from '../../../../../../.claude/.conversations/claude--seren-and-ana-and-extendscript--1af81ad0/o17-milestone-3-svg-v1';
import Milestone4DocV1o18 from '../../../../../../.claude/.conversations/claude--seren-and-ana-and-extendscript--1af81ad0/o18-milestone-4-doc-v1';
import Milestone4SvgV1o19 from '../../../../../../.claude/.conversations/claude--seren-and-ana-and-extendscript--1af81ad0/o19-milestone-4-svg-v1';
import Milestone4DocV2o20 from '../../../../../../.claude/.conversations/claude--seren-and-ana-and-extendscript--1af81ad0/o20-milestone-4-doc-v2';
import Milestone4SvgV2o21 from '../../../../../../.claude/.conversations/claude--seren-and-ana-and-extendscript--1af81ad0/o21-milestone-4-svg-v2';
import FirstThreeMilestonesV1o22 from '../../../../../../.claude/.conversations/claude--seren-and-ana-and-extendscript--1af81ad0/o22-first-three-milestones-v1';
import Milestone1RevisedV1o23 from '../../../../../../.claude/.conversations/claude--seren-and-ana-and-extendscript--1af81ad0/o23-milestone-1-revised-v1';
import Milestone1RevisedV2o24 from '../../../../../../.claude/.conversations/claude--seren-and-ana-and-extendscript--1af81ad0/o24-milestone-1-revised-v2';
import Milestone1RevisedV3o25 from '../../../../../../.claude/.conversations/claude--seren-and-ana-and-extendscript--1af81ad0/o25-milestone-1-revised-v3';
import Milestone2RevisedV1o26 from '../../../../../../.claude/.conversations/claude--seren-and-ana-and-extendscript--1af81ad0/o26-milestone-2-revised-v1';
import Milestone3RevisedV1o27 from '../../../../../../.claude/.conversations/claude--seren-and-ana-and-extendscript--1af81ad0/o27-milestone-3-revised-v1';
import Milestone4RevisedV1o28 from '../../../../../../.claude/.conversations/claude--seren-and-ana-and-extendscript--1af81ad0/o28-milestone-4-revised-v1';
import Milestone4SvgV3o29 from '../../../../../../.claude/.conversations/claude--seren-and-ana-and-extendscript--1af81ad0/o29-milestone-4-svg-v3';
import MilestoneIndexV1o30 from '../../../../../../.claude/.conversations/claude--seren-and-ana-and-extendscript--1af81ad0/o30-milestone-index-v1';
import GridVariationV1o31 from '../../../../../../.claude/.conversations/claude--seren-and-ana-and-extendscript--1af81ad0/o31-grid-variation-v1';
import GridVariationOrganicV1o32 from '../../../../../../.claude/.conversations/claude--seren-and-ana-and-extendscript--1af81ad0/o32-grid-variation-organic-v1';
import GridVariationSemanticV1o33 from '../../../../../../.claude/.conversations/claude--seren-and-ana-and-extendscript--1af81ad0/o33-grid-variation-semantic-v1';
import GridVariationFlowV1o34 from '../../../../../../.claude/.conversations/claude--seren-and-ana-and-extendscript--1af81ad0/o34-grid-variation-flow-v1';
import BlockedUiVizV1o35 from '../../../../../../.claude/.conversations/claude--seren-and-ana-and-extendscript--1af81ad0/o35-blocked-ui-viz-v1';
import PythonTasksVizV1o36 from '../../../../../../.claude/.conversations/claude--seren-and-ana-and-extendscript--1af81ad0/o36-python-tasks-viz-v1';
import PythonCompositionVizV1o37 from '../../../../../../.claude/.conversations/claude--seren-and-ana-and-extendscript--1af81ad0/o37-python-composition-viz-v1';
import PythonCompositionLayersV1o38 from '../../../../../../.claude/.conversations/claude--seren-and-ana-and-extendscript--1af81ad0/o38-python-composition-layers-v1';
import UnifiedCommandVizV1o39 from '../../../../../../.claude/.conversations/claude--seren-and-ana-and-extendscript--1af81ad0/o39-unified-command-viz-v1';
import FinalPatternVizV1o40 from '../../../../../../.claude/.conversations/claude--seren-and-ana-and-extendscript--1af81ad0/o40-final-pattern-viz-v1';
import StateSavingVizV1o41 from '../../../../../../.claude/.conversations/claude--seren-and-ana-and-extendscript--1af81ad0/o41-state-saving-viz-v1';
import SelectionExamplesVizV1o42 from '../../../../../../.claude/.conversations/claude--seren-and-ana-and-extendscript--1af81ad0/o42-selection-examples-viz-v1';

const Book = $($Book);

export const book = () => (
    <Book>
        {Cover()}
        {Synopsis()}
        {Table()}
        {Conversation1()}
        {AddLayerAndAddPathScriptsV1o1()}
        {TaskQueueUsingXmpV1o2()}
        {TaskQueueUsingXmpV2o3()}
        {TaskQueueUsingXmpV3o4()}
        {TaskQueueUsingXmpV4o5()}
        {TaskQueueUsingXmpV5o6()}
        {TaskQueueUsingXmpV6o7()}
        {TaskQueueUsingXmpV7o8()}
        {ArraySplitV1o9()}
        {ProjectMilestonesVisualizationV1o10()}
        {PatternEvolutionProjectOverviewV1o11()}
        {Milestone1DocV1o12()}
        {Milestone1SvgV1o13()}
        {Milestone2DocV1o14()}
        {Milestone2SvgV1o15()}
        {Milestone3DocV1o16()}
        {Milestone3SvgV1o17()}
        {Milestone4DocV1o18()}
        {Milestone4SvgV1o19()}
        {Milestone4DocV2o20()}
        {Milestone4SvgV2o21()}
        {FirstThreeMilestonesV1o22()}
        {Milestone1RevisedV1o23()}
        {Milestone1RevisedV2o24()}
        {Milestone1RevisedV3o25()}
        {Milestone2RevisedV1o26()}
        {Milestone3RevisedV1o27()}
        {Milestone4RevisedV1o28()}
        {Milestone4SvgV3o29()}
        {MilestoneIndexV1o30()}
        {GridVariationV1o31()}
        {GridVariationOrganicV1o32()}
        {GridVariationSemanticV1o33()}
        {GridVariationFlowV1o34()}
        {BlockedUiVizV1o35()}
        {PythonTasksVizV1o36()}
        {PythonCompositionVizV1o37()}
        {PythonCompositionLayersV1o38()}
        {UnifiedCommandVizV1o39()}
        {FinalPatternVizV1o40()}
        {StateSavingVizV1o41()}
        {SelectionExamplesVizV1o42()}
    </Book>
);

if (import.meta.hot) import.meta.hot.accept(next => { if (next !== undefined) opened.open(next.book); });
