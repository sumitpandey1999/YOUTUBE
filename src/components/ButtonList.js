import Button from "./Button"



const ButtonList = () => {
    const buttonName = ["All", "python", "Music", "Software Engineering", "Data Science", "Gaming", "Editing", "Bhojpuri Hits", "UPSC"];
    return (
        <div className="flex">
            {buttonName.map((bName, index) => (<Button key={index} name={bName}/>))}
        </div>
    )
}

export default ButtonList