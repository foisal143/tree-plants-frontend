import { ReactNode } from 'react';

const Container = ({ children }: { children: ReactNode }) => {
  return <div className="max-w-[1280px] mx-auto p-5 lg:p-0">{children}</div>;
};

export default Container;
