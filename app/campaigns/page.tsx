'use client';

import PageHeaderActions from "../components/header/PageHeaderActions";


export default function Home() {
  return (
  <main>
         <PageHeaderActions
            requestLoading={false}
            title="Lista de Campanhas"
          />
    <h1>campanha</h1>
  </main>
  );
}
