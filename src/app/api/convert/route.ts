// app/api/convert/route.ts
import { NextResponse } from "next/server";
import { marked } from "marked";

// Cette interface définit la structure attendue du corps de la requête.
interface RequestBody {
  markdown: string;
}

export async function POST(request: Request) {
  try {
    // 1. On parse le corps de la requête JSON
    const body: RequestBody = await request.json();
    const { markdown } = body;

    // 2. On vérifie si la propriété 'markdown' existe
    if (!markdown) {
      return NextResponse.json(
        { error: "Markdown content is missing in the request body." },
        { status: 400 },
      );
    }

    // 3. On convertit le markdown en HTML
    const html = marked.parse(markdown);

    // 4. On retourne le résultat en JSON
    return NextResponse.json({ html });
  } catch (error) {
    // 5. On gère les erreurs, par exemple si le JSON est mal formaté
    console.error("Error processing request:", error);
    return NextResponse.json(
      { error: "Internal server error." },
      { status: 500 },
    );
  }
}
