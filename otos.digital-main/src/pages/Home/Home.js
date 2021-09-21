import React from 'react';

const Header = React.lazy(() => import('../../layout/Header/Header'));
const Activity = React.lazy(() => import('../Activity/Activity'));
const Parallax = React.lazy(() =>
  import('../../components/Parallax/Parrallax')
);
const Parallax2 = React.lazy(() =>
  import('../../components/Parallax2/Parallax2')
);
const Parallax3 = React.lazy(() =>
  import('../../components/Parallax3/Parallax3')
);
const Cards = React.lazy(() => import('../../components/Cards/Cards'));

export default function Home() {
  return (
    <>
      <Header className="header-home" />
      <React.Suspense fallback={<div>Loading...</div>}>
        <Activity />
        <Parallax />
        <Parallax2 />
        <Parallax3 />
        <Cards />
      </React.Suspense>
    </>
  );
}
