import Navigation from "@/components/Navigation/Navigation";
import ThemeProvider from "@/providers/ThemeProvider";
import MainWrapper from "@/app/(app-layout)/MainWrapper";

export default function Layout({children} : {children: React.ReactNode}) {
    return (
        <ThemeProvider>
            <MainWrapper>
                <Navigation/>
                {children}
            </MainWrapper>
        </ThemeProvider>
    )
}