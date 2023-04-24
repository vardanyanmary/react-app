import Content from "Components/Content/Content";

export interface Data {
    content: string;
}

const data: Data = {
    content: ' CONTENT ',
};

export const HomePage = () => {

    // const store = useSelector((store) => store)
    // console.log(store, 'store');

    return (
        <>
            <Content content={data.content} />
        </>
    )
}