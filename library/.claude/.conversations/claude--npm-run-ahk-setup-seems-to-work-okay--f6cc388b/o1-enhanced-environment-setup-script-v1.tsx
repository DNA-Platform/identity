import { Chapter, Title } from '@dna-platform/public';
import { CodeBox } from '../../../.manual/.book';
import { Version } from '../../.manual/.book';

export default () => (
    <Chapter>
        <Version />
        <Title>[[ Enhanced Environment Setup Script v1 ]]</Title>
        <CodeBox
            language="autohotkey"
        >
            {`${''}; SetupEnv.ahk - Sets up environment variables for the project

; Get the script's directory as project root
ProjectRoot := A_ScriptDir
EnvSet, AHK_PROJECT_ROOT, %ProjectRoot%

; Add additional project-specific paths
ScriptsPath := ProjectRoot . "\\scripts"
DataPath := ProjectRoot . "\\data"
LogsPath := ProjectRoot . "\\logs"

; Set environment variables
EnvSet, AHK_SCRIPTS_PATH, %ScriptsPath%
EnvSet, AHK_DATA_PATH, %DataPath%
EnvSet, AHK_LOGS_PATH, %LogsPath%

; Verify paths exist and create if needed
for _, path in [ScriptsPath, DataPath, LogsPath] {
    if !FileExist(path) {
        FileCreateDir, %path%
        if ErrorLevel {
            OutputDebug, % "Error creating directory: " . path
            continue
        }
    }
}

; Output debug information
OutputDebug, % "Environment Setup Complete:"
OutputDebug, % "AHK_PROJECT_ROOT: " . ProjectRoot
OutputDebug, % "AHK_SCRIPTS_PATH: " . ScriptsPath
OutputDebug, % "AHK_DATA_PATH: " . DataPath
OutputDebug, % "AHK_LOGS_PATH: " . LogsPath

return
`}
        </CodeBox>
    </Chapter>
);
