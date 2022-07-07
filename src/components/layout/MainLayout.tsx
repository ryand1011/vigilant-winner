import { MenuBar } from "../widgets/MenuBar";

/** Main Layout */
type MainLayoutProps = {
    message: string;
};

export const MainLayout = ({ message }: MainLayoutProps) => 
    <>
        <MenuBar />
        <h4>Main content</h4>
    </>;