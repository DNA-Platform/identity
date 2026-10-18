import { Bold, Chapter, Heading, Line, List, Paragraph, Section, Title, Word } from '@dna-platform/public';
import { CodeBox, Opaque } from '../../../.manual/.book';
import { Version } from '../../.manual/.book';

export default () => (
    <Chapter>
        <Version />
        <Title>[[ SVG Logo Enhancement Specification v1 ]]</Title>
        <Section>
            <Opaque />
            <Heading>SVG Logo Enhancement Specification at version 1</Heading>
            <Heading>SVG Logo Enhancement Specification</Heading>
            <CodeBox
                language="xml"
            >
                {`<?xml version="1.0" encoding="UTF-8"?>
<SVGEnhancementProject xmlns="http://www.example.org/svg-enhancement">
  <!-- 
    Root element containing global project parameters and references
    to both script and sans-serif text components 
  -->
  <ProjectParameters>
    <OverlayColor>red</OverlayColor>
    <PreserveOriginalBounds>true</PreserveOriginalBounds>
    <GlobalAlignmentStrategy>
      <!-- 
        Strategy to ensure perfect alignment between original and enhanced paths 
      -->
      <StartEndPointPreservation>true</StartEndPointPreservation>
      <BoundingBoxPreservation>true</BoundingBoxPreservation>
      <VisualCenterAlignment>true</VisualCenterAlignment>
    </GlobalAlignmentStrategy>
  </ProjectParameters>

  <ScriptText name="DallaTor">
    <!-- 
      The script portion contains 6 disconnected components
      Each component is treated separately and may contain one or more paths
    -->
    <DisconnectedComponents count="6">
      
      <Component id="D" disconnectedParts="2">
        <!-- The D consists of 2 separate parts: bowl and stem -->
        <Path id="D-bowl">
          <OriginalPathDescription>Large curved bowl forming the left side of D</OriginalPathDescription>
          <SimplificationStrategy>
            <PointReduction>
              <Algorithm>VisvalingamWhyatt</Algorithm>
              <TargetPointCount>12</TargetPointCount>
              <ImportanceThreshold>0.05</ImportanceThreshold>
            </PointReduction>
          </SimplificationStrategy>
          <SmoothingAlgorithm>
            <Type>CatmullRom</Type>
            <TensionFactor>0.5</TensionFactor>
            <PreserveCriticalPoints>true</PreserveCriticalPoints>
          </SmoothingAlgorithm>
          <Constraints>
            <PreserveStartPoint>true</PreserveStartPoint>
            <PreserveEndPoint>true</PreserveEndPoint>
            <MaintainThicknessVariation>true</MaintainThicknessVariation>
          </Constraints>
        </Path>
        
        <Path id="D-stem">
          <OriginalPathDescription>Vertical stem of the D character</OriginalPathDescription>
          <SimplificationStrategy>
            <PointReduction>
              <Algorithm>VisvalingamWhyatt</Algorithm>
              <TargetPointCount>8</TargetPointCount>
              <ImportanceThreshold>0.05</ImportanceThreshold>
            </PointReduction>
          </SimplificationStrategy>
          <SmoothingAlgorithm>
            <Type>CatmullRom</Type>
            <TensionFactor>0.5</TensionFactor>
            <PreserveCriticalPoints>true</PreserveCriticalPoints>
          </SmoothingAlgorithm>
          <Constraints>
            <PreserveTopPoint>true</PreserveTopPoint>
            <PreserveBottomPoint>true</PreserveBottomPoint>
            <MaintainThicknessVariation>true</MaintainThicknessVariation>
          </Constraints>
        </Path>
      </Component>
      
      <Component id="alla">
        <!-- The 'alla' portion is a single connected script element -->
        <Path id="alla-connected">
          <OriginalPathDescription>Connected script forming the 'alla' portion</OriginalPathDescription>
          <SimplificationStrategy>
            <PointReduction>
              <Algorithm>VisvalingamWhyatt</Algorithm>
              <TargetPointCount>24</TargetPointCount>
              <ImportanceThreshold>0.03</ImportanceThreshold>
            </PointReduction>
            <LetterAwareSimplification>
              <!-- Extra simplification for vertical stems of 'l' letters -->
              <Feature type="verticalStem">
                <TargetPointCount>6</TargetPointCount>
              </Feature>
              <!-- Preserve complexity in bowls of 'a' letters -->
              <Feature type="bowl">
                <PreserveDetail>true</PreserveDetail>
              </Feature>
            </LetterAwareSimplification>
          </SimplificationStrategy>
          <SmoothingAlgorithm>
            <Type>CatmullRom</Type>
            <TensionFactor>0.5</TensionFactor>
            <PreserveCriticalPoints>true</PreserveCriticalPoints>
          </SmoothingAlgorithm>
          <Constraints>
            <PreserveStartPoint>true</PreserveStartPoint>
            <PreserveEndPoint>true</PreserveEndPoint>
            <MaintainThicknessVariation>true</MaintainThicknessVariation>
            <PreserveLetterConnections>true</PreserveLetterConnections>
          </Constraints>
        </Path>
      </Component>
      
      <Component id="T">
        <!-- The 'T' consists of a horizontal bar and vertical stem -->
        <Path id="T-horizontal">
          <OriginalPathDescription>Horizontal crossbar of the T character</OriginalPathDescription>
          <SimplificationStrategy>
            <PointReduction>
              <Algorithm>VisvalingamWhyatt</Algorithm>
              <TargetPointCount>10</TargetPointCount>
              <ImportanceThreshold>0.05</ImportanceThreshold>
            </PointReduction>
          </SimplificationStrategy>
          <SmoothingAlgorithm>
            <Type>CatmullRom</Type>
            <TensionFactor>0.5</TensionFactor>
            <PreserveCriticalPoints>true</PreserveCriticalPoints>
          </SmoothingAlgorithm>
          <Constraints>
            <PreserveStartPoint>true</PreserveStartPoint>
            <PreserveEndPoint>true</PreserveEndPoint>
            <MaintainThicknessVariation>true</MaintainThicknessVariation>
          </Constraints>
        </Path>
        
        <Path id="T-stem">
          <OriginalPathDescription>Vertical stem of the T character</OriginalPathDescription>
          <SimplificationStrategy>
            <PointReduction>
              <Algorithm>VisvalingamWhyatt</Algorithm>
              <TargetPointCount>8</TargetPointCount>
              <ImportanceThreshold>0.05</ImportanceThreshold>
            </PointReduction>
          </SimplificationStrategy>
          <SmoothingAlgorithm>
            <Type>CatmullRom</Type>
            <TensionFactor>0.5</TensionFactor>
            <PreserveCriticalPoints>true</PreserveCriticalPoints>
          </SmoothingAlgorithm>
          <Constraints>
            <PreserveTopPoint>true</PreserveTopPoint>
            <PreserveBottomPoint>true</PreserveBottomPoint>
            <MaintainThicknessVariation>true</MaintainThicknessVariation>
          </Constraints>
        </Path>
      </Component>
      
      <Component id="o">
        <!-- The 'o' is a single oval shape -->
        <Path id="o-oval">
          <OriginalPathDescription>Oval shape forming the 'o' character</OriginalPathDescription>
          <SimplificationStrategy>
            <PointReduction>
              <Algorithm>VisvalingamWhyatt</Algorithm>
              <TargetPointCount>16</TargetPointCount>
              <ImportanceThreshold>0.04</ImportanceThreshold>
            </PointReduction>
          </SimplificationStrategy>
          <SmoothingAlgorithm>
            <Type>CatmullRom</Type>
            <TensionFactor>0.5</TensionFactor>
            <PreserveCriticalPoints>true</PreserveCriticalPoints>
          </SmoothingAlgorithm>
          <Constraints>
            <PreserveClosedPath>true</PreserveClosedPath>
            <MaintainSymmetry>partial</MaintainSymmetry>
            <MaintainThicknessVariation>true</MaintainThicknessVariation>
          </Constraints>
        </Path>
      </Component>
      
      <Component id="r">
        <!-- The 'r' consists of a stem and flourish -->
        <Path id="r-combined">
          <OriginalPathDescription>Stem and flourish of the 'r' character</OriginalPathDescription>
          <SimplificationStrategy>
            <PointReduction>
              <Algorithm>VisvalingamWhyatt</Algorithm>
              <TargetPointCount>14</TargetPointCount>
              <ImportanceThreshold>0.04</ImportanceThreshold>
            </PointReduction>
            <LetterAwareSimplification>
              <!-- Extra simplification for vertical stem -->
              <Feature type="verticalStem">
                <TargetPointCount>6</TargetPointCount>
              </Feature>
              <!-- Preserve detail in the flourish -->
              <Feature type="flourish">
                <PreserveDetail>true</PreserveDetail>
              </Feature>
            </LetterAwareSimplification>
          </SimplificationStrategy>
          <SmoothingAlgorithm>
            <Type>CatmullRom</Type>
            <TensionFactor>0.5</TensionFactor>
            <PreserveCriticalPoints>true</PreserveCriticalPoints>
          </SmoothingAlgorithm>
          <Constraints>
            <PreserveStartPoint>true</PreserveStartPoint>
            <PreserveEndPoint>true</PreserveEndPoint>
            <MaintainThicknessVariation>true</MaintainThicknessVariation>
          </Constraints>
        </Path>
      </Component>
    </DisconnectedComponents>
  </ScriptText>

  <SansSerifText name="FLAVOR_OF_ITALY">
    <!-- 
      The sans-serif portion consists of 13 individual characters
      Each character has specific typographic requirements and constraints
    -->
    <TypographicParameters>
      <Baseline>10900</Baseline>
      <CapHeight>1000</CapHeight>
      <StrokeWidth>120</StrokeWidth>
      <LetterSpacing>300</LetterSpacing>
    </TypographicParameters>
    
    <ReusableComponents>
      <!-- 
        Define reusable components that will be shared across multiple letters
      -->
      <Component id="verticalStem">
        <Description>Standard vertical stem for letters F, L, I, T</Description>
        <Width>120</Width>
        <Height>1000</Height>
        <Path>M0,0 V1000 H120 V0 Z</Path>
      </Component>
      
      <Component id="horizontalBar">
        <Description>Standard horizontal bar for letters F, L, E, T</Description>
        <Width variable="true" />
        <Height>120</Height>
        <Path>M0,0 H{width} V120 H0 Z</Path>
      </Component>
      
      <Component id="diagonalStroke">
        <Description>Standard diagonal stroke for letters A, V, Y</Description>
        <Width>120</Width>
        <Angle variable="true" />
        <Path parametric="true" />
      </Component>
      
      <Component id="ovalForm">
        <Description>Standard oval form for letter O</Description>
        <Width>800</Width>
        <Height>1000</Height>
        <StrokeWidth>120</StrokeWidth>
        <Path type="elliptical" />
      </Component>
    </ReusableComponents>
    
    <Characters>
      <Character id="F" occurrences="2">
        <Components>
          <ComponentRef ref="verticalStem" />
          <ComponentRef ref="horizontalBar" position="top" width="700" />
          <ComponentRef ref="horizontalBar" position="middle" y="400" width="600" />
        </Components>
        <SimplificationStrategy>
          <GeometricConstruction>true</GeometricConstruction>
          <PreciseRightAngles>true</PreciseRightAngles>
        </SimplificationStrategy>
        <Consistency>
          <EnsureIdenticalOccurrences>true</EnsureIdenticalOccurrences>
          <MatchStrokeWidth target="All" />
        </Consistency>
      </Character>
      
      <Character id="L" occurrences="2">
        <Components>
          <ComponentRef ref="verticalStem" />
          <ComponentRef ref="horizontalBar" position="bottom" width="700" />
        </Components>
        <SimplificationStrategy>
          <GeometricConstruction>true</GeometricConstruction>
          <PreciseRightAngles>true</PreciseRightAngles>
        </SimplificationStrategy>
        <Consistency>
          <EnsureIdenticalOccurrences>true</EnsureIdenticalOccurrences>
          <MatchStrokeWidth target="All" />
          <MatchComponent target="F" component="verticalStem" />
          <MatchComponent target="F" component="horizontalBar" attribute="width" />
        </Consistency>
      </Character>
      
      <Character id="A" occurrences="2">
        <Components>
          <ComponentRef ref="diagonalStroke" angle="-75" />
          <ComponentRef ref="diagonalStroke" angle="75" />
          <ComponentRef ref="horizontalBar" position="middle" y="400" width="600" />
        </Components>
        <SimplificationStrategy>
          <GeometricConstruction>true</GeometricConstruction>
          <PreciseAngles>true</PreciseAngles>
        </SimplificationStrategy>
        <Consistency>
          <EnsureIdenticalOccurrences>true</EnsureIdenticalOccurrences>
          <MatchStrokeWidth target="All" />
          <MatchComponent target="V" component="diagonalStroke" attribute="angle" relation="inverted" />
        </Consistency>
      </Character>
      
      <Character id="V">
        <Components>
          <ComponentRef ref="diagonalStroke" angle="-75" />
          <ComponentRef ref="diagonalStroke" angle="75" />
        </Components>
        <SimplificationStrategy>
          <GeometricConstruction>true</GeometricConstruction>
          <PreciseAngles>true</PreciseAngles>
          <PreciseVertex>true</PreciseVertex>
        </SimplificationStrategy>
        <Consistency>
          <MatchStrokeWidth target="All" />
          <MatchComponent target="A" component="diagonalStroke" attribute="angle" relation="inverted" />
        </Consistency>
      </Character>
      
      <Character id="O" occurrences="2">
        <Components>
          <ComponentRef ref="ovalForm" />
        </Components>
        <SimplificationStrategy>
          <GeometricConstruction>true</GeometricConstruction>
          <PerfectSymmetry>true</PerfectSymmetry>
        </SimplificationStrategy>
        <Consistency>
          <EnsureIdenticalOccurrences>true</EnsureIdenticalOccurrences>
          <MatchStrokeWidth target="All" />
        </Consistency>
      </Character>
      
      <Character id="R">
        <Components>
          <ComponentRef ref="verticalStem" />
          <Component id="bowl">
            <Description>Upper curved bowl</Description>
            <Width>600</Width>
            <Height>500</Height>
            <Path type="semicircular" />
          </Component>
          <Component id="leg">
            <Description>Diagonal leg</Description>
            <Width>500</Width>
            <Height>500</Height>
            <Angle>-15</Angle>
            <Path type="diagonal" />
          </Component>
        </Components>
        <SimplificationStrategy>
          <GeometricConstruction>true</GeometricConstruction>
          <PreciseConnections>true</PreciseConnections>
        </SimplificationStrategy>
        <Consistency>
          <MatchStrokeWidth target="All" />
          <MatchComponent target="P" component="bowl" />
          <MatchComponent target="F" component="verticalStem" />
        </Consistency>
      </Character>
      
      <Character id="I">
        <Components>
          <ComponentRef ref="verticalStem" />
        </Components>
        <SimplificationStrategy>
          <GeometricConstruction>true</GeometricConstruction>
          <PerfectVerticality>true</PerfectVerticality>
        </SimplificationStrategy>
        <Consistency>
          <MatchStrokeWidth target="All" />
          <MatchComponent target="F" component="verticalStem" />
        </Consistency>
      </Character>
      
      <Character id="T">
        <Components>
          <ComponentRef ref="verticalStem" position="center" />
          <ComponentRef ref="horizontalBar" position="top" width="800" />
        </Components>
        <SimplificationStrategy>
          <GeometricConstruction>true</GeometricConstruction>
          <PreciseRightAngles>true</PreciseRightAngles>
          <PerfectCentering>true</PerfectCentering>
        </SimplificationStrategy>
        <Consistency>
          <MatchStrokeWidth target="All" />
          <MatchComponent target="F" component="verticalStem" />
          <MatchComponent target="F" component="horizontalBar" attribute="height" />
        </Consistency>
      </Character>
      
      <Character id="Y">
        <Components>
          <ComponentRef ref="diagonalStroke" angle="-45" length="500" />
          <ComponentRef ref="diagonalStroke" angle="45" length="500" />
          <ComponentRef ref="verticalStem" position="center" y="500" />
        </Components>
        <SimplificationStrategy>
          <GeometricConstruction>true</GeometricConstruction>
          <PreciseAngles>true</PreciseAngles>
          <PreciseJunction>true</PreciseJunction>
        </SimplificationStrategy>
        <Consistency>
          <MatchStrokeWidth target="All" />
          <MatchComponent target="A" component="diagonalStroke" attribute="width" />
          <MatchComponent target="F" component="verticalStem" attribute="width" />
        </Consistency>
      </Character>
    </Characters>
  </SansSerifText>
  
  <AlignmentParameters>
    <!-- 
      Define the strategy to ensure new paths align perfectly with original paths
    -->
    <BoundingBoxPreservation>
      <MatchLeft>true</MatchLeft>
      <MatchRight>true</MatchRight>
      <MatchTop>true</MatchTop>
      <MatchBottom>true</MatchBottom>
    </BoundingBoxPreservation>
    
    <ControlPointStrategy>
      <PreserveOriginalExtremities>true</PreserveOriginalExtremities>
      <MaintainAnchorPointPositions>
        <AnchorsToPreserve>startPoint,endPoint,extremePoints</AnchorsToPreserve>
      </MaintainAnchorPointPositions>
    </ControlPointStrategy>
    
    <PathContainment>
      <EnsureNewPathsWithinOriginalBounds>true</EnsureNewPathsWithinOriginalBounds>
      <AllowControlPointExtension>false</AllowControlPointExtension>
    </PathContainment>
  </AlignmentParameters>
  
  <Implementation>
    <PathOverlayAttributes>
      <Fill>none</Fill>
      <Stroke>red</Stroke>
      <StrokeWidth>2</StrokeWidth>
      <Opacity>0.8</Opacity>
    </PathOverlayAttributes>
    
    <PriorityOrder>
      <!-- Define the order in which components should be processed -->
      <Component priority="1">SansSerifText</Component>
      <Component priority="2">ScriptText</Component>
    </PriorityOrder>
    
    <OptimizationStrategy>
      <MinimizeControlPoints>true</MinimizeControlPoints>
      <EliminateRedundantCommands>true</EliminateRedundantCommands>
      <UseRelativeCommandsWherePossible>true</UseRelativeCommandsWherePossible>
    </OptimizationStrategy>
  </Implementation>
</SVGEnhancementProject>`}
            </CodeBox>
            <Heading>Implementation Guidelines</Heading>
            <Paragraph>
                This XML specification establishes a comprehensive framework for enhancing the "Dalla Tor" logo. The
                specification addresses both the script portion "Dalla Tor" and the sans-serif text "FLAVOR OF ITALY" with
                distinct strategies appropriate to each style.
            </Paragraph>
            <Heading>Key Insights and Implementation Notes:</Heading>
            <Paragraph>
                <List ordered />
                <Line>
                    <Word>
                        <Bold />
                        Disconnected Components:
                    </Word> The specification correctly identifies that the "Dalla Tor" script consists of 6 disconnected
                    components, with the "D" specifically consisting of 2 separate parts (bowl and stem).
                </Line>
                <Line>
                    <Word>
                        <Bold />
                        Simplification Strategies:
                    </Word>
                </Line>
                <Paragraph>
                    <List />
                    <Line>
                        For script components: The VisvalingamWhyatt algorithm is specified for point reduction, preserving
                        the characteristic points while eliminating noise.
                    </Line>
                    <Line>
                        For sans-serif characters: Geometric construction is emphasized, with precise angles, right angles,
                        and consistent proportions.
                    </Line>
                </Paragraph>
                <Line>
                    <Word>
                        <Bold />
                        Smoothing:
                    </Word>
                </Line>
                <Paragraph>
                    <List />
                    <Line>
                        Catmull-Rom splines are applied to the script components with appropriate tension factors to
                        maintain the flowing, handwritten quality.
                    </Line>
                    <Line>Critical points are preserved to maintain the character of the original design.</Line>
                </Paragraph>
                <Line>
                    <Word>
                        <Bold />
                        Component Reuse:
                    </Word>
                </Line>
                <Paragraph>
                    <List />
                    <Line>
                        The sans-serif text leverages reusable components (vertical stems, horizontal bars, etc.) to ensure
                        consistency across characters.
                    </Line>
                    <Line>
                        Characters with multiple occurrences (F, L, A, O) are explicitly marked to ensure identical
                        rendering.
                    </Line>
                </Paragraph>
                <Line>
                    <Word>
                        <Bold />
                        Alignment Strategy:
                    </Word>
                </Line>
                <Paragraph>
                    <List />
                    <Line>Perfect overlap is ensured through:</Line>
                    <Paragraph>
                        <List />
                        <Line>Preserving bounding boxes of original paths</Line>
                        <Line>Maintaining start and end points</Line>
                        <Line>Preserving key anchor points like extremities</Line>
                        <Line>Ensuring new paths remain within original bounds</Line>
                    </Paragraph>
                </Paragraph>
            </Paragraph>
            <Heading>Path Creation Process:</Heading>
            <Paragraph>
                <List ordered />
                <Line>For each original path:</Line>
                <Paragraph>
                    <List />
                    <Line>Extract the path data and convert to a point sequence</Line>
                    <Line>Identify key points (start, end, extrema, corners)</Line>
                    <Line>Apply appropriate simplification algorithm</Line>
                    <Line>For script: Apply Catmull-Rom smoothing to reduced point set</Line>
                    <Line>For sans-serif: Apply geometric construction rules</Line>
                    <Line>Create new path with identical bounding box parameters</Line>
                    <Line>Set styling attributes (red stroke, no fill, etc.)</Line>
                    <Line>Position above original path in SVG structure</Line>
                </Paragraph>
                <Line>For reusable components:</Line>
                <Paragraph>
                    <List />
                    <Line>Create once, reference multiple times</Line>
                    <Line>Apply transformations (translation, rotation) as needed</Line>
                    <Line>Maintain consistent attributes across instances</Line>
                </Paragraph>
            </Paragraph>
            <Paragraph>
                This specification provides a detailed roadmap for the enhancement process, ensuring consistent results
                across all logo components while preserving the distinctive character of the original design.
            </Paragraph>
        </Section>
    </Chapter>
);
