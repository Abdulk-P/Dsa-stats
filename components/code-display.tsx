"use client";
import React, { useState } from "react";
import { Check, Copy, Download } from "lucide-react";
import { useToast } from "@/hooks/use-toast";
import { Button } from "@/components/ui/button";

interface CodeDisplayProps {
  code: string;
  language: string;
  fileName: string;
  extension: string;
  name: string;
}

export default function CodeDisplay({
  code,
  language,
  fileName,
  extension,
  name,
}: CodeDisplayProps) {
  const [copied, setCopied] = useState(false);
  const [download, setDownload] = useState(false);
  const { toast } = useToast();

  const handleCopy = async () => {
    navigator.clipboard.writeText(code);
    setCopied(true);
    toast({
      title: "Code Copied to Clipboard",
      duration: 1000,
    });
    setTimeout(() => {
      setCopied(false);
    }, 1000);
  };

  const handleDownload = async () => {
    const blob = new Blob([code], { type: "text/plain" });
    const url = URL.createObjectURL(blob);
    const a = document.createElement("a");
    a.href = url;
    a.download = `${name}.${extension}`;
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

  return (
    <div className="relative rounded-lg overflow-hidden border border-gray-200 dark:border-gray-700">
      <div className="flex justify-between items-center px-4 py-2 bg-gray-100 dark:bg-gray-800">
        <span className="text-xl font-medium text-gray-600 dark:text-gray-300">
          {fileName}
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
      <pre className="p-4 m-0 overflow-auto bg-gray-100/50 dark:bg-gray-800/50">
        <code className={`language-${language}`}>{code}</code>
      </pre>
    </div>
  );
}
