'use client';

// import * as Sentry from "@sentry/nextjs";
import Error from 'next/error';
import { useEffect } from 'react';

export default function GlobalError({ error, reset }) {
  useEffect(() => {
    //   Sentry.captureException(error);
    console.error(error);
  }, [error]);

  return (
    <html>
      <body>
        <Error />
        <button
          onClick={
            // Attempt to recover by trying to re-render the segment
            () => reset()
          }
        >
          Try again
        </button>
      </body>
    </html>
  );
}
