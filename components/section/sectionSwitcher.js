export default function SectionSwitcher() {
    return (
        <>
            <div className="switcher_container">
                <div>
                    <btn>Home</btn>
                </div>
                <div>
                    <btn>About Me</btn>
                </div>
                <div>
                    <btn>Portofolio</btn>
                </div>
            </div>
            <style jsx>{`
            .switcher_container {
                display: flex;
                justify-content: space-between;
                align-items: center;
                flex-direction: row;
                width: 100%;
                // border: 1px red solid;
            }
            .button_container {
                display: flex;
                justify-content: center;
                align-items: center;
                flex-direction: column;
            }
            btn {
                display: flex;
                justify-content: center;
                align-items: center;
                padding: 10px 50px;
                background: lightgrey;
                border-radius: 12px;
            }
            header {
                width: 100%;
                display: flex;
                justify-content: space-around;
                font-size: 1.2rem;
                background: blue;
            }
        `}</style>
        </>
    )
}
