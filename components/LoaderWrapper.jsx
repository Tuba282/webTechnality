"use client";

import React, { useEffect, useState } from "react";
import Loader from "./loader";

export default function LoaderWrapper({ children, delay = 5000 }) {
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    // show loader on initial mount for `delay` ms
    const t = setTimeout(() => setLoading(false), delay);
    return () => clearTimeout(t);
  }, [delay]);

  return (
    <>
      {loading && (
        <div
          style={{
            position: "fixed",
            inset: 0,
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
            background: "#0b0b0b",
            zIndex: 9999,
          }}
        >
          <Loader />
        </div>
      )}

      <div style={{ visibility: loading ? "hidden" : "visible" }}>{children}</div>
    </>
  );
}
