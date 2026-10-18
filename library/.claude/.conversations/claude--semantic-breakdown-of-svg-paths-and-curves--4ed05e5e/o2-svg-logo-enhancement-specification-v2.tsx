import { Chapter, Heading, Section, Title } from '@dna-platform/public';
import { CodeBox, Opaque } from '../../../.manual/.book';
import { Version } from '../../.manual/.book';

export default () => (
    <Chapter>
        <Version />
        <Title>[[ SVG Logo Enhancement Specification v2 ]]</Title>
        <Section>
            <Opaque />
            <Heading>SVG Logo Enhancement Specification at version 2</Heading>
            <Heading>SVG Logo Enhancement Specification</Heading>
            <CodeBox
                language="xml"
            >
                {`${''}<?xml version="1.0" encoding="UTF-8"?>
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
    <ImplementationStrategy>
      <!-- 
        Strategy for implementing the overlay paths in the SVG document
      -->
      <PreserveOriginalSVG>true</PreserveOriginalSVG>
      <AddPathsAfterOriginals>true</AddPathsAfterOriginals>
      <CommentOriginalPaths>false</CommentOriginalPaths>
      <PathInsertionMethod>
        <!-- 
          Specifies the exact method for inserting paths into the SVG document
        -->
        <Method>AppendToSameGroup</Method>
        <GroupSelector>g[fill="#000000"]</GroupSelector>
        <PathIdPrefix>enhanced-</PathIdPrefix>
        <PositioningStrategy>
          <UseOriginalCoordinates>true</UseOriginalCoordinates>
          <PreserveBoundingBox>true</PreserveBoundingBox>
          <ZIndex>above</ZIndex>
        </PositioningStrategy>
      </PathInsertionMethod>
    </ImplementationStrategy>
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
          <OriginalPathData>
            <ExistingPathSelector>g[fill="#000000"] path:nth-child(5)</ExistingPathSelector>
            <StartingPoint>M13730 9775</StartingPoint>
            <BoundingBox>
              <MinX>13730</MinX>
              <MinY>9775</MinY>
              <MaxX>14845</MaxX>
              <MaxY>11596</MaxY>
            </BoundingBox>
          </OriginalPathData>
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
          <EnhancedPathAttributes>
            <Fill>none</Fill>
            <Stroke>red</Stroke>
            <StrokeWidth>40</StrokeWidth>
            <StrokeLinejoin>round</StrokeLinejoin>
          </EnhancedPathAttributes>
        </Path>
        
        <Path id="D-stem">
          <OriginalPathDescription>Vertical stem of the D character</OriginalPathDescription>
          <OriginalPathData>
            <ExistingPathSelector>g[fill="#000000"] path:nth-child(15)</ExistingPathSelector>
            <StartingPoint>M19244 11562</StartingPoint>
            <BoundingBox>
              <MinX>19210</MinX>
              <MinY>10325</MinY>
              <MaxX>19344</MaxX>
              <MaxY>11584</MaxY>
            </BoundingBox>
          </OriginalPathData>
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
          <EnhancedPathAttributes>
            <Fill>none</Fill>
            <Stroke>red</Stroke>
            <StrokeWidth>40</StrokeWidth>
            <StrokeLinejoin>round</StrokeLinejoin>
          </EnhancedPathAttributes>
        </Path>
      </Component>
      
      <Component id="alla">
        <!-- The 'alla' portion is a single connected script element -->
        <Path id="alla-connected">
          <OriginalPathDescription>Connected script forming the 'alla' portion</OriginalPathDescription>
          <OriginalPathData>
            <ExistingPathSelector>g[fill="#000000"] path:nth-child(7)</ExistingPathSelector>
            <StartingPoint>M22017 11583</StartingPoint>
            <BoundingBox>
              <MinX>21900</MinX>
              <MinY>10900</MinY>
              <MaxX>22500</MaxX>
              <MaxY>11600</MaxY>
            </BoundingBox>
          </OriginalPathData>
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
          <EnhancedPathAttributes>
            <Fill>none</Fill>
            <Stroke>red</Stroke>
            <StrokeWidth>40</StrokeWidth>
            <StrokeLinejoin>round</StrokeLinejoin>
          </EnhancedPathAttributes>
        </Path>
      </Component>
      
      <Component id="T">
        <!-- The 'T' consists of a horizontal bar and vertical stem -->
        <Path id="T-horizontal">
          <OriginalPathDescription>Horizontal crossbar of the T character</OriginalPathDescription>
          <OriginalPathData>
            <ExistingPathSelector>g[fill="#000000"] path:nth-child(6)</ExistingPathSelector>
            <StartingPoint>M25454 11595</StartingPoint>
            <BoundingBox>
              <MinX>25350</MinX>
              <MinY>11300</MinY>
              <MaxX>26000</MaxX>
              <MaxY>11600</MaxY>
            </BoundingBox>
          </OriginalPathData>
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
          <EnhancedPathAttributes>
            <Fill>none</Fill>
            <Stroke>red</Stroke>
            <StrokeWidth>40</StrokeWidth>
            <StrokeLinejoin>round</StrokeLinejoin>
          </EnhancedPathAttributes>
        </Path>
        
        <Path id="T-stem">
          <OriginalPathDescription>Vertical stem of the T character</OriginalPathDescription>
          <OriginalPathData>
            <ExistingPathSelector>g[fill="#000000"] path:nth-child(8)</ExistingPathSelector>
            <StartingPoint>M23771 11596</StartingPoint>
            <BoundingBox>
              <MinX>23700</MinX>
              <MinY>11000</MinY>
              <MaxX>23900</MaxX>
              <MaxY>11596</MaxY>
            </BoundingBox>
          </OriginalPathData>
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
          <EnhancedPathAttributes>
            <Fill>none</Fill>
            <Stroke>red</Stroke>
            <StrokeWidth>40</StrokeWidth>
            <StrokeLinejoin>round</StrokeLinejoin>
          </EnhancedPathAttributes>
        </Path>
      </Component>
      
      <Component id="o">
        <!-- The 'o' is a single oval shape -->
        <Path id="o-oval">
          <OriginalPathDescription>Oval shape forming the 'o' character</OriginalPathDescription>
          <OriginalPathData>
            <ExistingPathSelector>g[fill="#000000"] path:nth-child(12)</ExistingPathSelector>
            <StartingPoint>M27420 9535</StartingPoint>
            <BoundingBox>
              <MinX>27250</MinX>
              <MinY>9300</MinY>
              <MaxX>27550</MaxX>
              <MaxY>9600</MaxY>
            </BoundingBox>
          </OriginalPathData>
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
          <EnhancedPathAttributes>
            <Fill>none</Fill>
            <Stroke>red</Stroke>
            <StrokeWidth>40</StrokeWidth>
            <StrokeLinejoin>round</StrokeLinejoin>
          </EnhancedPathAttributes>
        </Path>
      </Component>
      
      <Component id="r">
        <!-- The 'r' consists of a stem and flourish -->
        <Path id="r-combined">
          <OriginalPathDescription>Stem and flourish of the 'r' character</OriginalPathDescription>
          <OriginalPathData>
            <ExistingPathSelector>g[fill="#000000"] path:nth-child(9)</ExistingPathSelector>
            <StartingPoint>M25160 9145</StartingPoint>
            <BoundingBox>
              <MinX>25000</MinX>
              <MinY>9000</MinY>
              <MaxX>25500</MaxX>
              <MaxY>9500</MaxY>
            </BoundingBox>
          </OriginalPathData>
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
          <EnhancedPathAttributes>
            <Fill>none</Fill>
            <Stroke>red</Stroke>
            <StrokeWidth>40</StrokeWidth>
            <StrokeLinejoin>round</StrokeLinejoin>
          </EnhancedPathAttributes>
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
        <EnhancedPathAttributes>
          <Fill>none</Fill>
          <Stroke>red</Stroke>
          <StrokeWidth>20</StrokeWidth>
          <StrokeLinejoin>miter</StrokeLinejoin>
        </EnhancedPathAttributes>
      </Component>
      
      <Component id="horizontalBar">
        <Description>Standard horizontal bar for letters F, L, E, T</Description>
        <Width variable="true" />
        <Height>120</Height>
        <Path>M0,0 H{width} V120 H0 Z</Path>
        <EnhancedPathAttributes>
          <Fill>none</Fill>
          <Stroke>red</Stroke>
          <StrokeWidth>20</StrokeWidth>
          <StrokeLinejoin>miter</StrokeLinejoin>
        </EnhancedPathAttributes>
      </Component>
      
      <Component id="diagonalStroke">
        <Description>Standard diagonal stroke for letters A, V, Y</Description>
        <Width>120</Width>
        <Angle variable="true" />
        <Path parametric="true" />
        <EnhancedPathAttributes>
          <Fill>none</Fill>
          <Stroke>red</Stroke>
          <StrokeWidth>20</StrokeWidth>
          <StrokeLinejoin>miter</StrokeLinejoin>
        </EnhancedPathAttributes>
      </Component>
      
      <Component id="ovalForm">
        <Description>Standard oval form for letter O</Description>
        <Width>800</Width>
        <Height>1000</Height>
        <StrokeWidth>120</StrokeWidth>
        <Path type="elliptical" />
        <EnhancedPathAttributes>
          <Fill>none</Fill>
          <Stroke>red</Stroke>
          <StrokeWidth>20</StrokeWidth>
          <StrokeLinejoin>round</StrokeLinejoin>
        </EnhancedPathAttributes>
      </Component>
    </ReusableComponents>
    
    <Characters>
      <Character id="F" occurrences="2">
        <OriginalPathData>
          <ExistingPathSelector>g[fill="#000000"] path:nth-child(1)</ExistingPathSelector>
          <StartingPoint>M5113 11478</StartingPoint>
          <BoundingBox>
            <MinX>5113</MinX>
            <MinY>11000</MinY>
            <MaxX>5400</MaxX>
            <MaxY>11478</MaxY>
          </BoundingBox>
        </OriginalPathData>
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
        <EnhancedPathAttributes>
          <Fill>none</Fill>
          <Stroke>red</Stroke>
          <StrokeWidth>20</StrokeWidth>
          <StrokeLinejoin>miter</StrokeLinejoin>
        </EnhancedPathAttributes>
      </Character>
      
      <Character id="L" occurrences="2">
        <OriginalPathData>
          <ExistingPathSelector>g[fill="#000000"] path:nth-child(2)</ExistingPathSelector>
          <StartingPoint>M6567 11493</StartingPoint>
          <BoundingBox>
            <MinX>6567</MinX>
            <MinY>11000</MinY>
            <MaxX>6900</MaxX>
            <MaxY>11493</MaxY>
          </BoundingBox>
        </OriginalPathData>
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
        <EnhancedPathAttributes>
          <Fill>none</Fill>
          <Stroke>red</Stroke>
          <StrokeWidth>20</StrokeWidth>
          <StrokeLinejoin>miter</StrokeLinejoin>
        </EnhancedPathAttributes>
      </Character>
      
      <Character id="A" occurrences="2">
        <OriginalPathData>
          <ExistingPathSelector>g[fill="#000000"] path:nth-child(3)</ExistingPathSelector>
          <StartingPoint>M8457 11493</StartingPoint>
          <BoundingBox>
            <MinX>8400</MinX>
            <MinY>11000</MinY>
            <MaxX>8900</MaxX>
            <MaxY>11493</MaxY>
          </BoundingBox>
        </OriginalPathData>
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
        <EnhancedPathAttributes>
          <Fill>none</Fill>
          <Stroke>red</Stroke>
          <StrokeWidth>20</StrokeWidth>
          <StrokeLinejoin>miter</StrokeLinejoin>
        </EnhancedPathAttributes>
      </Character>
      
      <Character id="V">
        <OriginalPathData>
          <ExistingPathSelector>g[fill="#000000"] path:nth-child(4)</ExistingPathSelector>
          <StartingPoint>M10064 11485</StartingPoint>
          <BoundingBox>
            <MinX>10000</MinX>
            <MinY>11000</MinY>
            <MaxX>10500</MaxX>
            <MaxY>11485</MaxY>
          </BoundingBox>
        </OriginalPathData>
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
        <EnhancedPathAttributes>
          <Fill>none</Fill>
          <Stroke>red</Stroke>
          <StrokeWidth>20</StrokeWidth>
          <StrokeLinejoin>miter</StrokeLinejoin>
        </EnhancedPathAttributes>
      </Character>
      
      <Character id="O" occurrences="2">
        <OriginalPathData>
          <ExistingPathSelector>g[fill="#000000"] path:nth-child(10)</ExistingPathSelector>
          <StartingPoint>M11634 11519</StartingPoint>
          <BoundingBox>
            <MinX>11600</MinX>
            <MinY>11000</MinY>
            <MaxX>12100</MaxX>
            <MaxY>11519</MaxY>
          </BoundingBox>
        </OriginalPathData>
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
        <EnhancedPathAttributes>
          <Fill>none</Fill>
          <Stroke>red</Stroke>
          <StrokeWidth>20</StrokeWidth>
          <StrokeLinejoin>round</StrokeLinejoin>
        </EnhancedPathAttributes>
      </Character>
      
      <Character id="R">
        <OriginalPathData>
          <ExistingPathSelector>g[fill="#000000"] path:nth-child(11)</ExistingPathSelector>
          <StartingPoint>M14845 11540</StartingPoint>
          <BoundingBox>
            <MinX>14800</MinX>
            <MinY>11000</MinY>
            <MaxX>15300</MaxX>
            <MaxY>11540</MaxY>
          </BoundingBox>
        </OriginalPathData>
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
          <MatchComponent target="F" component="verticalStem" />
        </Consistency>
        <EnhancedPathAttributes>
          <Fill>none</Fill>
          <Stroke>red</Stroke>
          <StrokeWidth>20</StrokeWidth>
          <StrokeLinejoin>miter</StrokeLinejoin>
        </EnhancedPathAttributes>
      </Character>
      
      <Character id="I">
        <OriginalPathData>
          <ExistingPathSelector>g[fill="#000000"] path:nth-child(13)</ExistingPathSelector>
          <StartingPoint>M16315 11543</StartingPoint>
          <BoundingBox>
            <MinX>16300</MinX>
            <MinY>11000</MinY>
            <MaxX>16450</MaxX>
            <MaxY>11543</MaxY>
          </BoundingBox>
        </OriginalPathData>
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
        <EnhancedPathAttributes>
          <Fill>none</Fill>
          <Stroke>red</Stroke>
          <StrokeWidth>20</StrokeWidth>
          <StrokeLinejoin>miter</StrokeLinejoin>
        </EnhancedPathAttributes>
      </Character>
      
      <Character id="T">
        <OriginalPathData>
          <ExistingPathSelector>g[fill="#000000"] path:nth-child(14)</ExistingPathSelector>
          <StartingPoint>M20652 11567</StartingPoint>
          <BoundingBox>
            <MinX>20500</MinX>
            <MinY>11000</MinY>
            <MaxX>21000</MaxX>
            <MaxY>11567</MaxY>
          </BoundingBox>
        </OriginalPathData>
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
          <MatchComponent target="F" component="verticalStem`}
            </CodeBox>
        </Section>
    </Chapter>
);
