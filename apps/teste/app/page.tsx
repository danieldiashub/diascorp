"use client";

import { useEditor, EditorContent } from "@tiptap/react";
import StarterKit from "@tiptap/starter-kit";
import {
  ResizableHandle,
  ResizablePanel,
  ResizablePanelGroup,
} from "@/components/ui/resizable";

export default function Home() {
  const editor = useEditor({
    extensions: [StarterKit],
    content: "<p>Escreva aqui...</p>",
    immediatelyRender: false,
    editorProps: {
      attributes: {
        class: "prose max-w-none",
      },
    },
  });

  return (
    <ResizablePanelGroup direction="horizontal">
      <ResizablePanel>
        <div className="p-4">Painel 1</div>
      </ResizablePanel>
      <ResizableHandle withHandle />
      <ResizablePanel>
        <div className="p-4">
          {editor && <EditorContent editor={editor} />}
        </div>
      </ResizablePanel>
      <ResizableHandle withHandle />
      <ResizablePanel>
        <div className="p-4">Painel 3</div>
      </ResizablePanel>
    </ResizablePanelGroup>
  );
}
