import { ReactNode } from 'react';

const MainLayout = ({ children }: { children: ReactNode }) => (
  <div className="px-[11.75rem]">{children}</div>
);

export default MainLayout;
