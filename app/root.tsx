import "@mantine/core/styles.css";
import { QueryClient, QueryClientProvider } from "react-query";

import { cssBundleHref } from "@remix-run/css-bundle";
import type { LinksFunction } from "@remix-run/node";
import {
  Links,
  LiveReload,
  Meta,
  Outlet,
  Scripts,
  ScrollRestoration,
} from "@remix-run/react";

import { ColorSchemeScript, MantineProvider } from "@mantine/core";

// import stylesUrl from "~/styles/styles.css";

// export const links: LinksFunction = () => [
//   { rel: "stylesheet", href: stylesUrl },
// ];

export const links: LinksFunction = () => [
  ...(cssBundleHref ? [{ rel: "stylesheet", href: cssBundleHref }] : []),
];

export default function App() {
  const queryClient = new QueryClient();

  return (
    <html lang="en">
      <head>
        <meta charSet="utf-8" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <Meta />
        <Links />
        <ColorSchemeScript />
      </head>
      <body>
        <QueryClientProvider client={queryClient}>
          <MantineProvider>
            <Outlet />
            <ScrollRestoration />
            <Scripts />
            <LiveReload />
          </MantineProvider>
        </QueryClientProvider>
      </body>
    </html>
  );
}
