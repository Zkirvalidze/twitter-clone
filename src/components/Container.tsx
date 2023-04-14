import React, { FC, ReactNode } from 'react';

interface ThemeContainerProps {
  children: ReactNode;
}
const ThemeContainer: FC<ThemeContainerProps> = ({ children }) => {
  return (
    <div className="h-screen bg-black">
      <div className="container h-full mx-auto xl:px-30 max-w-6xl">
        <div className="grid grid-cols-4 h-full">{children}</div>
      </div>
    </div>
  );
};

export default ThemeContainer;
