import Header from "./Header";
import Footer from "./Footer";
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