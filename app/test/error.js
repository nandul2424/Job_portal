// app/dashboard/error.js
'use client'; // must be a client component
export default function Error({ error, reset }) {
  return (
    <div>
      <h2>Something went wrong!</h2>
      <h3>Error is {error.message}</h3>
      <button onClick={reset}>Try again</button>
    </div>
  );
}
