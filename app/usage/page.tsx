"use client";
import { useState } from "react";
import { Check, Copy, Download } from "lucide-react";
import { useToast } from "@/hooks/use-toast";
import { Label } from "@/components/ui/label";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import CodeDisplay from "@/components/code-display";
import { UsageTimeline } from "@/components/usage-timeline";
import { GithubActionMarkdownCode } from "@/lib/github-action-markdown-code";

export default function UsagePage() {
  const [copied, setCopied] = useState(false);
  const [download, setDownload] = useState(false);
  const [copied1, setCopied1] = useState(false);
  const [copied2, setCopied2] = useState(false);
  const { toast } = useToast();

  const dynamicStatsLink = `![Dynamic Stats](https://github.com/githubusername/githubusername/blob/dsaStats/dsa-stats.svg)`;
  const onCopyDynamicStatsLink = () => {
    navigator.clipboard.writeText(dynamicStatsLink);
    setCopied1(true);
    toast({
      title: "Link Copied to Clipboard",
      duration: 1000,
    });
    setTimeout(() => {
      setCopied1(false);
    }, 1000);
  };

  const variableStatsLink = `<img align="center" alt="DSA Stats" width="22px" src="https://github.com/githubusername/githubusername/blob/dsaStats/dsa-stats.svg" />[<img src="https://github.com/githubusername/githubusername/blob/dsaStats/dsa-stats.svg" width="47%">](https://www.dsastats.vercel.app)`;
  const onCopyStaticStatsLink = () => {
    navigator.clipboard.writeText(variableStatsLink);
    setCopied2(true);
    toast({
      title: "Link Copied to Clipboard",
      duration: 1000,
    });
    setTimeout(() => {
      setCopied2(false);
    }, 1000);
  };

  const handleDownload = async () => {
    const blob = new Blob([GithubActionMarkdownCode], { type: "text/plain" });
    const url = URL.createObjectURL(blob);
    const a = document.createElement("a");
    a.href = url;
    a.download = `dsaStats.yml`;
    document.body.appendChild(a);
    a.click();
    document.body.removeChild(a);
    URL.revokeObjectURL(url);
    setDownload(true);
    toast({
      title: "Added to Download",
      duration: 1000,
    });
    setTimeout(() => {
      setDownload(false);
    }, 1500);
  };
  const handleCopy = async () => {
    navigator.clipboard.writeText(GithubActionMarkdownCode);
    setCopied(true);
    toast({
      title: "Code Copied to Clipboard",
      duration: 1000,
    });
    setTimeout(() => {
      setCopied(false);
    }, 1000);
  };

  const Steps = [
    {
      title: "Step 1",
      content: (
        <div>
          <p className="text-neutral-800 dark:text-neutral-200 text-xs md:text-sm font-normal mb-8">
            <span className="font-bold text-xl">Type Your Username</span>
            <br />
            Enter your Codolio username in the input area to generate an SVG
            file that can be embedded in your GitHub README profile. You can
            customize your svg according to your taste and share it with other
            with your own link.
          </p>
        </div>
      ),
    },
    {
      title: "Step 2",
      content: (
        <div>
          <p className="text-neutral-800 dark:text-neutral-200 text-xs md:text-sm font-normal mb-8">
            <span className="font-bold text-xl">Set Up GitHub Actions</span>
            <br />
            Follow these steps to set up GitHub Actions to automate the update
            of your SVG file:
          </p>
          <ol className="list-decimal ml-4 mb-4">
            <li className="mb-2">
              <strong>Create or Open Your GitHub Repository:</strong>
              <p className="text-base font-normal ml-0">
                Navigate to your GitHub account and either create a new
                repository or open an existing one where you want to set up the
                workflow.
              </p>
            </li>
            <li className="mb-2">
              <strong>Access the Actions Tab:</strong>
              <p className="text-base font-normal ml-0">
                Go to the repository&apos;s main page. Click on the
                &quot;Actions&quot; tab located near the top of the page to
                access the workflows section.
              </p>
            </li>
            <li className="mb-2">
              <strong>Set Up a New Workflow:</strong>
              <p className="text-base font-normal ml-0">
                Click the &quot;New workflow&quot; button or &quot;Set up a
                workflow yourself&quot; if you&apos;re setting it up manually.
              </p>
            </li>
            <li className="mb-2">
              <strong>Configure the Workflow File:</strong>
              <p className="text-base font-normal ml-0">
                Copy the YAML code provided below and paste it into the editor:
              </p>
              {/* <CodeDisplay
                  fileName="GitHub Actions Workflow Markdown"
                  language="markdown"
                  code={GithubActionMarkdownCode}
                  name="dsaStats"
                  extension="yml"
                /> */}
              <div className="flex justify-between items-center px-4 py-2 bg-gray-100 dark:bg-gray-800 rounded-2xl">
                <span className="text-xl font-medium text-gray-600 dark:text-gray-300">
                  GitHub Action YAML File
                </span>
                <div className="flex space-x-2">
                  <Button
                    onClick={handleCopy}
                    className="p-2 rounded-md transition-colors"
                    aria-label="Copy code to clipboard"
                  >
                    {copied ? (
                      <Check className="w-5 h-5" />
                    ) : (
                      <Copy className="w-5 h-5" />
                    )}
                  </Button>
                  <Button
                    onClick={handleDownload}
                    className="p-2 rounded-md transition-colors"
                    aria-label="Download code as file"
                  >
                    {download ? (
                      <Check className="w-5 h-5" />
                    ) : (
                      <Download className="w-5 h-5" />
                    )}
                  </Button>
                </div>
              </div>
              <p className="text-base font-normal ml-0">
                Replace &apos;your codolio username&apos; with your actual
                Codolio username in the &apos;curl&apos; command or you can
                change the entire URL to customize your card.
              </p>
            </li>
            <li className="mb-2">
              <strong>Save and Commit the Workflow File:</strong>
              <p className="text-base font-normal ml-0">
                Save the file by naming it &apos;dsaStats.yml&apos; or any other
                descriptive name. Click &quot;Start commit&quot; to commit the
                new workflow file to your repository.
              </p>
            </li>
            <li className="mb-2">
              <strong>Verify the Workflow:</strong>
              <p className="text-base font-normal ml-0">
                Once committed, the workflow should be visible under the
                &quot;Actions&quot; tab. You can manually trigger the workflow
                to test it by clicking the &quot;Run workflow&quot; button on
                the workflow page.
              </p>
            </li>
            <li className="mb-2">
              <strong>Check for Updates:</strong>
              <p className="text-base font-normal ml-0">
                The workflow will now run daily based on the schedule specified
                in the &apos;cron&apos; expression (`0 0 * * *` for daily at
                midnight UTC). You can check the status and logs of each
                workflow run in the &quot;Actions&quot; tab to ensure everything
                is working correctly.
              </p>
            </li>
          </ol>
        </div>
      ),
    },
    {
      title: "Step 3",
      content: (
        <div>
          <p className="text-neutral-800 dark:text-neutral-200 text-xs md:text-sm font-normal mb-8">
            <span className="font-bold text-xl">Choose Your Version</span>
            <br />
            You can choose between two versions of the DSA Stats card: a fixed
            size version and a variable width version. Here&apos;s the code for
            each:
          </p>
          <div className="flex flex-col p-0 w-full">
            <div className="p-0 overflow-hidden">
              <div className="p-0">
                <Label className="uppercase text-xs font-bold text-brand">
                  Fixed Size Version
                </Label>
                <div className="flex items-center mt-2 gap-x-2">
                  <Input
                    className="bg-zinc-300/50 border-0 focus-visible:ring-0 text-black focus-visible:ring-offset-0"
                    value={dynamicStatsLink}
                    readOnly
                  />
                  <Button
                    onClick={onCopyDynamicStatsLink}
                    size="icon"
                    aria-label="Copy fixed size link to clipboard"
                  >
                    {copied1 ? (
                      <Check className="w-4 h-4" />
                    ) : (
                      <Copy className="w-4 h-4" />
                    )}
                  </Button>
                </div>
              </div>
              <div className="px-0">
                <Label className="uppercase text-xs font-bold text-brand">
                  Variable Width Version
                </Label>
                <div className="flex items-center mt-2 gap-x-2">
                  <Input
                    className="bg-zinc-300/50 border-0 focus-visible:ring-0 text-black focus-visible:ring-offset-0"
                    value={variableStatsLink}
                    readOnly
                  />
                  <Button
                    onClick={onCopyStaticStatsLink}
                    size="icon"
                    aria-label="Copy cariable size link to clipboard"
                  >
                    {copied2 ? (
                      <Check className="w-4 h-4" />
                    ) : (
                      <Copy className="w-4 h-4" />
                    )}
                  </Button>
                </div>
              </div>
            </div>
          </div>
        </div>
      ),
    },
  ];
  return (
    <main className="container items-center justify-center mx-auto mt-4 shadow rounded-2xl mb-4 pb-4">
      <UsageTimeline data={Steps} />
    </main>
  );
}
