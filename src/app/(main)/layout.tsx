import { InfoBar } from "@/components/infobar";
import { MenuOptions } from "@/components/sidebar";

interface Props {
    children: React.ReactNode;
}

const Layout = ({ children }: Props) => {
    return ( 
        <div className="flex overflow-hidden h-screen">
            <MenuOptions />
            <div className="w-full">
                <InfoBar />
                {children}
            </div>
        </div>
    );
};
 
export default Layout;