/* ==============================================================
 *
 *
 *     ██████╗██╗   ██╗██████╗ ███████╗ ██████╗ ██████╗
 *    ██╔════╝██║   ██║██╔══██╗██╔════╝██╔═══██╗██╔══██╗
 *    ██║     ██║   ██║██████╔╝███████╗██║   ██║██████╔╝
 *    ██║     ██║   ██║██╔══██╗╚════██║██║   ██║██╔══██╗
 *    ╚██████╗╚██████╔╝██║  ██║███████║╚██████╔╝██║  ██║
 *     ╚═════╝ ╚═════╝ ╚═╝  ╚═╝╚══════╝ ╚═════╝ ╚═╝  ╚═╝
 *
 *     CursorContext
 *     Handles all the state of the custom fancy cursor.
 *
 * ============================================================*/

import { createContext, useContext, useState, ReactNode } from "react";

interface CursorContextProps {
  cursorText: string;
  setCursorText: (text: string) => void;
  cursorScale: number;
  setCursorScale: (scale: number) => void;
}

const CursorContext = createContext<CursorContextProps | undefined>(undefined);

export const CursorProvider = ({ children }: { children: ReactNode }) => {
  const [cursorText, setCursorText] = useState<string>("");
  const [cursorScale, setCursorScale] = useState<number>(1);

  return (
    <CursorContext.Provider
      value={{ cursorText, setCursorText, cursorScale, setCursorScale }}
    >
      {children}
    </CursorContext.Provider>
  );
};

export const useCursor = (): CursorContextProps => {
  const context = useContext(CursorContext);
  if (!context) {
    throw new Error("useCursor must be used within a CursorProvider");
  }
  return context;
};
