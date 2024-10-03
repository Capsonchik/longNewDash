import {SocDrawer} from "@/components/drawers/socDrawer/SocDrawer";

export default function PurchaseLayout({children,}: Readonly<{ children: React.ReactNode; }>) {
  return (
    <div>
      {children}
      <SocDrawer/>
    </div>
  );
}