import { type ReactNode, type PropsWithChildren } from "react";

export default function Layout({ children, modal }: PropsWithChildren<{ modal: ReactNode }>) {
  return (
    <div>
      <h1>Donate Layout</h1>
      {children}
      {modal}
    </div>
  )
}
