import Header from "./header";
import Footer from "./footer";
import {css} from "@emotion/react";

export default function Layout({children}){
    return(
        <div css={css`background-color: rgba(13, 17, 24, 0.9)`}>
            <Header/>
            {children}
            <Footer/>
        </div>
    )
}