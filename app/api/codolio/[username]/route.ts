import { themes } from "@/lib/themes";
import { scrapeCodolio } from "@/app/actions";
import { codolioSVGTemplate } from "@/components/codolio-svg-template";

type Params = {
  username: string;
};

type CodolioStats = {
  totalQuestions: number;
  totalContests: number;
  awards: number;
};

type ThemeName = keyof typeof themes;

export const maxDuration = 60;

export async function GET(request: Request, context: { params: Params }) {
  const url = new URL(request.url);
  const themeName = (url.searchParams.get("theme") || "default") as ThemeName;
  const predefinedTheme = themes[themeName];

  const customTheme = {
    primary: url.searchParams.get("primary") || predefinedTheme.primary,
    secondary: url.searchParams.get("secondary") || predefinedTheme.secondary,
    tertiary: url.searchParams.get("tertiary") || predefinedTheme.tertiary,
    quaternary:
      url.searchParams.get("quaternary") || predefinedTheme.quaternary,
    quinary: url.searchParams.get("quinary") || predefinedTheme.quinary,
    text: url.searchParams.get("text") || predefinedTheme.text,
  };

  const username = context.params.username;

  try {
    const codolioStats = await scrapeCodolio({ username });
    const { totalQuestions, totalContests, awards } =
      codolioStats as CodolioStats;
    const svg = codolioSVGTemplate(
      username,
      totalQuestions,
      totalContests,
      awards,
      customTheme
    );

    return new Response(svg, {
      headers: {
        "Content-Type": "image/svg+xml",
      },
    });
  } catch (error: any) {
    console.error(`Unexpected error: ${error.message}`);
    return new Response("Internal Server Error", { status: 500 });
  }
}
