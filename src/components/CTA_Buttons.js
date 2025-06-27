import Link from "next/link";
import React from "react";

function CTA_Buttons() {
  return (
    <>
      
        <Link
          href=""
          className="px-8 py-4 bg-[var(--color-primary)] hover:bg-white hover:text-[var(--color-primary)] border-2 border-transparent hover:border-[var(--color-primary)] text-white font-semibold rounded-lg shadow-lg transition-all duration-300"
        >
          Sign up
        </Link>
        <Link
          href=""
          className="px-8 py-4 bg-white text-[var(--color-primary)] border-2 border-[var(--color-primary)] hover:bg-[var(--color-primary)] hover:text-white font-semibold rounded-lg shadow-lg transition-all duration-300"
        >
          Talk to sales
        </Link>
      
    </>
  );
}

export default CTA_Buttons;
