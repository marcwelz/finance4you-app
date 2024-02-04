import { DocumentHeadTags } from "@mui/material-nextjs/v13-pagesRouter";
import type { DocumentHeadTagsProps } from "@mui/material-nextjs/v13-pagesRouter";
import { Html, Main, NextScript, Head } from "next/document";
import { DocumentProps } from "postcss";

export default function Document(props: DocumentProps & DocumentHeadTagsProps) {
  return (
    <Html lang="en">
      <Head>
        <DocumentHeadTags {...props} />
      </Head>
      <body>
        <Main />
        <NextScript />
      </body>
    </Html>
  );
}
