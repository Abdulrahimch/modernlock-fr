import SubHeader from "../../components/Header/SubHeader";
import { ButtonInterface } from "../../interface/SubHeader";

const Home = () => {
    const buttons: ButtonInterface[] = [
        {btnText: "today", onBtnClick: () => {console.log("Today jas been cliked")}}, 
        {btnText: "calender", onBtnClick: () => {console.log("calender jas been cliked")}}
    ]

    return (
        <>
            <SubHeader style="subHeader" buttons={buttons} />
        </>
    )
};

export default Home;