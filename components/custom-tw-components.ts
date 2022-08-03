import tw from "tailwind-styled-components";

//Post
export const PostTitle = tw.div`
    text-lightScheme-primary
    text-3xl
    font-bold
`;
//NoteAside Component
export const NoteAsideContainer = tw.section`
    w-[100%]

    pr-8
    pt-5
    relative
    flex
    flex-col
    overflow-y-scroll
    duration-300
    mr-2
`;

export const AsideItemTitle = tw.div`

`;

export const PostContainer = tw.div`
    mb-20
`;
