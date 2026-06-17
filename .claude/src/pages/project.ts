///: Project — a single project's detail page.
///: Files, instructions, and scoped conversations.
///:
///: [Project Operations](../../library/reference-desk/03-03-operations--projects.md) — project workflows.

// Project — a project's scoped home. Shows files, instructions, and conversations.
// See: library/..team/claude/.perspective/05-current-state.png

import type { ProjectController } from '../controllers/project-controller.ts';
import type { FilesPane } from '../components/files-pane.ts';
import type { ProjectFile } from '../components/project-file.ts';
import type { Fallible } from '../errors.ts';
import { tracked } from '../errors.ts';
import { Lazy } from '../lazy.ts';

export type { ProjectFile };

export interface ProjectConversation {
  title: string;
  lastMessage: string;
}

export class Project implements Fallible {
  id = '';
  url = '';
  name = '';
  description = '';
  instructions = '';
  isLoading = false;
  hasError = false;
  lastError: Error | null = null;

  filesPane: FilesPane | null = null;

  readonly conversations: Lazy<ProjectConversation[]>;
  readonly files: Lazy<ProjectFile[]>;

  constructor(
    private readonly controller: ProjectController,
    private readonly _filesPane: FilesPane,
  ) {
    this.conversations = new Lazy<ProjectConversation[]>(
      [],
      () => this.controller.loadAllConversations(),
    );
    this.files = new Lazy<ProjectFile[]>(
      [],
      () => this.controller.listFiles(),
    );
  }

  async refresh(): Promise<void> {
    this.isLoading = true;
    try {
      await tracked(this, async () => {
        this.url = await this.controller.readUrl();
        this.id = this.url.match(/\/project\/([a-f0-9-]+)/)?.[1] ?? '';
        this.name = await this.controller.readName();
        this.description = await this.controller.readDescription();
        this.instructions = await this.controller.readInstructions();
        // Quick initial read — preview only, not fully loaded
        this.conversations.preview(await this.controller.readConversations());
        this.files.preview(await this.controller.listFiles());
        // Detect if files pane is showing
        await this._filesPane.detect();
        this.filesPane = this._filesPane.showing ? this._filesPane : null;
      });
    } finally {
      this.isLoading = false;
    }
  }

  resetData(): void {
    this.conversations.reset();
    this.files.reset();
  }

  // --- Reading ---

  async readName(): Promise<string> {
    return tracked(this, async () => {
      this.name = await this.controller.readName();
      return this.name;
    });
  }

  async readDescription(): Promise<string> {
    return tracked(this, async () => {
      this.description = await this.controller.readDescription();
      return this.description;
    });
  }

  async readInstructions(): Promise<string> {
    return tracked(this, async () => {
      this.instructions = await this.controller.readInstructions();
      return this.instructions;
    });
  }

  // --- Writing ---

  async rename(newName: string): Promise<void> {
    await tracked(this, async () => {
      await this.controller.rename(newName);
      this.name = newName;
    });
  }

  async editDescription(text: string): Promise<void> {
    await tracked(this, async () => {
      await this.controller.editDescription(text);
      this.description = text;
    });
  }

  async writeInstructions(text: string): Promise<void> {
    await tracked(this, async () => {
      await this.controller.writeInstructions(text);
      this.instructions = text;
    });
  }

  // --- Files ---

  async uploadFile(localPath: string): Promise<void> {
    if (!this.filesPane) throw new Error('Files pane is not showing');
    this.isLoading = true;
    try {
      await tracked(this, async () => {
        await this.filesPane!.uploadFromDevice(localPath);
        this.files.reset();
      });
    } finally {
      this.isLoading = false;
    }
  }

  async addTextContent(title: string, content: string): Promise<void> {
    if (!this.filesPane) throw new Error('Files pane is not showing');
    this.isLoading = true;
    try {
      await tracked(this, async () => {
        await this.filesPane!.addTextContent(title, content);
        this.files.reset();
      });
    } finally {
      this.isLoading = false;
    }
  }

  async downloadFile(name: string, outputPath: string): Promise<void> {
    await this.controller.downloadFile(name, outputPath);
  }

  async removeFile(name: string): Promise<void> {
    await tracked(this, async () => {
      await this.controller.removeFile(name);
      this.files.reset();
    });
  }

  async readFileContent(name: string): Promise<string> {
    return this.controller.readFileContent(name);
  }

  // --- Conversations ---

  async newConversation(): Promise<void> {
    await tracked(this, () => this.controller.newConversation());
    this.conversations.reset();
  }
}
