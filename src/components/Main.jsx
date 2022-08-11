import { useState } from "react";
import Overview from "./Overview";
import Social from "./Social"

function Main() {
    let [color, setColor] = useState("white")
    let [cardBgColor, setCardBgColor] = useState("hsl(228, 28%, 20%)")
    let [bgColor, setBgColor] = useState("hsl(230, 17%, 14%)")
    let [toggleBgColor, setToggleBgColor] = useState("hsl(146, 68%, 55%)");
    let [buttonBgColor, setButtonBgColor] = useState("black");
    let [left,setLeft] = useState("0px");
    let arrow = ["./images/icon-down.svg", "./images/icon-up.svg"]
    let images = ["./images/icon-facebook.svg", "./images/icon-twitter.svg", "./images/icon-instagram.svg", "./images/icon-youtube.svg"]

    let overview = [
        { title: "Page Views", number: "87", percent: "3%" },
        { title: "Likes", number: "52", percent: "2% " },
        { title: "Likes", number: "5462", percent: "2257 % " },
        { title: "Profile Views", number: "52k", percent: "1375%" },
        { title: "Retweets", number: "117", percent: "303%" },
        { title: "Likes", number: "507", percent: "553%" },
        { title: "Likes", number: "107", percent: "19%" },
        { title: "Total Views", number: "1407", percent: "12% " }
    ];

    let social = [
        { name: "@nathanf", followers: "1987", tag: "Followers", today: "12 Today" },
        { name: "@nathanf", followers: "1044", tag: "Followers", today: "99 Today" },
        { name: "@realnathanf", followers: "11K", tag: "Followers", today: "1099 Today" },
        { name: "Nathan F.", followers: "8239", tag: "Subscribers", today: "144 Today" }
    ];
    let num = 0;
    let chooseColor = (i) => {
        if (i === 0) {
            return "red";
        }
        else {
            return "green";
        }
    }
    let changeTheme = () => {
        if (num === 0) {
            setColor("hsl(230, 17%, 14%)");
            setBgColor("hsl(0, 0%, 100%)");
            setCardBgColor("hsl(227, 47%, 96%)");
            setToggleBgColor("hsl(230, 22%, 74%)");
            setButtonBgColor("white");
            setLeft("20px");
            num = 1;
        }
        else if (num === 1) {
            setColor("white");
            setBgColor("hsl(230, 17%, 14%)");
            setCardBgColor("hsl(228, 28%, 20%)");
            setToggleBgColor("hsl(146, 68%, 55%)");
            setButtonBgColor("black");
            setLeft("0px");
            num = 0;
        }
    }
    return (
        <div style={{ color: color, backgroundColor: bgColor }} className="container" >
            <div className="social">
                <div className="title">
                    <div className="head">
                        <h1>Social Media Dashboard</h1>
                        <p className="gray">Total Followers: 23,004</p>
                    </div>
                    <div className="mode">
                        <p className="gray">Dark Mode</p>
                        <div style={{ backgroundColor: toggleBgColor }} onClick={(e)=>changeTheme()} className="toggle">
                            <button style={{ backgroundColor: buttonBgColor, left: left }}></button>
                        </div>
                    </div>
                </div>
                <div className="socialcards">
                    {social.map(el => {
                        let i = Math.floor(Math.random() * 2);
                        return <Social txtColor={chooseColor(i)} icon={arrow[i]} image={images[Math.floor(Math.random() * 4)]} bgColor={cardBgColor} name={el.name} followers={el.followers} status={el.tag} today={el.today} />
                    })}
                </div>

            </div>
            <div className="overview">
                <h1>Overview - Today</h1>
                <div className="overviewcards">
                    {overview.map(el => {
                        let i = Math.floor(Math.random() * 2);
                        return <Overview txtColor={chooseColor(i)} icon={arrow[i]} title={el.title} number={el.number} percent={el.percent} bgColor={cardBgColor} image={images[Math.floor(Math.random() * 4)]} />
                    })}
                </div>
            </div>
        </div >
    )
}
export default Main