import { Suspense } from 'react';
import CatFacts from './CatFacts';
import CatFactsSkeleton from './CatFactsSkeleton';

export default async function Home() {
  return (
    <main className="flex items-center p-24">
      <Suspense fallback={<CatFactsSkeleton />}>
        <CatFacts />
      </Suspense>
    </main>
  );
}
