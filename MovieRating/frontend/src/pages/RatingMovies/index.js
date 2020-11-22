import React, { Suspense } from 'react';


const Layout = React.lazy(() => import(/* webpackChunkName: "rating-movies" */ './Layout'));


export default function LoadingLayout() {
  return (
    <div>
      <Suspense fallback={<div>Loading...</div>}>
        <Layout />
      </Suspense>
    </div>
  );
}
