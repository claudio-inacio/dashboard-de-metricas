'use client';
export const dynamic = "force-dynamic";

import { Suspense } from "react";
import CampaingnContainer from "./CampaingnContainer";


export default function Campaigns() {

  return (
    <main>
      <Suspense fallback={null}>
        <CampaingnContainer />
      </Suspense>
    </main>
  );
}
