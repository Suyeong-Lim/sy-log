import tw from "tailwind-styled-components";

//Post
export const PostTitle = tw.h1`
    text-cyan-600
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

export const NoteContainer = tw.div`
    flex
`;

export const CategoryTitle = tw.div`
    text-accent
    font-medium
`;
