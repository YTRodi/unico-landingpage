import { ReactNode } from 'react';

const MainLayout = ({ children }: { children: ReactNode }) => (
  <main className="relative pt-12 px-[11.75rem]">{children}</main>
);

export default MainLayout;
