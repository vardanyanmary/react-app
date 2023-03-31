import Content from "../../Components/Content/Content";

export interface Data {
    content: string;
}

const data: Data = {
    content: ' CONTENT ',
};

export const HomePage = () => {

    return (
        <>
            <Content content={data.content} />
        </>
    )
}